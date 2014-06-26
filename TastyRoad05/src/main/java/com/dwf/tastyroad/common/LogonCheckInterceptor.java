package com.dwf.tastyroad.common;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.dwf.tastyroad.model.Admin;

public class LogonCheckInterceptor extends HandlerInterceptorAdapter{
	///Field
	
	///Constructor
	public LogonCheckInterceptor(){
		System.out.println("==> LogonCheckInterceptor() default Constructor Call");
	}	
	
	///Method
	public boolean preHandle(HttpServletRequest request,
							HttpServletResponse response,
							Object handler
							)throws Exception{
		//@SessionAttributes(value="sessionAdmin",required=false)Admin admin
		System.out.println("[LogonCheckInterceptor START ! ! !]");
		
		HttpSession session=request.getSession(true);
		Admin sessionAdmin=null;
		if( (sessionAdmin=(Admin)session.getAttribute("sessionAdmin"))==null){
			sessionAdmin=new Admin();
		}
		
		if(sessionAdmin.isActive()){
			String uri=request.getRequestURI();
			if(uri.indexOf("logonAction")!=-1||uri.indexOf("logon")!=-1){
				request.getRequestDispatcher("/WEB-INF/adminViews/home.jsp").forward(request, response);
				System.out.println("[로그인 상태... 로그인후 불필요한 요구...]");
				System.out.println("[LogonCheckInterceptor end...]");
				return false;
			}
			System.out.println("[로그인 상태...]");
			System.out.println("[LogonCheckInterceptor end...]");
			return true;
		}else{
			String uri=request.getRequestURI();
			if(uri.indexOf("logonAction")!=-1||uri.indexOf("logon")!=-1){
				System.out.println("[로그인 시도 상태....]");
				System.out.println("[LogonCheckInterceptor end...]");
				return true;
			}
			request.getRequestDispatcher("/WEB-INF/adminViews/logon.jsp").forward(request, response);
			System.out.println("[로그인 이전...]");
			System.out.println("[LogonCheckInterceptor end...]");
			return false;
		}
	}
}
