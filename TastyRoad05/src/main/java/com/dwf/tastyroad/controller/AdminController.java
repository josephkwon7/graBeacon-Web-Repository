package com.dwf.tastyroad.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.dwf.tastyroad.model.Admin;
//settter method없는 이유. 직접 생성해 쓸 이유가 없음. 스프링에 종속적
import com.dwf.tastyroad.service.AdminService;

@Controller
@RequestMapping("/admin")
public class AdminController {
	
	@Autowired
	@Qualifier("adminServiceImpl")
	private AdminService adminService;

	public AdminController() {
		System.out.println("::" +getClass()+ " Default Constructor Call");
	}
	
	@RequestMapping(value="/logonAction", method=RequestMethod.POST)
	public ModelAndView logonAction(
			@ModelAttribute("admin")Admin admin, 
			HttpSession session) throws Exception{
		
		System.out.println("_______________________________________________");
		System.out.println("==> /admin/logonAction__call !!!");
		System.out.println("==> admin : " +admin);
		System.out.println("==> session : " +session);
		System.out.println("_______________________________________________");
		
		String viewName = "/homeViews/manage";
		String passwordFromDB = null;
		
		Admin adminFromDB = adminService.findAdmin(admin.getAdminId());
						
		if(adminFromDB != null) {
			passwordFromDB = adminFromDB.getPassword();
			if(passwordFromDB != null){
				if(admin.getPassword().equals(passwordFromDB)){
					admin.setActive(true);
				}
			}
		}else {
			if(admin.getPassword() == null){
				admin.setActive(true);
			}
		}
		
		if(admin.isActive()){
			viewName = "/adminViews/home";
			session.setAttribute("sessionAdmin", admin);
		}

		System.out.println("[ action : "+viewName+" ]");
		
		String message = null;
		if(viewName.equals("/adminViews/home")){
			message = "환영합니다. 로그인 되었습니다.";
		}else{
			message = "아이디 혹은 패스워드가 틀렸습니다.";
		}
		
		ModelAndView modelAndView = new ModelAndView(viewName);
		modelAndView.addObject("message", message);
	
		return modelAndView;			
	}
	
	@RequestMapping("/logoutAction")
	public ModelAndView logoutAction(
			@ModelAttribute("admin")Admin admin, HttpSession session){
		
		System.out.println("_______________________________________________");
		System.out.println("==> /admin/logoutAction__call !!!");
		System.out.println("==> admin : " +admin);
		System.out.println("==> session : " +session);
		System.out.println("_______________________________________________");
		
		session.removeAttribute("sessionAdmin");
		
		String message = "로그아웃 되었습니다.";
		
		ModelAndView modelAndView = new ModelAndView("/homeViews/manage");
		modelAndView.addObject("message", message);
		
		return modelAndView;		
	}

//	@RequestMapping("/getLogonView")
//	public String getLogonViewAction(Model model){
//		
//		System.out.println("_______________________________________________");
//		System.out.println("==> /admin/getLogonView__call !!!");
//		System.out.println("==> model : " +model);
//		System.out.println("_______________________________________________");
//		
//		String message = "[ getLogonViewAction() ] 아이디, 패스워드를 입력하세요.";
//		
//		//ModelAndView modelAndView = new ModelAndView();
//		//modelAndView.setViewName("/user/logon.jsp");
//		model.addAttribute("message", message);
//		
//		return "/adminViews/logon";
//	}
	
//	@RequestMapping("/getHomeView")
//	public ModelAndView getHomeViewAction(
//			@ModelAttribute("Admin")Admin admin, HttpSession session){
//		
//		System.out.println("_______________________________________________");
//		System.out.println("==> /admin/getHomeView__call !!!");
//		System.out.println("==> admin : " +admin);
//		System.out.println("==> session : " +session);
//		System.out.println("_______________________________________________");
//		
//		String message = "[ home() ] WELCOME";
//		
//		ModelAndView modelAndView = new ModelAndView("/adminViews/home");
//		modelAndView.addObject("message", message);
//					
//		return modelAndView;		
//	}
	
}
