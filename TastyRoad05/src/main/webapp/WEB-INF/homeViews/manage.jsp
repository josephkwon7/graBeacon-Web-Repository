<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>TastyRoad - 생활의 윤택함을 더하다</title>
		<meta content='width=device-width, initial-scale=1.0' name='viewport'>
		
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
	
	   	</script>
		
	</head>
 
	<body>
	
		<p>${message}
		<form name=loginForm method="POST">
			관리자ID : <input type="text" name="adminId" value=""><br/><br/>
			패스워드 : <input type="password" name="password" value=""><br/><br/>
		</form>
		<a href="javascript:loginValidation();"><button>로그인</button></a>
	</body>
	
</html>