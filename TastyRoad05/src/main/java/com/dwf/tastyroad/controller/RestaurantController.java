package com.dwf.tastyroad.controller;

import java.io.File;
import java.io.InputStream;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.dwf.tastyroad.model.Page;
import com.dwf.tastyroad.model.Restaurant;
import com.dwf.tastyroad.model.Search;
import com.dwf.tastyroad.service.RestaurantService;
import com.oreilly.servlet.multipart.FilePart;
import com.oreilly.servlet.multipart.MultipartParser;
import com.oreilly.servlet.multipart.ParamPart;
import com.oreilly.servlet.multipart.Part;

//Class가 Controller임을 Spring에 알려줌
@Controller
//URI /restaurant로 들어오는 요청 처리
@RequestMapping("/restaurant")
//classpath(src/main/resources)/config/commonservice.xml파일에서 설정 읽어옴(pageSize, pageUnit)
@ContextConfiguration(locations = {"classpath:config/commonservice.xml"})
public class RestaurantController {
	
	//commonservice.xml에서 정의된 commonProperties(classpath:config/commonservice.xml)에서
	//pageUnit 값을 찾아 아래 field에 injection 함
	@Value("#{commonProperties['pageUnit']}") 
	private int pageUnit;

	//상동. pageSize
	@Value("#{commonProperties['pageSize']}") 
	private int pageSize;
	
	//restaurantServiceImpl을 restaurantService에 Wiring(DI:dependancy injection)
	@Autowired
	@Qualifier("restaurantServiceImpl")
	private RestaurantService restaurantService;

	///Constructor - default
	public RestaurantController() {
		//Controller가 wiring될 되어 생성시에 console에 표시(서버 시작시)
		System.out.println("::" +getClass()+ " Default Constructor Call");
	}
	
	//listRestaurant.do 요청 처리 - 맛집목록보기 화면 요청
	@RequestMapping(value="/listRestaurant.do", method=RequestMethod.POST)
	//Search 모델을 인자로 받음 - web client로 부터 받은 것
	public ModelAndView listRestaurantAction(@ModelAttribute("search")Search search) throws Exception{
		
		System.out.println("_______________________________________________");
		System.out.println("==> /restaurant/listRestaurant.do __call !!!");
		System.out.println("==> search : " +search);
		System.out.println("_______________________________________________");
		
		//CurrentPage 초기값 1 set
		if(search.getCurrentPage() == 0 ){
			search.setCurrentPage(1);
		}
		
		//field에서 읽어온 pageSize set
		search.setPageSize(pageSize);		
		
		//DB에서 검색조건(초기에는 null)을 적용해 가져온 restaurant 목록 가져옴 
		List restaurantList = restaurantService.getRestaurantList(search);
		//Page instance 생성(게시판에 page navigation시 사용)
		Page resultPage = new Page( search.getCurrentPage(), restaurantService.getTotalCount(search), pageUnit, pageSize);
		
		//restaurant list를 console에 출력
		Restaurant restaurant;
		for(int i=0; i<restaurantList.size();i++){
			restaurant = (Restaurant) restaurantList.get(i);
			System.out.println("restaurant.toString()"+restaurant.toString()+"__");
		}
		System.out.println("@/listRestaurant.do resultPage : " +resultPage);
		
		//response에 전달할 model과 view를 담을 ModelAndView 인스턴스 생성
		ModelAndView modelAndView = new ModelAndView();
		//전달할 view set. 
		//WEB-INF/restaurantViews/restaurantList.jsp를 전달(servlet-context.xml참조)
		modelAndView.setViewName("restaurantViews/restaurantList");
		//이하 3라인. 이름,객체 형태로 response에 전달
		modelAndView.addObject("restaurantList", restaurantList);
		modelAndView.addObject("resultPage", resultPage);
		modelAndView.addObject("search", search);

		//값이 담겨진 modelAndView를 return함으로서 위의 값이 set된 채로 view로 이동 
		return modelAndView;
	}
	
