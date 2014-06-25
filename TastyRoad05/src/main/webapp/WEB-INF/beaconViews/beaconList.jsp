<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!doctype html>
<html>
<head>
<title>비콘관리</title>
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
<!-- 		<form name="detailForm" action="/beacon/listBeacon.do"
			method="get" onsubmit="return false">
 -->
			<table width="100%" height="37" border="0" cellpadding="0"
				cellspacing="0">
				<tr>
					<td width="15" height="37"><img src="/resources/images/ct_ttl_img01.gif"
						width="15" height="37"></td>
					<td background="/resources/images/ct_ttl_img02.gif" width="100%"
						style="padding-left: 10px;">
						<table width="100%" border="0" cellspacing="0" cellpadding="0">
							<tr>
								<td width="93%" class="ct_ttl01">비콘목록</td>
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
				<td class="ct_list_b" width="50">일련번호</td>
				<td class="ct_line02"></td>
				<td class="ct_list_b" width="150">UUID</td>
				<td class="ct_line02"></td>
				<td class="ct_list_b" width="100">Major</td>
				<td class="ct_line02"></td>
				<td class="ct_list_b" width="100">Minor</td>
				<td class="ct_line02"></td>
				<td class="ct_list_b" width="50">맛집번호</td>
				<td class="ct_line02"></td>
				<td class="ct_list_b" width="50">관리</td>
			</tr>
			<tr>
				<td colspan="11" bgcolor="808285" height="1"></td>
			</tr>

			<%--  search 고객용 View 시작 --%>
			<c:forEach var="beaconList" items="${beaconList}">

				<tr class="ct_list_pop">
					<td align="center">${beaconList.beaconId}</td>
					<td></td>
					<td align="left">${beaconList.uuId}</td>
					<td></td>
					<td align="left">${beaconList.major}</td>
					<td></td>
					<td align="left">${beaconList.minor}</td>
					<td></td>
					<td align="left">${beaconList.resId}</td>
					<td></td>
					<td align="left">
						<a href="javascript:post('/beacon/getUpdateBeaconView.do', 
						  {beaconId: '${beaconList.beaconId}'});">수정</a>
						<a href="javascript:post('/beacon/removeBeacon.do', 
						  {beaconId: '${beaconList.beaconId}', resId: '${beaconList.resId}'});">삭제</a>						<!--  
						<form action="/beacon/getUpdateBeaconView.do" method="POST">
							<input type="submit" value="수정">
							<input type="hidden" name="beaconId" value="${beaconList.beaconId}">
						</form>
						<form action="/beacon/removeBeacon.do" method="POST">
							<input type="submit" value="삭제">
							<input type="hidden" name="beaconId" value="${beaconList.beaconId}">
							<input type="hidden" name="resId" value="${beaconList.resId}">
						</form>
						-->
					</td>
				</tr>
				<tr>
					<td colspan="11" bgcolor="D6D7D6" height="1"></td>
				</tr>
			</c:forEach>
		</table>


		<%-- Restaurant List에서 바로 넘어왔을 경우에만 비콘추가 버튼이 보이게 함
		- 바로 넘어 왔다면 search.searchCondition == 4 일 수 밖에 없음--%>
		<c:if test="${search.searchCondition == 4}">
			<form action="/beacon/getAddBeaconView.do" method="POST">
				<input type="submit" value="비콘추가">
				<input type="hidden" name="resId" value="${search.searchKeyword}">
			</form>
		</c:if>

	</div>
</body>
</html>

