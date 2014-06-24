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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.dwf.tastyroad.model.Beacon;
import com.dwf.tastyroad.model.Owner;
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
	
	@RequestMapping(value="/getAddBeaconView.do", method=RequestMethod.GET)
	public ModelAndView getAddBeaconViewAction(
			@ModelAttribute("beacon")Beacon beacon) throws Exception{
		
		System.out.println("_______________________________________________");
		System.out.println("==> /beacon/getAddBeaconView.do__call !!!");
		System.out.println("==> beacon : " +beacon);
		System.out.println("_______________________________________________");
		
		ModelAndView modelAndView = new ModelAndView("beaconViews/beaconAdd");
		modelAndView.addObject("beacon", beacon);

		return modelAndView;
	}
	
	@RequestMapping(value="/addBeacon.do", method=RequestMethod.GET)
	public ModelAndView addBeaconAction(
			@ModelAttribute("beacon")Beacon beacon) throws Exception{
		
		System.out.println("_______________________________________________");
		System.out.println("==> /owner/addBeacon.do__call !!!");
		System.out.println("==> beacon : " +beacon);
		System.out.println("_______________________________________________");
		
		beaconService.addBeacon(beacon);
		
		ModelAndView modelAndView = new ModelAndView(
				"forward:/owner/getBeaconList.do?searchCondition=4&searchKeyword=" 
				+beacon.getResId());
		
		return modelAndView;
	}
	
	@RequestMapping(value="/listBeacon.do", method=RequestMethod.GET)
	public ModelAndView listBeaconAction(
			@ModelAttribute("search")Search search) throws Exception{
		
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
		System.out.println("@/listBeacon.do resultPage : " +resultPage);
		
		//debugging용 beacon list출력
		Beacon beacon;
		for(int i=0; i<beaconList.size();i++){
			beacon = (Beacon) beaconList.get(i);
			System.out.println("beacon.toString()"+beacon.toString()+"__");
		}
		
		ModelAndView modelAndView = new ModelAndView("beaconViews/beaconList");
		modelAndView.addObject("beaconList", beaconList);
		modelAndView.addObject("resultPage", resultPage);
		modelAndView.addObject("search", search);

		return modelAndView;
	}
	
	

}