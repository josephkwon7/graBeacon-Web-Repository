<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<html>
<head>
	<title>맛집정보수정</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<link rel="stylesheet" href="/resources/css/bootstrap.css" type="text/css">
	<link rel="stylesheet" href="/resources/css/header.css" type="text/css">
	
	<script type="text/javascript">
	function fncUpdateRestaurant(){
		//Form 유효성 검증
	
	 	var name = document.detailForm.name.value;
		var addr = document.detailForm.addr.value;
		var phone = document.detailForm.phone.value;
		var geoLat = document.detailForm.geoLat.value;
		var geoLong = document.detailForm.geoLong.value;
		var imgSmall1 = document.detailForm.imgSmall1.value;
		var imgBig1 = document.detailForm.imgBig1.value;
		var imgMenu = document.detailForm.imgMenu.value;
		var copyComment = document.detailForm.copyComment.value;
		var resCategory = document.detailForm.resCategory.value;
	
		if(name == null || name.length<1){
			alert("상호명은 반드시 입력하여야 합니다.");
			return;
		}
		if(addr == null || addr.length<1){
			alert("주소는 반드시 입력하여야 합니다.");
			return;
		}
		if(phone == null || phone.length<1){
			alert("전화번호는 반드시 입력하여야 합니다.");
			return;
		}
		if(geoLat == null || geoLat.length<1){
			alert("상세위치(위도)는 반드시 입력하여야 합니다.");
			return;
		}
		if(geoLong == null || geoLong.length<1){
			alert("상세위치(경도)는 반드시 입력하여야 합니다.");
			return;
		}	
		if(imgSmall1 == null || imgSmall1.length<1){
			alert("메인이미지는 반드시 있어야 합니다.");
			return;
		}
		if(imgBig1 == null || imgBig1.length<1){
			alert("상세이미지1은 반드시 있어야 합니다.");
			return;
		}
		if(imgMenu == null || imgMenu.length<1){
			alert("메뉴이미지는 반드시 있어야 합니다.");
			return;
		}
		if(copyComment == null || copyComment.length<1){
			alert("광고문구는 반드시 입력하여야 합니다.");
			return;
		}		
		if(resCategory == null || resCategory.length<1){
			alert("맛집분류는 반드시 선택하여야 합니다.");
			return;
		}


		document.detailForm.action='/restaurant/updateRestaurant';
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
		<%@include file="/WEB-INF/common/header3.jsp"%>
		<!--  
			<div id="header2">
				<div class="wrap2">
					
					<div class="navi-icon">
						<a href="/"><div class="logo"></div></a> 
						<a href=javascript:post('/home/getIntroView');><div class="navi01"></div></a>
						<a href=javascript:get('/home/getMapView');><div class="navi02"></div></a>
						<a href=javascript:post('/home/getManageView');><div class="navi03"></div></a> 
					</div>
					
					<div align="right">
					<a href="javascript:post('/admin/logoutAction');">log-out<img
						src="../resources/img/icon/logout.png"></a>
					</div>
				</div>
			</div>
		-->
		</header>
		
	<div class="restaurant_well2" style="margin-left: 18px;">&nbsp;맛집정보수정</div>
		
	<div style="width: 98%; margin-left: 10px;">

	<!--  hidden parameter for update -->
	<input type="hidden" name="resId" value="${restaurant.resId}">
	
	<form name="detailForm" method="POST" enctype="multipart/form-data">

	<table class="table-bordered" width="100%" border="0" cellspacing="0" cellpadding="0"
		style="margin-top: 11px; margin-left: 10px">
		<tr>
			<td width="104" class="ct_write"><img src="/resources/img/icon/astar.png" width="8" height="8" align="absmiddle">맛집이름</td>
			
			<td class="ct_write01"><input type="text" name="name" value="${restaurant.name==null?'':restaurant.name}"
				class="ct_input_g" style="width: 250px; height: auto;" maxLength="15"
				minLength="6"></td>
		</tr>
		
		<tr>
			<td width="104" class="ct_write"><img src="/resources/img/icon/astar.png" width="8" height="8" align="absmiddle">주소</td>
			
			<td class="ct_write01"><input type="text" name="addr" value="${restaurant.addr==null?'':restaurant.addr}"
				class="ct_input_g" style="width: 250px; height: auto;" maxLength="30"
				minLength="6"></td>
		</tr>
		
		<tr>
			<td width="104" class="ct_write"><img src="/resources/img/icon/astar.png" width="8" height="8" align="absmiddle">전화번호</td>
			
			<td class="ct_write01"><input type="text" name="phone" value="${restaurant.phone==null?'':restaurant.phone}"
				class="ct_input_g" style="width: 250px; height: auto" maxLength="13"
				minLength="6"></td>
		</tr>
		
		<tr>
			<td width="104" class="ct_write"><img src="/resources/img/icon/astar.png" width="8" height="8" align="absmiddle">사업자 등록번호</td>
			
			<td class="ct_write01"><input type="text" name="licenseNo" value="${restaurant.licenseNo==null?'':restaurant.licenseNo}"
				class="ct_input_g" style="width: 250px; height: auto" maxLength="12"
				minLength="6"></td>
		</tr>
		
		<tr>
			<td width="104" class="ct_write"><img src="/resources/img/icon/astar.png" width="8" height="8" align="absmiddle">상세위치-위도</td>
			
			<td class="ct_write01"><input type="text" name="geoLat" value="${restaurant.geoLat==0?'':restaurant.geoLat}"
				class="ct_input_g" style="width: 250px; height: auto" maxLength="15"
				minLength="6"></td>
		</tr>
		
		<tr>
			<td width="104" class="ct_write"><img src="/resources/img/icon/astar.png" width="8" height="8" align="absmiddle">상세위치-경도</td>
			
			<td class="ct_write01"><input type="text" name="geoLong" value="${restaurant.geoLong==0?'':restaurant.geoLong}"
				class="ct_input_g" style="width: 250px; height: auto" maxLength="15"
				minLength="6"></td>
		</tr>
		
		<tr>
			<td width="104" class="ct_write"><img src="/resources/img/icon/astar.png" width="8" height="8" align="absmiddle">메인이미지1</td>
			
			<td class="ct_write01"><input type="file" name="imgSmall1"
				class="ct_input_g2" style="width: 250px; height: auto" maxLength="30"
				minLength="6"></td>
		</tr>
		
		<tr>
			<td width="104" class="ct_write"><img src="/resources/img/icon/astar.png" width="8" height="8" align="absmiddle">상세이미지1</td>
			
			<td class="ct_write01"><input type="file" name="imgBig1"
				class="ct_input_g" style="width: 250px; height: auto" maxLength="30"
				minLength="6"></td>
		</tr>
		
		<tr>
			<td width="104" class="ct_write">상세이미지2</td>
			
			<td class="ct_write01"><input type="file" name="imgBig2"
				class="ct_input_g2" style="width: 250px; height: auto" maxLength="30"
				minLength="6"></td>
		</tr>
		
		<tr>
			<td width="104" class="ct_write">상세이미지3</td>
			
			<td class="ct_write01"><input type="file" name="imgBig3"
				class="ct_input_g" style="width: 250px; height: auto" maxLength="30"
				minLength="6"></td>
		</tr>
		
		<tr>
			<td width="104" class="ct_write"><img src="/resources/img/icon/astar.png" width="8" height="8" align="absmiddle">메뉴이미지</td>
			
			<td class="ct_write01"><input type="file" name="imgMenu"
				class="ct_input_g2" style="width: 250px; height: auto" maxLength="30"
				minLength="6"></td>
		</tr>
		
		<tr>
			<td width="104" class="ct_write"><img src="/resources/img/icon/astar.png" width="8" height="8" align="absmiddle">광고문구</td>
			
			<td class="ct_write01"><input type="text" name="copyComment" value="${restaurant.copyComment==null?'':restaurant.copyComment}"
				class="ct_input_g" style="width: 250px; height: auto" maxLength="15"
				minLength="6"></td>
		</tr>
		
		<tr>
			<td width="104" class="ct_write"><img src="/resources/img/icon/astar.png" width="8" height="8" align="absmiddle">맛집분류</td>
			
			<td class="ct_write01">
				<select name="resCategory" class="ct_input_g" style="width: 165px; height: auto">
				  <option value="1" <c:if test="${restaurant.resCategory}==1">selected</c:if>>한식</option>
				  <option value="2"	<c:if test="${restaurant.resCategory}==2">selected</c:if>>일식</option>
				  <option value="3" <c:if test="${restaurant.resCategory}==3">selected</c:if>>중식</option>
				  <option value="4" <c:if test="${restaurant.resCategory}==4">selected</c:if>>양식</option>
				  <option value="5" <c:if test="${restaurant.resCategory}==5">selected</c:if>>카페</option>
				</select>
			</td>
		</tr>
	</table>

	<table width="100%" border="0" cellspacing="0" cellpadding="0"
		style="margin-top: 10px; margin-bottom: 70px;"">
		<tr> 
			<td width="53%"></td>
			<td align="right">
			<table border="0" cellspacing="0" cellpadding="0">
				<tr>
					
					<td class="btn"
						style="padding-top: 3px;"><a href="javascript:fncUpdateRestaurant()">수정</a></td>
		
			
						
					<td class="btn"
						style="padding-top: 3px;"><a href="javascript:history.back()">취소</a></td>
					
				</tr>
			</table>
			</td>
		</tr>
	</table>
</form>
</body>
</html>