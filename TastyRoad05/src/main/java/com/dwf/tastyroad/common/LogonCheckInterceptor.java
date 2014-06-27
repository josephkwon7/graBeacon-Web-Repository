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
		
		HttpSession session=request.getSession(true);
		Admin sessionAdmin=null;
		if( (sessionAdmin=(Admin)session.getAttribute("sessionAdmin"))==null){
			sessionAdmin=new Admin();
		}
		String uri=request.getRequestURI();

		if(sessionAdmin.isActive()){
			if(uri.indexOf("getManageView")!=-1){
				request.getRequestDispatcher("/WEB-INF/adminViews/home.jsp").forward(request, response);
				System.out.println("[@LogonCheckInterceptor 로그인 상태... 로그인후 불필요한 요청]");
				return false;
			}
			return true;
			
		}else{
			if(uri.indexOf("/admin")!=-1 || 
				uri.indexOf("/beacon")!=-1 || 
				uri.indexOf("/home")!=-1 ||
				uri.indexOf("/json")!=-1 ||				
				uri.indexOf("/owner")!=-1 ||
				uri.indexOf("/resources")!=-1 ||
				uri.indexOf("/googlemap")!=-1)
			{
				System.out.println("[@LogonCheckInterceptor 로그인 불필요 서비스....]");
				return true;
			}
			request.getRequestDispatcher("/WEB-INF/homeViews/manage.jsp").forward(request, response);
			System.out.println("[@LogonCheckInterceptor 로그인 이전... 로그인 필요한 요청]");

			return false;
		}
	}
}
