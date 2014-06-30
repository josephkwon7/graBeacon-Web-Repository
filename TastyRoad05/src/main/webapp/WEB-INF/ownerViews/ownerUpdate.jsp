<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<html>
<head>
	<title>점주정보수정</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	
	<link rel="stylesheet" href="/resources/css/bootstrap.css" type="text/css">
	<link rel="stylesheet" href="/resources/css/header.css" type="text/css">
	
	<script type="text/javascript">

	function fncUpdateOwner(){
		//Form 유효성 검증
	
		var name = document.detailForm.name.value;
		var phone = document.detailForm.phone.value;
		var addr = document.detailForm.addr.value;
		var email = document.detailForm.email.value;
		
		if(name == null || name.length<1){
			alert("상품상세정보는 반드시 입력하여야 합니다.");
			return;
		}
		if(phone == null || phone.length<1){
			alert("제조일자는 반드시 입력하셔야 합니다.");
			return;
		}
		if(addr == null || addr.length<1){
			alert("가격은 반드시 입력하셔야 합니다.");
			return;
		}
		if(email == null || email.length<1){
			alert("가격은 반드시 입력하셔야 합니다.");
			return;
		}
	
	
		document.detailForm.action='/owner/updateOwner';
		document.detailForm.submit();
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
   	
   	<style type="text/css">
	.submit{
	padding-top:10px;
	margin-left:920px;
	}
	</style>
	

</head>

<body bgcolor="#ffffff" text="#000000">

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
		
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<form name="detailForm" method="POST"><!--  enctype="multipart/form-data" -->
	
	<!--  hidden parameter for update -->
	<input type="hidden" name="ownerId" value="${owner.ownerId}">
	<input type="hidden" name="resId" value="${owner.resId}">
	
	<table width="100%" height="37" border="0" cellpadding="0"cellspacing="0">
			<tr>
				
				<table width="100%" height="37" border="0" cellpadding="0" cellspacing="0">
    	<tr>
    		<div class="restaurantAdd_well"><i class="icon-plus"></i> 점주정보수정</div>
    	</tr>
    </table>
				</td>
				
			</tr>
		</table>

	<table class="table-bordered" width="100%" border="0" cellspacing="0" cellpadding="0"
		style="margin-top: 13px;">
		<tr>
			<td height="1" colspan="3" ></td>
		</tr>
		<tr>
			<td height="1" colspan="3" ></td>
		</tr>
		<tr>
			<td width="104" class="ct_write">이름 <img
				src="/resources/images/ct_icon_red.gif" width="3" height="3" align="absmiddle"></td>
			<td> </td>
			<td class="ct_write01"><input type="text" name="name" value="${owner.name==null?'':owner.name}"
				class="ct_input_g" maxLength="10"
				minLength="6"></td>
		</tr>
		<tr>
			<td></td>
		</tr>
		<tr>
			<td width="104" class="ct_write">전화번호 <img
				src="/resources/images/ct_icon_red.gif" width="3" height="3" align="absmiddle"></td>
			<td width="1"></td>
			<td class="ct_write01"><input type="text" name="phone" value="${owner.phone==null?'':owner.phone}"
				class="ct_input_g" maxLength="10"
				minLength="6"></td>
		</tr>
		<tr>
			<td></td>
		</tr>
		<tr>
			<td width="104" class="ct_write">주소 <img
				src="/resources/images/ct_icon_red.gif" width="3" height="3" align="absmiddle"></td>
			<td width="1"></td>
			<td class="ct_write01"><input type="text" name="addr" value="${owner.addr==null?'':owner.addr}"
				class="ct_input_g"  maxLength="50">
			</td>
		</tr>
		<tr>
			<td></td>
		</tr>
		<tr>
			<td width="104" class="ct_write">이메일 <img
				src="/resources/images/ct_icon_red.gif" width="3" height="3" align="absmiddle"></td>
			<td width="1"></td>
			<td class="ct_write01"><input type="text" name="email" value="${owner.email==null?'':owner.email}"
				class="ct_input_g" maxLength="10"
				minLength="6"></td>
		</tr>
		<tr>
			<td></td>
		</tr>
	</table>

	<table width="100%" border="0" cellspacing="0" cellpadding="0"
		style="margin-top: 10px;">
		<tr> 
			<td width="53%"></td>
			<td align="right">
			<table border="0" cellspacing="0" cellpadding="0">
				<tr>
					<td ></td>
					<td ><a href="javascript:fncUpdateOwner();"><button class="btn">수정</a></button></td>
					<td > </td>
	
					<td width="3"></td>	
	
					<td > </td>
					<td ><a href="javascript:history.back()"><button class="btn">취소</a></button></td>
					<td width="14" height="23"> </td>
				</tr>
			</table>
			</td>
		</tr>
	</table>
</form>
</body>
</html>