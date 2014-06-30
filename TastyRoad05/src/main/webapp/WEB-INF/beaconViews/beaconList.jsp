<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!doctype html>
<html>
<head>
<title>비콘관리</title>
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
				<div align="right">
					<form name=logOut method="POST"></form>
					<a href="javascript:post('/admin/logoutAction');">log-out<img
						src="../resources/img/icon/logout.png"></a>

				</div>
				<!-- 네비게이션 아이콘 -->
				</div>
				<!-- Wrap -->
			</div>
			
		</header>
		
	<div style="width: 98%; margin-left: 10px;">
<!-- 		<form name="detailForm" action="/beacon/listBeacon"
			method="get" onsubmit="return false">
 -->
            <div class="restaurant_well"><i class="icon-check"></i> 비컨관리</div>

		<table class="table-bordered" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top: 10px;">

			<tr>
				<td class="ct_list_b" width="50">일련번호</td>
				<td class="ct_list_b" width="150">UUID</td>
				<td class="ct_list_b" width="100">Major</td>
				<td class="ct_list_b" width="100">Minor</td>
				<td class="ct_list_b" width="50">맛집번호</td>
				<td class="ct_list_b" width="50">관리</td>
			</tr>

			<%--  search 고객용 View 시작 --%>
			<c:forEach var="beaconList" items="${beaconList}">

				<tr class="ct_list_pop">
					<td align="center">${beaconList.beaconId}</td>
					<td align="center">${beaconList.uuId}</td>
					<td align="center">${beaconList.major}</td>
					<td align="center">${beaconList.minor}</td>
					<td align="center">${beaconList.resId}</td>
					<td align="center">
						<a class="btn" href="javascript:post('/beacon/getUpdateBeaconView', {beaconId: '${beaconList.beaconId}'});" style="width:50">수정</a>
						<a class="btn" href="javascript:post('/beacon/removeBeacon', {beaconId: '${beaconList.beaconId}', resId: '${beaconList.resId}'});" style="width:50">삭제</a>	
                        
                        <!--  
						<form action="/beacon/getUpdateBeaconView" method="POST">
							<input type="submit" value="수정">
							<input type="hidden" name="beaconId" value="${beaconList.beaconId}">
						</form>
						<form action="/beacon/removeBeacon" method="POST">
							<input type="submit" value="삭제">
							<input type="hidden" name="beaconId" value="${beaconList.beaconId}">
							<input type="hidden" name="resId" value="${beaconList.resId}">
						</form>
						-->
					</td>
				</tr>
			</c:forEach>
		</table>

		<%-- Restaurant List에서 바로 넘어왔을 경우에만 비콘추가 버튼이 보이게 함
		- 바로 넘어 왔다면 search.searchCondition == 4 일 수 밖에 없음--%>
		<c:if test="${search.searchCondition == 4}">
			<form action="/beacon/getAddBeaconView" method="POST" align="right">
			</br>
				<input class="btn" type="submit" value="비콘추가">
				<input type="hidden" name="resId" value="${search.searchKeyword}">
			</form>
		</c:if>

	</div>
</body>
</html>