	///getAddRestaurantView.do 요청 처리 - 추가할 맛집 입력 화면 요청
	@RequestMapping(value="/getAddRestaurantView.do", method=RequestMethod.POST)
	public ModelAndView getAddRestaurantViewAction(@ModelAttribute("restaurant")Restaurant restaurant) throws Exception{

		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("restaurantViews/restaurantAdd");
			
		return modelAndView;
	}

	///getAddRestaurantView.do 요청 처리 - 맛집 추가 요청
	@RequestMapping(value="/addRestaurant.do", method=RequestMethod.POST)
	//인자로 web client에서 모델 restaurant을 받음 
	public ModelAndView addProductAction(
			@ModelAttribute("restaurant")Restaurant restaurant,
			HttpServletRequest request,
			HttpServletResponse response)throws Exception {

		System.out.println("_______________________________________________");
		System.out.println("==> /restaurant/addRestaurant.do __call !!!");
		System.out.println("_______________________________________________");
		
		try {  
			//전달된 String과 File을 Parsing할 MultipartParser 인스턴스 생성
			//10 * 1024 * 1024 = 10MB. 업로드 최대 파일 크기
			MultipartParser mp = new MultipartParser(request, 10 * 1024 * 1024);  
			//UTF-8인코딩 설정. 없을시 한글 깨짐
			mp.setEncoding("UTF-8");
			//A Part is an abstract upload part which represents an INPUT form element 
			//in a multipart/form-data form submission
			//Part를 정의/초기화. Part는 form tag로 upload된 part(부분)을 말함. file과 String포함
			Part part = null;  
			//A ParamPart is an upload part which represents 
			//a normal INPUT (for example a non TYPE="file") form parameter.
			//ParamPart 객체를 정의/초기화. ParamPart는 Server로 전달된 부분 중 file을 제외한 parameter부분 
			//즉, name="요시참치", addr="서초동" ,.. 등 각각이 하나의 ParamPart
			ParamPart paramPart = null;
			//전달된 parameter의 이름. 즉, name, addr, imgSmall1, imgBig1 등
			String paramName = "";
			//전달된 해당 parameter 값에 매칭되는 값. 즉, 요시참치, 서초동 등
			String paramValue = null; 
			//File 객체를 정의/초기화. 하나의 파일이 객체화 된것
			File file = null;
			//전달된 파일의 이름
			String fileName = "";
			//dynamic하게 구성된 기본 파일 저장 경로
			String baseFilePath = request.getRealPath("/")+"resources\\img"; 
			//System.out.println(baseFilePath);
			
			//upload된 모든 Part에 대해 반복 
			while ((part = (Part) mp.readNextPart()) != null) {
				
				paramName = part.getName();
				//이번 part의 타입이 파일이라면, 업로드 처리
				if (part.isFile()) {  
					//upload된 파일이 실제 저장될 위치
					String filePath = null;
					//Part에서 FilePart(파일부분)만 추출(형변환)
					FilePart filePart = (FilePart) part;  
					//FilePart로 부터 파일 이름 추출
					fileName = (String) filePart.getFileName();  
					//저장할 경로+파일이름 을 위해 StringBuffer type의 fileRef 생성
					StringBuffer fileRef = new StringBuffer(); 
					
					//parameter의 이름에 따라 파일이 저장될 경로 set
					switch(paramName){
						case "imgSmall1" : 
							filePath = baseFilePath + "\\main"; 
							break;
						case "imgBig1" :
						case "imgBig2" :
						case "imgBig3" :
							filePath = baseFilePath + "\\detail"; 
							break;
						case "imgMenu" :
							filePath = baseFilePath + "\\menu"; 
							break;
					}//end of switch
	 
					//실제 파일 생성(저장). 경로는 를 dynamic하게 구성함 					 
					filePart.writeTo(new File(String.valueOf(fileRef.append(filePath).append(File.separator).append(fileName))));  
					//fileName 이름이 있을때에만 수해, 즉 파일이 업로드되지 않은 필드는 처리하지 않는다 
					//DB에 null인 상태로 유지
					if(fileName != null){
						//restaurant 인스턴스에 경로 포함 파일 이름 set(String). 실제 파일을 저장하지 않는다!
						//이 때의 경로는 resources/img까지는 공통이기 때문에 생략. 그 이후 부터만 저장한다 
						//즉, imgSmall1은 resources/img/main/파일이름 으로
						//저장하지만 인스턴스에는 main/파일이름 으로만 저장하고 이대로 DB에 저장된다 
						switch(paramName){
							case "imgSmall1" :
								restaurant.setImgSmall1("main/" +fileName);
								break;
							case "imgBig1" :
								restaurant.setImgBig1("detail/" +fileName);
								break;
							case "imgBig2" :
								restaurant.setImgBig2("detail/" +fileName);
								break;
							case "imgBig3" :
								restaurant.setImgBig3("detail/" +fileName);
								break;
							case "imgMenu" :
								restaurant.setImgMenu("menu/" +fileName);
								break;
						}//end of switch 
					}//end of if
				//text로 된 parameter의 경우 처리한다 - 즉, file이 아닌 경우.
				}else { 
				//ParamPart로 형 변환 해서 parameter 부분만 다룸  
				paramPart = (ParamPart)part;  
				//parameter의 값을 String으로 저장
				paramValue = new String(paramPart.getStringValue());  
					//paramValue가 있을 경우만 restaurant에 set함
					if(paramValue != null){
					//parameter 이름에 따라 switch문으로 분기해서 restaurant 인스턴스에 set함
					//결국 후에 DB에 저장함
						switch(paramName){
							case "name" :
								restaurant.setName(paramValue);
								break;
							case "addr" :
								restaurant.setAddr(paramValue);
								break;
							case "phone" :
								restaurant.setPhone(paramValue);
								break;
							case "licenseNo" :
								restaurant.setLicenseNo(paramValue);
								break;
							case "geoLat" :
								restaurant.setGeoLat(Double.parseDouble(paramValue));
								break;
							case "geoLong" :
								restaurant.setGeoLong(Double.parseDouble(paramValue));
								break;					
							case "copyComment" :
								restaurant.setCopyComment(paramValue);
								break;
							case "resCategory" :
								restaurant.setResCategory(Integer.parseInt(paramValue));
								break;
						}//end of switch
					}//end of if
				}//end of if-else  
			}//end of while
		} catch (Exception e){  
			e.printStackTrace();
			throw e;  			
		}//end of catch 
		
		//실제 맛집 추가 작업 수행 - DB에 upload된 데이터를 저장
		restaurantService.addRestaurant(restaurant);

		//맛집 추가 작업 수행 후에 맛집 목록 화면 으로 자동 이동
		//return "forward:/restaurant/listRestaurant.do";
		
		//CurrentPage 초기값 1 set
		Search search = new Search();
		search.setCurrentPage(1);
		search.setPageSize(pageSize);
		
		//field에서 읽어온 pageSize set
		search.setPageSize(pageSize);		
		
		//DB에서 검색조건(초기에는 null)을 적용해 가져온 restaurant 목록 가져옴 
		List restaurantList = restaurantService.getRestaurantList(search);
		//Page instance 생성(게시판에 page navigation시 사용)
		Page resultPage = new Page( search.getCurrentPage(), restaurantService.getTotalCount(search), pageUnit, pageSize);
		
		//restaurant list를 console에 출력
		for(int i=0; i<restaurantList.size();i++){
			restaurant = (Restaurant) restaurantList.get(i);
			System.out.println("restaurant.toString()"+restaurant.toString()+"__");
		}
		
		//response에 전달할 model과 view를 담을 ModelAndView 인스턴스 생성
		ModelAndView modelAndView = new ModelAndView();
		//전달할 view set. 
		//WEB-INF/restaurantViews/restaurantList.jsp를 전달(servlet-context.xml참조)
		modelAndView.setViewName("restaurantViews/restaurantList");
		//이하 3라인. 이름,객체 형태로 response에 전달
		modelAndView.addObject("restaurantList", restaurantList);
		modelAndView.addObject("resultPage", resultPage);
		modelAndView.addObject("search", search);
		
		return modelAndView;
	}
	
