<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
 
<!doctype html>
<html>
<head>
<title>맛집관리</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/resources/css/admin.css" type="text/css">
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
</script>
</head>

<body bgcolor="#ffffff" text="#000000">
	<div style="width: 98%; margin-left: 10px;">

		<form name="detailForm" action="/restaurant/getRestaurantListView"
			method="POST" onsubmit="return false">
			
			<table width="100%" height="37" border="0" cellpadding="0"
				cellspacing="0">
				<tr>
					<td width="15" height="37"><img src="/resources/images/ct_ttl_img01.gif"
						width="15" height="37"></td>
					<td background="/resources/images/ct_ttl_img02.gif" width="100%"
						style="padding-left: 10px;">
						<table width="100%" border="0" cellspacing="0" cellpadding="0">
							<tr>
								<td width="93%" class="ct_ttl01">맛집 목록</td>
							</tr>
						</table>
					</td>
					<td width="12" height="37"><img src="/resources/images/ct_ttl_img03.gif"
						width="12" height="37"></td>
				</tr>
			</table>

			<table width="100%" border="0" cellspacing="0" cellpadding="0"
				style="margin-top: 10px;">
				<tr>

					<td align="right">
					<select name="searchCondition" class="ct_input_g" style="width: 80px">
							<option value="1" ${search.searchCondition=="1"?"SELECTED":""}>이름</option>
							<option value="2" ${search.searchCondition=="2"?"SELECTED":""}>주소</option>
							<option value="3" ${search.searchCondition=="3"?"SELECTED":""}>전화번호</option>
					</select> 
					<input type="text" name="searchKeyword"	value="${search.searchKeyword==null?'':search.searchKeyword}"
						class="ct_input_g" style="width: 200px; height: 19px"></td>


					<td align="right" width="70">
						<table border="0" cellspacing="0" cellpadding="0">
							<tr>
								<td width="17" height="23"><img	src="/resources/images/ct_btnbg01.gif" width="17" height="23"></td>
								<td background="/resources/images/ct_btnbg02.gif" class="ct_btn01"
									style="padding-top: 3px;"><a href="javascript:fncGetList('1');">검색</a></td>
								<td width="14" height="23"><img
									src="/resources/images/ct_btnbg03.gif" width="14" height="23"></td>
							</tr>
						</table>
					</td>
				</tr>
			</table>

			<table width="100%" border="0" cellspacing="0" cellpadding="0"
				style="margin-top: 10px;">
				<tr>
					<td colspan="11">전체${resultPage.totalCount }건수, 현재
						${resultPage.currentPage} 페이지</td>
				</tr>
				<tr>
					<td class="ct_list_b" width="50">번호</td>
					<td class="ct_line02"></td>
					<td class="ct_list_b" width="100">이름</td>
					<td class="ct_line02"></td>
					<td class="ct_list_b" width="200">주소</td>
					<td class="ct_line02"></td>
					<td class="ct_list_b" width="100">전화번호</td>
					<td class="ct_line02"></td>
					<td class="ct_list_b" width="50">분류</td>
					<td class="ct_line02"></td>
					<td class="ct_list_b" width="200">관리</td>
				</tr>
				<tr>
					<td colspan="11" bgcolor="808285" height="1"></td>
				</tr>

				<%--  search 고객용 View 시작 --%>
				<c:forEach var="restaurantList" items="${restaurantList}">

					<tr class="ct_list_pop">
						<td align="center">${restaurantList.resId}</td>
						<td></td>
						<td align="left">
							<a href="javascript:post('/restaurant/getRestaurantDetail', 
						  {resId: '${restaurantList.resId}'});">${restaurantList.name}</a>
						</td>
						<td></td>
						<td align="left">${restaurantList.addr}</td>
						<td></td>
						<td align="left">${restaurantList.phone}</td>
						<td></td>
						<td align="left">
							<c:choose>
								<c:when test="${restaurantList.resCategory == '1'}">한식</c:when>
								<c:when test="${restaurantList.resCategory == '2'}">일식</c:when>
								<c:when test="${restaurantList.resCategory == '3'}">중식</c:when>
								<c:when test="${restaurantList.resCategory == '4'}">양식</c:when>
								<c:otherwise>카페</c:otherwise>
							</c:choose>
						</td>
						<td></td>
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
					<tr>
						<td colspan="11" bgcolor="D6D7D6" height="1"></td>
					</tr>
					
				</c:forEach>
			</table>

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
		</form>
	</div>

	<form action="/restaurant/getAddRestaurantView" method="POST">
		<input type="submit" value="맛집추가">
	</form>


</body>
</html>

