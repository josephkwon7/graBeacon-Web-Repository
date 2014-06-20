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
</script>
</head>

<body bgcolor="#ffffff" text="#000000">
	<div style="width: 98%; margin-left: 10px;">
		<form name="detailForm" action="/beacon/listBeacon.do"
			method="get" onsubmit="return false">
			<table width="100%" height="37" border="0" cellpadding="0"
				cellspacing="0">
				<tr>
					<td width="15" height="37"><img src="/resources/images/ct_ttl_img01.gif"
						width="15" height="37"></td>
					<td background="/resources/images/ct_ttl_img02.gif" width="100%"
						style="padding-left: 10px;">
						<table width="100%" border="0" cellspacing="0" cellpadding="0">
							<tr>
								<td width="93%" class="ct_ttl01">비콘 목록</td>
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
								<option value="1" ${search.searchCondition=="1"?"SELECTED":""}>UUID</option>
								<option value="2" ${search.searchCondition=="2"?"SELECTED":""}>Major</option>
								<option value="3" ${search.searchCondition=="3"?"SELECTED":""}>Minor</option>
								<!--  <option value="4" ${search.searchCondition=="4"?"SELECTED":""}>ResId</option> -->
						</select> 
						
						
						<c:if test="${search.searchCondition == 4}">
							<input type="text" name="searchKeyword"	value=''
							class="ct_input_g" style="width: 200px; height: 19px">
						</c:if>
						<c:if test="${search.searchCondition != 4}">
							<input type="text" name="searchKeyword"	value="${search.searchKeyword==null?'':search.searchKeyword}"
							class="ct_input_g" style="width: 200px; height: 19px">
						</c:if>
					</td>

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
					<td class="ct_list_b"></td>
					<td class="ct_line02"></td>
					<td class="ct_list_b"></td>
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
							<form action="/beacon/getBeaconUpdateView.do" method="get">
								<input type="submit" value="수정">
								<input type="hidden" name="updateView" value="${beaconList.beaconId}">
							</form>
						</td>
						<td></td>
						<td align="left">
							<form action="/beacon/removeBeacon.do" method="get">
								<input type="submit" value="삭제">
								<input type="hidden" name="remove" value="${beaconList.beaconId}">
							</form>
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
		
		<form action="/beacon/AddBeaconView.do" method="get">
			<input type="submit" value="비콘추가">
			<input type="hidden" name="addView" value="${search.searchKeyword}">
		</form>

	</div>
</body>
</html>

