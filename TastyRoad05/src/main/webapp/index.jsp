<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!doctype html>
<html lang="en">
<meta content='text/html; charset=utf-8' http-equiv='Content-type'>
<head>
	
	<link rel="stylesheet"	type="text/css"	href="../resources/css/index.css">
	<link rel="stylesheet"	type="text/css"	href="../resources/css/header.css">
	<link rel="stylesheet"	type="text/css"	href="../resources/css/footer1.css">
   
	<script type="text/javascript">
	   
	   	function post(path) {
	
		    var form = document.createElement("form");
		    form.setAttribute("method", "post");
		    form.setAttribute("action", path);
	
		    document.body.appendChild(form);
		    form.submit();
		} 

   	</script>
   	
</head>
<body>
<br/>
<br/>
 
<hr/> 
<hr/> 
<hr/>
<hr/>
 <div class = "linebottom"></div>

		<header>
		
			<div id="header" align="center">
				<div class="wrap">
					<div class="navi-icon">
						<a href="/"><div class="logo"></div></a> 
						<form method="POST">
							<a href=javascript:post('/home/getIntroView');><div class="navi01"></div></a>
						<a href=javascript:post('/home/getMapView');><div class="navi02"></div></a>
						<a href=javascript:post('/home/getManageView');><div class="navi03"></div></a> 
						</form> 
						
						
					</div>
					<!-- 네비게이션 아이콘 -->
				</div>
				<!-- Wrap -->
			</div>
			<!-- 헤더 -->
			
		</header>
		
    <!-- 상단 메뉴 -->
  
  <div id="main-image"></div>
  
  <div id="main-reference"></div>
  
  <section class="one-block-box">
  <div class="block-content1"></div>
  <div class="block-content2"></div>
  <div class="block-content3"></div>
  <div class="block-content4"></div>
  </section>
  
  <section class="two-block-box">
  <div class="block-content5"></div>
  <div class="block-content6"></div>
  </section>
    
  <!-- 하단 메뉴 -->
  <footer id="footer">
    <dl class="info">
    	<dt>
        Team DWF
        </dt>
        <dt>
        주소 : 서울시 서초구 서초동 1327-15 비트아카데미빌딩 3층 301호
        </dt>
    </dl>
    <details>
    	<summary>Copyright@Team DWF Corp. All rights reserved.</summary>
    </details>
   </footer>
  <!-- 하단 메뉴 -->
</body>

</html>