	@RequestMapping(value="/getRestaurantDetail.do", method=RequestMethod.POST)
	public ModelAndView getRestaurantDetailAction(@ModelAttribute("restaurant")Restaurant restaurant) throws Exception{

		System.out.println("_______________________________________________");
		System.out.println("==> /restaurant/getRestaurantDetail.do__call !!!");
		System.out.println("_______________________________________________");	

		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("restaurantViews/restaurantDetail");
		modelAndView.addObject("restaurant", restaurantService.getRestaurant(restaurant.getResId()));
			
		return modelAndView;
	}
	
	@RequestMapping(value="/getUpdateRestaurantView.do", method=RequestMethod.POST)
	public ModelAndView getUpdateRestaurantViewAction(@ModelAttribute("restaurant")Restaurant restaurant) throws Exception{

		System.out.println("_______________________________________________");
		System.out.println("==> /restaurant/getUpdateRestaurantView.do__call !!!");
		System.out.println("_______________________________________________");	
		
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("restaurantViews/restaurantUpdate");
		modelAndView.addObject("restaurant", restaurantService.getRestaurant(restaurant.getResId()));
			
		return modelAndView;
	}
	
	@RequestMapping(value="/updateRestaurant.do", method=RequestMethod.POST)
	public ModelAndView updateRestaurantAction(@ModelAttribute("restaurant")Restaurant restaurant) throws Exception{

		System.out.println("_______________________________________________");
		System.out.println("==> /restaurant/updateRestaurant.do__call !!!");
		System.out.println("_______________________________________________");		
		
		restaurantService.updateRestaurant(restaurant);
		
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("restaurantViews/restaurantDetail");
		modelAndView.addObject("restaurant", restaurantService.getRestaurant(restaurant.getResId()));
			
		return modelAndView;
	}


