<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!doctype html>
<html lang="en">
<meta content='text/html; charset=utf-8' http-equiv='Content-type'>
<head>
	
	<link rel="stylesheet"	type="text/css"	href="../resources/css/index.css">
	<link rel="stylesheet"	type="text/css"	href="../resources/css/header.css">
	<link rel="stylesheet"	type="text/css"	href="../resources/css/footer.css">
   
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
	<%@include file="/WEB-INF/common/header.jsp"%>
  
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
    
    <center><%@include file="/WEB-INF/common/footer.jsp"%></center>
</body>

</html>

