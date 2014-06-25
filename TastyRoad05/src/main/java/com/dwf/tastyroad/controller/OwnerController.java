package com.dwf.tastyroad.controller;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.dwf.tastyroad.model.Owner;
import com.dwf.tastyroad.model.Search;
import com.dwf.tastyroad.service.OwnerService;

//URI /beacon로 들어오는 요청 처리
@Controller
@RequestMapping("/owner")
@ContextConfiguration(locations = {"classpath:config/commonservice.xml"})
public class OwnerController {
	
	@Value("#{commonProperties['pageUnit']}") //3
	private int pageUnit;

	@Value("#{commonProperties['pageSize']}") //3
	private int pageSize;
	
	//beaconServiceImpl을 beaconService에 Wiring(DI:dependancy injection)
	@Autowired
	@Qualifier("ownerServiceImpl")
	private OwnerService ownerService;

	public OwnerController() {
		System.out.println("::" +getClass()+ " Default Constructor Call");
	}
	
	@RequestMapping(value="/getOwnerDetail.do", method=RequestMethod.POST)
	public ModelAndView getOwnerDetailAction(
			@ModelAttribute("search")Search search
			)throws Exception{

		System.out.println("_______________________________________________");
		System.out.println("==> /owner/getOwnerDetail.do__call !!!");
		System.out.println("==> search : " +search);
		System.out.println("_______________________________________________");
		
		Owner owner = null;

		if(search.getSearchCondition() != null){
			if(search.getSearchCondition().equals("5")){
				Owner tmpOwner = new Owner(Integer.parseInt(search.getSearchKeyword()));
				owner = ownerService.findOwner(tmpOwner);
				if(owner == null){
					owner = tmpOwner;
				}
			}
		}
		
		System.out.println("owner : " +owner);
		
		ModelAndView modelAndView = new ModelAndView("ownerViews/ownerDetail");
		modelAndView.addObject("owner", owner);	

		return modelAndView;
	}
	
	@RequestMapping(value="/getUpdateOwnerView.do", method=RequestMethod.POST)
	public ModelAndView getUpdateOwnerViewAction(
			@ModelAttribute("owner")Owner owner) throws Exception{

		System.out.println("_______________________________________________");
		System.out.println("==> /owner/getUpdateOwnerView.do__call !!!");
		System.out.println("==> owner : " +owner);
		System.out.println("_______________________________________________");
		
		ModelAndView modelAndView = new ModelAndView("ownerViews/ownerUpdate");
		modelAndView.addObject("owner", ownerService.getOwner(owner.getOwnerId()));
		
		return modelAndView;
	}
	
	@RequestMapping(value="/updateOwner.do", method=RequestMethod.POST)
	public ModelAndView updateOwnerAction(
			@ModelAttribute("owner")Owner owner 			
			) throws Exception{
		
		System.out.println("_______________________________________________");
		System.out.println("==> /owner/updateOwner.do__call !!!");
		System.out.println("==> owner : "+owner);
		System.out.println("_______________________________________________");
		
		ownerService.updateOwner(owner);
		
		//modelAndView.setViewName("forward:/owner/getOwnerDetail.do");
		Search search=new Search("5", ""+owner.getResId());
		
		Owner tmpOwner = new Owner(Integer.parseInt(search.getSearchKeyword()));
		owner = ownerService.findOwner(tmpOwner);
		if(owner == null){
			owner = tmpOwner;
		}
		
		ModelAndView modelAndView = new ModelAndView("ownerViews/ownerDetail");
		modelAndView.addObject("owner", owner);	
		
		return modelAndView;
	}
	
	@RequestMapping(value="/getAddOwnerView.do", method=RequestMethod.POST)
	public ModelAndView getAddOwnerViewAction(//@RequestParam(value = "resId", required = false) Integer resId) throws Exception{
			@ModelAttribute("owner")Owner owner) throws Exception{
		
		System.out.println("_______________________________________________");
		System.out.println("==> /owner/getAddOwnerView.do__call !!!");
		System.out.println("==> owner : " +owner);
		System.out.println("_______________________________________________");
		
		ModelAndView modelAndView = new ModelAndView("ownerViews/ownerAdd");
		modelAndView.addObject("owner", owner);

		return modelAndView;
	}
	
	@RequestMapping(value="/addOwner.do", method=RequestMethod.POST)
	public ModelAndView addOwnerAction(
			@ModelAttribute("owner")Owner owner) throws Exception{
		
		System.out.println("_______________________________________________");
		System.out.println("==> /owner/addOwner.do__call !!!");
		System.out.println("==> owner : " +owner);
		System.out.println("_______________________________________________");
		
		ownerService.addOwner(owner);
		Owner addResultOwner = ownerService.findOwner(new Owner(owner.getResId()));
		
		ModelAndView modelAndView = new ModelAndView("ownerViews/ownerDetail");
		modelAndView.addObject("owner", addResultOwner);	

		return modelAndView;
	}
	
	@RequestMapping(value="/removeOwner.do", method=RequestMethod.POST)
	public ModelAndView removeOwnerAction(
			@ModelAttribute("owner")Owner owner) throws Exception{
		
		System.out.println("_______________________________________________");
		System.out.println("==> /owner/removeOwner.do__call !!!");
		System.out.println("==> owner : " +owner);
		System.out.println("_______________________________________________");
		
		ownerService.removeOwner(owner.getOwnerId());
		
		ModelAndView modelAndView = new ModelAndView("ownerViews/ownerDetail");
		//view단으로 resId만 담긴 owner를 넘겨줌
		//resId를 넘겨 줘야 ownerDetail.jsp에서 점주 추가가 가능함
		//ownerId를 0으로 설정 해주어 점주가 없는(혹은 삭제된) 것으로 설정해서 넘겨줌
		owner.setOwnerId(0);
		modelAndView.addObject("owner", owner);	
		
		return modelAndView;
	}
	
}
	

