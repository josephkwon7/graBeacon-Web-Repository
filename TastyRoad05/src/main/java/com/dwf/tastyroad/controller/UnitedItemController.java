package com.dwf.tastyroad.controller;

import java.util.List;
import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.dwf.tastyroad.model.Search;
import com.dwf.tastyroad.model.Item;
//import com.freshmarket.service.ItemService;
import com.dwf.tastyroad.service.UnitedItemService;

@Controller
@RequestMapping("/googlemap")
public class UnitedItemController {
	
	@Autowired
	@Qualifier("unitedItemServiceImpl")
    private UnitedItemService unitedItemService;
	
	@Value("#{commonProperties['pageUnit']}")
	//@Value("#{commonProperties['pageUnit'] ?: 3}")
	int pageUnit;
	
	@Value("#{commonProperties['pageSize']}")
	//@Value("#{commonProperties['pageSize'] ?: 2}")
	int pageSize;

    public void setItemService(UnitedItemService unitedItemService){
    	this.unitedItemService=unitedItemService;
    }
    
    public UnitedItemController() {
		// TODO Auto-generated constructor stub
		System.out.println("__________________________");
    	System.out.println("United_Item_Controller_Call");
    	System.out.println("__________________________");
	}
    
    
	@RequestMapping(value = "/unitedItemMapView", method=RequestMethod.GET)
	public ModelAndView googlemap(Locale locale, Model model) {
		ModelAndView modelAndView = new ModelAndView();
		
		System.out.println("unitedItem_controller_session_hashcode_");
		System.out.println("unitedItem_controller_session_getId_");
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
