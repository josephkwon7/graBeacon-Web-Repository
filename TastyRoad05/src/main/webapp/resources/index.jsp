<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<html>
<head>
	<title>Home</title>
</head>
<body>
<h1>
	Welcome to TastyRoad !!  
</h1>

	<form name="detailForm" action="/restaurant/listRestaurant" method="POST">
		<input type="submit" value="맛집목록보기">
	</form>
	
	<form name="detailForm2" action="/admin/logon" method="POST">
		<input type="submit" value="로그인 화면보기">
	</form>

</body>
</html>
