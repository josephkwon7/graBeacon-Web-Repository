<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta content='width=device-width, initial-scale=1.0' name='viewport'>
		<link rel="stylesheet" href="../../resources/css/header.css" type="text/css">
        <link rel="stylesheet" href="../../resources/css/bootstrap.css" type="text/css">
        <link rel="stylesheet" media="all" href="../../resources/css/intro.css">
		<title>TastyRoad - 생활의 윤택함을 더하다</title>
		
		
		<script type="text/javascript">
			function loginValidation(){
				//Form 유효성 검증
			 	var adminId = document.loginForm.adminId.value;
				//var password = document.loginForm.password.value;
			
				if(adminId == null || adminId.length<1){
					alert("관리자ID를 입력하세요");
					return;
				}
				//document.loginForm.action="/admin/logonAction";
				document.loginForm.action="/admin/logonAction";
				document.loginForm.submit();
			}
			
			function resetData(){
				document.loginForm.reset();
			}
			
		
			   
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
		
		<style type="text/css">
	
	.welcome{
	background-color : #33dvdv;
	text-align: center;
	font-weight:bold;
	}
	</style>
		
	</head>
 
	<body>
	
	
	<%@include file="/WEB-INF/common/header.jsp"%>
	<!--  
	<header>
	<div id="header">
    
			<div class="wrap">
			
				<div class="navi-icon">
				
						<a href="/"><div class="logo"></div></a> 
						<a href=javascript:post('/home/getIntroView');><div class="navi01"></div></a>
						<a href=javascript:get('/home/getMapView');><div class="navi02"></div></a>
						<a href=javascript:post('/home/getManageView');><div class="navi03"></div></a> 

			 	</div>
					
	  		</div>
				
	</div>
	</header>
	-->
	
		
		<form class="login_area" name=loginForm method="POST">
		
        <div class="login_area_image"></div>
			<input type="text" name="adminId" value="" placeholder="관리자 ID" style="height:30"><br/><br/>
			<input type="password" name="password" value="" placeholder="패스워드" style="height:30" onkeypress="if(event.keyCode==13){javascript:loginValidation();return false;}"><br/><br/>
            <a href="javascript:loginValidation();"><button class="btn btn-warning" type="button" style="width:206; height:40">로그인</button></a>
            <p class="welcome"><br/>${message}</p>
		</form>
	</body>
	
</html>