<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!doctype html>
<html>
<head>
	<title>비컨등록</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<link rel="stylesheet" href="/resources/css/bootstrap.css" type="text/css">
	<link rel="stylesheet" href="/resources/css/header.css" type="text/css">
	
	<script type="text/javascript">

		function fncAddProduct(){
			//Form 유효성 검증
		 	var uuId = document.detailForm.uuId.value;
			var major = document.detailForm.major.value;
			var minor = document.detailForm.minor.value;
			//var email = document.detailForm.email.value;
		
			if(uuId == null || uuId.length<1){
				alert("UUID는 반드시 입력하여야 합니다.");
				return;
			}
			
			if(major == null || major.length<1){
				alert("major 값은 반드시 입력하여야 합니다.");
				return;
			}
			if(minor == null || minor.length<1){
				alert("minor 값은 반드시 입력하여야 합니다.");
				return;
			}
			/*
			if(email == null || email.length<1){
				alert("이메일은 반드시 입력하여야 합니다.");
				return;
			}
			*/
			document.detailForm.action='/beacon/addBeacon';
			document.detailForm.submit();
			}
			
		function resetData(){
			document.detailForm.reset();
		}
				
	</script>
	
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
					<!-- 네비게이션 아이콘 -->
				</div>
				<!-- Wrap -->
			</div>
			
		</header>
		
		<br><br><br><br><br>
		
<form name="detailForm" method="POST">

    <div class="restaurant_well"><i class="icon-plus"></i> 비컨등록</div>
	
	<table class="table-bordered" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top: 13px;">
    
		<tr>
			<td width="104" class="ct_write">UUID*</td>
			<td class="ct_write01">
				<input type="text" name="uuId" class="ct_input_g" style="width: 100px; height: auto" maxLength="20" value="${beacon.uuId==null?'':beacon.uuId}">
			</td>
		</tr>
        
		<tr>
			<td width="104" class="ct_write">Major*</td>
			<td class="ct_write01">
				<input type="text" name="major" class="ct_input_g" style="width: 100px; height: auto" maxLength="20" value="${beacon.major==0?'':beacon.major}">
			</td>
		</tr>
        
		<tr>
			<td width="104" class="ct_write">Minor*</td>
			<td class="ct_write01">
				<input type="text" name="minor" class="ct_input_g" style="width: 100px; height: auto" maxLength="20" value="${beacon.minor==0?'':beacon.minor}">
			</td>
		</tr>

	</table>
	
	<input type="hidden" name="resId" value="${beacon.resId}">
	
	<table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top: 10px;">
		<tr>
			<td width="53%"></td>
			<td align="right">
			<table border="0" cellspacing="0" cellpadding="0">
				<tr>
					<button class="btn" type="button"><a href="javascript:fncAddProduct();">등록</a></button>
	
					<button class="btn" type="button"><a href="javascript:resetData();">취소</a></button>
						
					<button class="btn" type="button"><a href="javascript:history.go(-1);">뒤로</a></button>
				</tr>
			</table>
			</td>
		</tr>
	</table>
</form>
</body>
</html>