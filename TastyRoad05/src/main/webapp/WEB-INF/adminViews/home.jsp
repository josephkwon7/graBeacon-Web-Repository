<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page import="com.dwf.tastyroad.model.Admin" %>

<%	Admin sessionAdmin = (Admin)session.getAttribute("sessionAdmin");	%>

<html>
	
	<head>
		<title>Home Page</title>
	
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
		<p> 환영합니다.  : <%= sessionAdmin.getAdminId()%>님</p> 
		<br/><br/>
		<form name=logOut method="POST">
		</form>
		<a href="javascript:post('/admin/logoutAction');"><button>로그아웃</button></a>
		<form name=getRestaurantListView method="POST">
		</form>
		<a href="javascript:post('/restaurant/getRestaurantListView');"><button>맛집관리</button></a>
	</body>
	
</html>