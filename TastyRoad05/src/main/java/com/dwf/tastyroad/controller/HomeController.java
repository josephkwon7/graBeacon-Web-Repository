package com.dwf.tastyroad.controller;

import java.io.File;
import java.io.InputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.dwf.tastyroad.model.Page;
import com.dwf.tastyroad.model.Restaurant;
import com.dwf.tastyroad.model.Search;
import com.dwf.tastyroad.service.RestaurantService;
import com.dwf.tastyroad.service.UnitedItemService;
import com.oreilly.servlet.multipart.FilePart;
import com.oreilly.servlet.multipart.MultipartParser;
import com.oreilly.servlet.multipart.ParamPart;
import com.oreilly.servlet.multipart.Part;


@Controller
@RequestMapping("/home")
public class HomeController {
	

	///Field
	@Autowired
	@Qualifier("unitedItemServiceImpl")
    private UnitedItemService unitedItemService;
	
	@Value("#{commonProperties['pageUnit']}")
	//@Value("#{commonProperties['pageUnit'] ?: 3}")
	int pageUnit;
	
	@Value("#{commonProperties['pageSize']}")
	//@Value("#{commonProperties['pageSize'] ?: 2}")
	int pageSize;
	///Constructor - default
	public HomeController() {
		//Controller가 wiring될 되어 생성시에 console에 표시(서버 시작시)
		System.out.println("::" +getClass()+ " Default Constructor Call");
	}
	
	
	@RequestMapping(value="/getIntroView", method=RequestMethod.POST)
	public ModelAndView getIntroViewAction() throws Exception{
		
		System.out.println("_______________________________________________");
		System.out.println("==> /home/getIntroView __call !!!");
		System.out.println("_______________________________________________");

		return new ModelAndView("homeViews/intro");
	}
	
	@RequestMapping(value="/getManageView", method=RequestMethod.POST)
	public ModelAndView getManageViewAction() throws Exception{
		
		System.out.println("_______________________________________________");
		System.out.println("==> /home/getManageView __call !!!");
		System.out.println("_______________________________________________");

		return new ModelAndView("homeViews/manage");
	}
	
	@RequestMapping(value="/getMapView", method=RequestMethod.GET)
	public ModelAndView getMapViewAction(Locale locale, Model model) throws Exception{
		ModelAndView modelAndView = new ModelAndView();
		
		System.out.println("unitedItem_controller_session_hashcode_");
		System.out.println("unitedItem_controller_session_getId_");
		System.out.println("_______________________________________________");
		System.out.println("==> /home/getMapView __call !!!");
		System.out.println("_______________________________________________");
		
		Search search=new Search();
		
		search.setCurrentPage(1);
		search.setPageSize(1000);
		/**/
		//search.setPageSize(500);
		
		List itemList=unitedItemService.findItemList(search);
		modelAndView.addObject("itemList", unitedItemService.findItemList(search));
		System.out.println(unitedItemService.findItemList(search));
		System.out.println(itemList);		
		modelAndView.setViewName("homeViews/map");
		return modelAndView;
	}
	

	
}