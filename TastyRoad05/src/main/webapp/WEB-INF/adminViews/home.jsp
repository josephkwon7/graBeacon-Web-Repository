<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page import="com.dwf.tastyroad.model.Admin" %>

<%	Admin sessionAdmin = (Admin)session.getAttribute("sessionAdmin");	%>

<html>
	
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta content='width=device-width, initial-scale=1.0' name='viewport'>
		<link rel="stylesheet" href="../../resources/css/header.css" type="text/css">
        <link rel="stylesheet" href="../../resources/css/bootstrap.css" type="text/css">
        
		<title>Home Page - 생활의 윤택함을 더하다</title>
	
		<script type="text/javascript">
	   
	   	function post(path) {
	
		    var form = document.createElement("form");
		    form.setAttribute("method", "post");
		    form.setAttribute("action", path);
	
		    document.body.appendChild(form);
		    form.submit();
		} 

 		function get(path) {
	   		
		    var form = document.createElement("form");
		    form.setAttribute("method", "get");
		    form.setAttribute("action", path);
	
		    document.body.appendChild(form);
		    form.submit();
		} 
   	</script>
	
	</head>
	<body>
	
	<header>
        <div id="header" align="center">
        
                <div class="wrap">
                
                    <div class="navi-icon">
                    
                            <a href="/"><div class="logo"></div></a> 
                            <a href=javascript:post('/home/getIntroView');><div class="navi01"></div></a>
                            <a href=javascript:get('/home/getMapView');><div class="navi02"></div></a>
                            <a href=javascript:post('/home/getManageView');><div class="navi03"></div></a> 
    
                    </div>
				<div align="right">
			
					<a href="javascript:post('/admin/logoutAction');">log-out<img
						src="../resources/img/icon/logout.png"></a>

				</div>
				<!-- 네비게이션 아이콘 -->
                </div>
                    <!-- Wrap -->
        </div>
        
        </header>
        
		<div class="login_area">
        <div class="login_area_image"></div>
		<p> 환영합니다.  : <%= sessionAdmin.getAdminId()%>님</p> 
		<form name=logOut method="POST">
		</form>
		<a href="javascript:post('/admin/logoutAction');"><button class="btn btn-warning" type="button" style="width:206; height:40">로그아웃</button></a>
		<form name=getRestaurantListView method="POST">
		</form>
		<a href="javascript:post('/restaurant/getRestaurantListView');"><button class="btn btn-warning" type="button" style="width:206; height:40">맛집관리</button></a>
        </div>
	</body>
	
</html>