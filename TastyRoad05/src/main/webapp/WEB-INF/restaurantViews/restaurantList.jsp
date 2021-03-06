<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
 
<!doctype html>
<html>
<head>
<title>맛집관리</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/resources/css/bootstrap.css" type="text/css">
<link rel="stylesheet" href="/resources/css/header.css" type="text/css">

<script type="text/javascript">
	function fncGetList(page) {
		document.getElementById("currentPage").value = page;
		document.detailForm.submit();
	}
	
	function post(path, params) {
	    //method = method || "post"; // Set method to post by default if not specified.

	    // The rest of this code assumes you are not using a library.
	    // It can be made less wordy if you use one.
	    var form = document.createElement("form");
	    form.setAttribute("method", "post");
	    form.setAttribute("action", path);
		
	    for(var key in params) {
	        if(params.hasOwnProperty(key)) {
	            var hiddenField = document.createElement("input");
	            hiddenField.setAttribute("type", "hidden");
	            hiddenField.setAttribute("name", key);
	            hiddenField.setAttribute("value", params[key]);

	            form.appendChild(hiddenField);
	         }
	    }

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
			</header>
			
	
	
	<div class="restaurant_well2">&nbsp;맛집목록</div>

	<div style="width: 98%; margin-left: 10px;">

		<form name="detailForm" action="/restaurant/getRestaurantListView"
			method="POST" onsubmit="return false">
				  
			<table class="table table-bordered" width="100%" border="0" cellspacing="0" cellpadding="0"
				style="margin-top: 10px;">
				
				<tr>
					<td class="ct_list_b" width="50">번호</td>
					<td class="ct_list_b" width="100">이름</td>
					<td class="ct_list_b" width="200">주소</td>
					<td class="ct_list_b" width="100">전화번호</td>
					<td class="ct_list_b" width="50">분류</td>
					<td class="ct_list_b" width="200">관리</td>
				</tr>

				<%--  search 고객용 View 시작 --%>
				<c:forEach var="restaurantList" items="${restaurantList}">

					<tr class="ct_list_pop">
						<td align="center">${restaurantList.resId}</td>
						<td align="left">
							<a href="javascript:post('/restaurant/getRestaurantDetail', 
						  {resId: '${restaurantList.resId}'});">${restaurantList.name}</a>
						</td>
						<td align="left">${restaurantList.addr}</td>
						<td align="left">${restaurantList.phone}</td>
						<td align="left">
							<c:choose>
								<c:when test="${restaurantList.resCategory == '1'}">한식</c:when>
								<c:when test="${restaurantList.resCategory == '2'}">일식</c:when>
								<c:when test="${restaurantList.resCategory == '3'}">중식</c:when>
								<c:when test="${restaurantList.resCategory == '4'}">양식</c:when>
								<c:otherwise>카페</c:otherwise>
							</c:choose>
						</td>
						<td align="left">
						  <a href="javascript:post('/beacon/getBeaconList', 
						  {searchKeyword: '${restaurantList.resId}', searchCondition: '4'});">비콘관리</a>

						  <a href="javascript:post('/owner/getOwnerDetail', 
						  {searchKeyword: '${restaurantList.resId}', searchCondition: '5'});">점주관리</a>

						<!--  
						  <a href="javascript:post('/restaurant/removeRestaurant', 
						  {resId: '${restaurantList.resId}'});">맛집삭제</a>
						  -->
						  <!--  
							<form action="/beacon/getBeaconList" method="POST">
								<input type="submit" value="비콘관리">
								<input type="hidden" name="searchKeyword" value="${restaurantList.resId}">
								<input type="hidden" name="searchCondition" value="4">
							</form>
							<form action="/owner/getOwnerDetail" method="POST">
								<input type="submit" value="점주관리">
								<input type="hidden" name="searchKeyword" value="${restaurantList.resId}">
								<input type="hidden" name="searchCondition" value="5">
							</form>
							<form action="/restaurant/removeRestaurant" method="POST">
								<input type="submit" value="삭제">
								<input type="hidden" name="resId" value="${restaurantList.resId}">
							</form>
						-->
						<!--  
							<a href="/beacon/listBeacon?resId=${restaurantList.resId}">비콘관리</a>
							<a href="/owner/getOwnerDetail?searchKeyword=${restaurantList.resId}&searchCondition=5">점주관리</a>
							<a href="/restaurant/removeRestaurant?resId=${restaurantList.resId}">삭제</a>
						-->
						</td>
					</tr>
					
				</c:forEach>
				
				
				
			</table>
					<td align="right"><i class="icon-list-alt"></i>&nbsp;전체&nbsp;${resultPage.totalCount }&nbsp;건수,&nbsp;
				현재 ${resultPage.currentPage} 페이지</td>

			<!--  페이지 Navigator 시작 -->
			<table width="100%" border="0" cellspacing="0" cellpadding="0"
				style="margin-top: 10px;">
				<tr>
					<td align="center"><input type="hidden" id="currentPage"
						name="currentPage" value="" /> 
						<jsp:include page="../common/pageNavigator.jsp" />
					</td>
				</tr>
			</table>
			<!--  페이지 Navigator 끝 -->
			
			
			<table width="100%" border="0" cellspacing="0" cellpadding="0"
				style="margin-top: 10px;">
				<tr>
					<td align="right">
					<div class="input-append">
					<select name="searchCondition" class="ct_input_g" style="width: 87px">
							<option value="1" ${search.searchCondition=="1"?"SELECTED":""}>이름</option>
							<option value="2" ${search.searchCondition=="2"?"SELECTED":""}>주소</option>
							<option value="3" ${search.searchCondition=="3"?"SELECTED":""}>전화번호</option>
					</select> 
					
					
					<input type="text" name="searchKeyword"	value="${search.searchKeyword==null?'':search.searchKeyword}"
						class="ct_input_g" style="width: 200px; height: 19px" onkeypress="if(event.keyCode==13){javascript:fncGetList('1');return false;}"> 	
					<button class="btn" type="button"><a href="javascript:fncGetList('1');">
					<i class="icon-search"></i>검색</a></button>
					</td>
					</div>
				</tr>
			</table>
			
			
		</form>
	</div>

	<form action="/restaurant/getAddRestaurantView" method="POST">
		&nbsp;&nbsp;<input class="btn" type="submit" value="맛집추가">
	</form>
	
	

</body>
</html>