	@RequestMapping(value="/removeRestaurant.do", method=RequestMethod.POST)
	//인자로 web client에서 모델 restaurant을 받음 
	public ModelAndView removeRestaurantAction(
			@ModelAttribute("restaurant")Restaurant restaurant
			)throws Exception {

		System.out.println("_______________________________________________");
		System.out.println("==> /restaurant/addRestaurant.do__call !!!");
		System.out.println("_______________________________________________");
		
		restaurantService.removeRestaurant(restaurant.getResId());
		
		//CurrentPage 초기값 1 set
		Search search = new Search();
		search.setCurrentPage(1);
		search.setPageSize(pageSize);
		
		//field에서 읽어온 pageSize set
		search.setPageSize(pageSize);		
		
		//DB에서 검색조건(초기에는 null)을 적용해 가져온 restaurant 목록 가져옴 
		List restaurantList = restaurantService.getRestaurantList(search);
		//Page instance 생성(게시판에 page navigation시 사용)
		Page resultPage = new Page( search.getCurrentPage(), restaurantService.getTotalCount(search), pageUnit, pageSize);
		
		//restaurant list를 console에 출력
		for(int i=0; i<restaurantList.size();i++){
			restaurant = (Restaurant) restaurantList.get(i);
			System.out.println("restaurant.toString()"+restaurant.toString()+"__");
		}
		
		//response에 전달할 model과 view를 담을 ModelAndView 인스턴스 생성
		ModelAndView modelAndView = new ModelAndView();
		//전달할 view set. 
		//WEB-INF/restaurantViews/restaurantList.jsp를 전달(servlet-context.xml참조)
		modelAndView.setViewName("restaurantViews/restaurantList");
		//이하 3라인. 이름,객체 형태로 response에 전달
		modelAndView.addObject("restaurantList", restaurantList);
		modelAndView.addObject("resultPage", resultPage);
		modelAndView.addObject("search", search);
		
		return modelAndView;
	}	
	
}