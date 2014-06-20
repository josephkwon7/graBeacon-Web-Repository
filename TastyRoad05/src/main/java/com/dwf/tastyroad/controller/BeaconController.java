package com.dwf.tastyroad.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.dwf.tastyroad.model.Beacon;
import com.dwf.tastyroad.model.Page;
import com.dwf.tastyroad.model.Search;
import com.dwf.tastyroad.service.BeaconService;

//URI /beacon로 들어오는 요청 처리
@Controller
@RequestMapping("/beacon")
@ContextConfiguration(locations = {"classpath:config/commonservice.xml"})
public class BeaconController {
	
	@Value("#{commonProperties['pageUnit']}") //3
	private int pageUnit;

	@Value("#{commonProperties['pageSize']}") //3
	private int pageSize;
	
	//beaconServiceImpl을 beaconService에 Wiring(DI:dependancy injection)
	@Autowired
	@Qualifier("beaconServiceImpl")
	private BeaconService beaconService;

	public BeaconController() {
		System.out.println("::" +getClass()+ " Default Constructor Call");
	}
	
	@RequestMapping(value="/listBeacon.do", method=RequestMethod.GET)
	public ModelAndView listBeaconAction(@ModelAttribute("search")Search search) throws Exception{
		
		System.out.println("_______________________________________________");
		System.out.println("==> /beacon/listBeacon.do __call !!!");
		System.out.println("==> search : " +search);
		System.out.println("_______________________________________________");
				
		if(search.getCurrentPage() == 0 ){
			search.setCurrentPage(1);
		}
		search.setPageSize(pageSize);		
		
		List beaconList = beaconService.getBeaconList(search);
		Page resultPage = new Page( search.getCurrentPage(), beaconService.getTotalCount(search), pageUnit, pageSize);
		//System.out.println(resultPage);
		
		//beacon list console 출력
		Beacon beacon;
		for(int i=0; i<beaconList.size();i++){
			beacon = (Beacon) beaconList.get(i);
			System.out.println("beacon.toString()"+beacon.toString()+"__");
		}
		
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("beaconViews/beaconList");
		modelAndView.addObject("beaconList", beaconList);
		modelAndView.addObject("resultPage", resultPage);
		modelAndView.addObject("search", search);
		//System.out.println(modelAndView.getViewName());
//		System.out.println("__________________________");
//		System.out.println("__________________________");

		return modelAndView;
	}
	
	

}