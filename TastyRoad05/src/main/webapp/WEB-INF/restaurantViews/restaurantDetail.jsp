<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!doctype html>
<html>
<head>
<title>맛집상세정보</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/resources/css/bootstrap.css" type="text/css">
<link rel="stylesheet" href="/resources/css/header.css" type="text/css">
<script type="text/javascript">
		function fncMoveBackward(){
			document.location.href="/restaurant/listRestaurant";
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
		<div id="header">
			<div class="wrap">

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
				<!-- 네비게이션 아이콘 -->
			</div>
			<!-- Wrap -->
		</div>
	</header>
	
	<div class="restaurant_well2">맛집상세정보</div>

	<table class="table-bordered" width="1019px" border="0" cellspacing="0"
		cellpadding="0" style="margin-top: 13px; margin-left: 10px"">

		<tr>
			<td width="104" class="ct_write"><img src="/resources/img/icon/astar.png" width="8" height="8" align="absmiddle">맛집번호</td>
			<td class="ct_write01">
				${restaurant.resId==null?'':restaurant.resId}</td>
		</tr>

		<tr>
			<td width="104" class="ct_write"><img src="/resources/img/icon/astar.png" width="8" height="8" align="absmiddle">상호명</td>

			<td class="ct_write01">
				${restaurant.name==null?'':restaurant.name}</td>
		</tr>

		<tr>
			<td width="104" class="ct_write"><img src="/resources/img/icon/astar.png" width="8" height="8" align="absmiddle">주소</td>

			<td class="ct_write01">
				${restaurant.addr==null?'':restaurant.addr}</td>
		</tr>

		<tr>
			<td width="104" class="ct_write"><img src="/resources/img/icon/astar.png" width="8" height="8" align="absmiddle">전화번호</td>
			<td class="ct_write01">
				${restaurant.phone==null?'':restaurant.phone}</td>
		</tr>

		<tr>
			<td width="104" class="ct_write"><img src="/resources/img/icon/astar.png" width="8" height="8" align="absmiddle">사업자 등록번호</td>
			<td class="ct_write01">
				${restaurant.licenseNo==null?'':restaurant.licenseNo}</td>
		</tr>

		<tr>
			<td width="104" class="ct_write"><img src="/resources/img/icon/astar.png" width="8" height="8" align="absmiddle">상세위치-위도</td>
			<td class="ct_write01">
				${restaurant.geoLat==null?'':restaurant.geoLat}</td>
		</tr>

		<tr>
			<td width="104" class="ct_write"><img src="/resources/img/icon/astar.png" width="8" height="8" align="absmiddle">상세위치-경도</td>
			<td class="ct_write01">
				${restaurant.geoLong==null?'':restaurant.geoLong}</td>
		</tr>

		<tr>
			<td width="104" class="ct_write"><img src="/resources/img/icon/astar.png" width="8" height="8" align="absmiddle">메인이미지1</td>
			<td class="ct_write01">
				<a class="img_drop">${restaurant.imgSmall1==null?'':restaurant.imgSmall1}
				<span><img src="http://imageserver.iisweb.kr/teamdwf/${restaurant.imgSmall1}" width="300" height="300"></span></a>
		</tr>

		<tr>
			<td width="104" class="ct_write"><img src="/resources/img/icon/astar.png" width="8" height="8" align="absmiddle">상세이미지1</td>
			<td class="ct_write01">
				<a class="img_drop">${restaurant.imgSmall1==null?'':restaurant.imgBig1}
				<span><img src="http://imageserver.iisweb.kr/teamdwf/${restaurant.imgBig1}" width="300" height="300"></span></a>
		</tr>

		<tr>
			<td width="104" class="ct_write">상세이미지2</td>
			<td class="ct_write01">
				<a class="img_drop">${restaurant.imgSmall1==null?'':restaurant.imgBig2}
				<span><img src="http://imageserver.iisweb.kr/teamdwf/${restaurant.imgBig2}" width="300" height="300"></span></a>
		</tr>

		<tr>
			<td width="104" class="ct_write">상세이미지3</td>
			<td class="ct_write01">
				<a class="img_drop">${restaurant.imgSmall1==null?'':restaurant.imgBig3}
				<span><img src="http://imageserver.iisweb.kr/teamdwf/${restaurant.imgBig3}" width="300" height="300"></span></a>
		</tr>

		<tr>
			<td width="104" class="ct_write"><img src="/resources/img/icon/astar.png" width="8" height="8" align="absmiddle">메뉴이미지</td>
			<td class="ct_write01">
				<a class="img_drop">${restaurant.imgSmall1==null?'':restaurant.imgMenu}
				<span><img src="http://imageserver.iisweb.kr/teamdwf/${restaurant.imgMenu}" width="300" height="300"></span></a>
			</td>
		</tr>

		<tr>
			<td width="104" class="ct_write"><img src="/resources/img/icon/astar.png" width="8" height="8" align="absmiddle">광고문구</td>
			<td class="ct_write01">
				${restaurant.copyComment==null?'':restaurant.copyComment}</td>
		</tr>

		<tr>
			<td width="104" class="ct_write"><img src="/resources/img/icon/astar.png" width="8" height="8" align="absmiddle">맛집분류</td>
			<td class="ct_write01"><c:choose>
					<c:when test="${restaurant.resCategory == 1}">한식</c:when>
					<c:when test="${restaurant.resCategory == 2}">일식</c:when>
					<c:when test="${restaurant.resCategory == 3}">중식</c:when>
					<c:when test="${restaurant.resCategory == 4}">양식</c:when>
					<c:otherwise>카페</c:otherwise>
				</c:choose></td>
		</tr>

	</table>

	<table width="100%" border="0" cellspacing="0" cellpadding="0"
		style="margin-top: 10px;">
		<tr>
			<td width="53%"></td>
			<td align="right">
				<table border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td width="17" height="23">
							<form name="getUpdateOwnerView"
								action="/restaurant/getUpdateRestaurantView" method="POST">
								<input type="hidden" name="resId" value="${restaurant.resId}">
								<input class="btn" type="submit" value="맛집수정">
							</form>
						</td>

						<td width="17" height="23">
							<form name="removeOwner" action="/restaurant/removeRestaurant"
								method="POST">
								<input type="hidden" name="resId" value="${restaurant.resId}">
								<input class="btn" type="submit" value="맛집삭제">
							</form>
						</td>


						<!--  뒤로가기대신 목록보기로 바꿈
						<td class="btn" style="padding-top:3px;">
							<a href="javascript:history.go(-1);">뒤로</a></td>
						-->
						<td class="btn" style="padding-top: 3px;">
						<form name=getRestaurantListView method="POST"></form>
						<a href="javascript:post('/restaurant/getRestaurantListView');">맛집목록</a>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>

</body>
</html>