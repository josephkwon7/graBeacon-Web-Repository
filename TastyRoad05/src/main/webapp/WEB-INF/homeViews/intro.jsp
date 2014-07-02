<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!doctype html>
<html lang="en">
<meta content='text/html; charset=utf-8' http-equiv='Content-type'>

<head>
<title>DWF - 생활의 윤택함을 더하다</title>

<link rel="stylesheet" media="all" href="../../resources/css/intro.css">
<link rel="stylesheet" type="text/css" href="../../resources/css/header.css">

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
					<a href="/"><div class="logo"></div></a> <a href=javascript:post('/home/getIntroView');><div
							class="navi01"></div></a> <a href=javascript:get('/home/getMapView');><div
							class="navi02"></div></a> <a href=javascript:post('/home/getManageView');><div
							class="navi03"></div></a>

				</div>
				<!-- 네비게이션 아이콘 -->
			</div>
			<!-- Wrap -->
		</div>
	</header>
    
	<div id="intro_logo_image"></div>
    
    <div id="intro_text">    
   	<p>TastyRoad는 '비콘'(beacon)이라는 저전력 근거리통신(블루투스)기술을 기반으로 만들어진 신개념 어플리케이션입니다.
	비콘이 설치된 매장을 지나면 어플을 통해 할인정보, 메뉴상세정보, 거리정보를 전달받아 직접 방문하지 않고도 유익한
	정보를 획득할 수 있어 사용자가 편리하게 사용할 수 있습니다.</p>
    </div>
    
    <div class="orange_line1"></div>
    
    <div id="intro_image_box">
    <div class="intro_main_image"></div>
    <div class="intro_main_image2"></div>
    </div>
    
    <div class="orange_line2"></div>
    
    <div id="intro_contact_box">
		<div class="intro_contact_text">
			<div class="Contact_us_img"></div>
			&nbsp;만든이 Team.D.W.F(Dinner With Family)</br>
			<div>
			&nbsp;메일 teamdwf47@gmail.com <a class='customerMap'
					href="mailTo:lotuslim00@naver.com"><img
					src="../resources/img/design/mailgo.png" target=_black height="30"
					width="30" /></a>
			</div>
		</div>
		<div class="intro_contact_image"></div>
    </div>
    
<center><%@include file="../common/footer.jsp"%></center>
</body>
</html>

