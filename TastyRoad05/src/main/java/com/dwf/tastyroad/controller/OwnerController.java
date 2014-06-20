package com.dwf.tastyroad.controller;

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
	
	@RequestMapping(value="/getOwnerDetail.do")
	public ModelAndView getOwnerDetailAction(@ModelAttribute("search")Search search) throws Exception{

		System.out.println("_______________________________________________");
		System.out.println("==> /owner/getOwnerDetail.do __call !!!");
		System.out.println("==> search : " +search);
		System.out.println("_______________________________________________");
		
		System.out.println("==> search.getSearchKeyword : " +search.getSearchKeyword());
		//Owner owner2 = ownerService.findOwner(new Owner);
		Owner owner = ownerService.findOwner(new Owner(Integer.parseInt(search.getSearchKeyword())));
		//System.out.println(owner.toString());
		//System.out.println("!!!!!!!" + owner);
		
		if(owner == null){
			owner = new Owner(Integer.parseInt(search.getSearchKeyword()));
		}
		
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("ownerViews/ownerDetail");
		modelAndView.addObject("owner", owner);	

		return modelAndView;
	}
	
	@RequestMapping(value="/getUpdateOwnerView.do", method=RequestMethod.GET)
	public ModelAndView getUpdateOwnerViewAction(@RequestParam("ownerId") int ownerId) throws Exception{

		System.out.println("_______________________________________________");
		System.out.println("==> /owner/getUpdateOwnerView.do__call !!!");
		System.out.println("_______________________________________________");
		
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("ownerViews/ownerUpdate");
		modelAndView.addObject("owner", ownerService.getOwner(ownerId));
		
		return modelAndView;
	}
	
	@RequestMapping(value="/updateOwner.do", method=RequestMethod.POST)
	public String updateOwnerAction(@ModelAttribute("owner")Owner owner) throws Exception{
		
		System.out.println("_______________________________________________");
		System.out.println("==> /owner/updateOwner.do__call !!!");
		System.out.println("==> owner : " +owner);
		System.out.println("_______________________________________________");
		
		ModelAndView modelAndView=new ModelAndView();
		ownerService.updateOwner(owner);
		modelAndView.addObject("owner", ownerService.getOwner(owner.getOwnerId()));
		modelAndView.addObject("search", new Search("5", String.valueOf(owner.getResId())));
		System.out.println(owner.toString());
		return "forward:/owner/getOwnerDetail.do";
	}
	
	@RequestMapping(value="/getAddOwnerView.do", method=RequestMethod.GET)
	public ModelAndView getAddOwnerViewAction(@ModelAttribute("owner")Owner owner) throws Exception{
		
		System.out.println("_______________________________________________");
		System.out.println("==> /owner/getAddOwnerView.do__call !!!");
		System.out.println("==> owner : " +owner);
		System.out.println("_______________________________________________");
		
		ModelAndView modelAndView=new ModelAndView();
		modelAndView.setViewName("ownerViews/ownerAdd");
		modelAndView.addObject("owner", owner);

		return modelAndView;
	}
}
	

