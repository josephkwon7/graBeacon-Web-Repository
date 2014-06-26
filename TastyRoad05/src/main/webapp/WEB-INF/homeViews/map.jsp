<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!doctype html>
<html lang="en">
<meta content='text/html; charset=utf-8' http-equiv='Content-type'>
<head>
<title>DWF - 생활의 윤택함을 더하다</title>

<link rel="stylesheet" type="text/css" href="../resources/css/header.css">
<link rel="stylesheet" type="text/css" href="../resources/css/footer.css">

<style type="text/css">
.my-box {
	padding: 30 30 30 30;
	padding-left: 10%;
}
</style>
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
 <div class = "linebottom"></div>
	<header>
		<div id="header" align="center">
			<div class="wrap">
				<div class="navi-icon">
						<a href="/"><div class="logo"></div></a> 
						<a href=javascript:post('/home/getIntroView');><div class="navi01"></div></a>
						<a href=javascript:post('/home/getMapView');><div class="navi02"></div></a>
						<a href=javascript:post('/home/getManageView');><div class="navi03"></div></a> 
		
					</div>
			<!-- Wrap -->
			</div>
		</div>
		<!-- 헤더 -->

	</header>

	<table>
		<center>
			<div id="my-box">
				
							<br/>
							<br/>
							<article class='map_text'>
								<p>
									*아래의 맵에서 비콘을 가지고 있는 맛집을 확인할 수 있습니다.
								</p>
							</article>		
					 <a href="http://google.co.kr"><img
					src="../resources/img/design/mapex.png" width="1024" height="600"></a>

			</div>
		</center>
	</table>
	
	<footer id="footer">



		<dl class="info">
			<dt>Team DWF &nbsp;</dt>
			<dt>주소 : 서울시 서초구 서초동 1327-15 비트아카데미빌딩 3층 301호</dt>
		</dl>
		<details>
			<summary>Copyright@Team DWF Corp. All rights reserved.</summary>
		</details>
	</footer>
</body>
</html>

