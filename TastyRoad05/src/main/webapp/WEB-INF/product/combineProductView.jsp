<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri='http://java.sun.com/jsp/jstl/core' prefix='c'%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>��ǰ �����ȸ</title>
<meta http-equiv="content-type" content="text/html; charset=utf-8">
<link rel="stylesheet" href="/css/admin.css" type="text/css">
<script type="text/javascript">
	function fncGetList(page) {
		document.getElementById("currentPage").value = page;
		document.detailForm.submit();
	}
</script>
</head>

<body bgcolor="#ffffff" text="#000000">
	<div style="width: 98%; margin-left: 10px;">
		<form name="detailForm" action="/listProduct.do?menu=${menu}"
			method="post" onsubmit="return false">
			<table width="100%" height="37" border="0" cellpadding="0"
				cellspacing="0">
				<tr>
					<td width="15" height="37"><img src="/images/ct_ttl_img01.gif"
						width="15" height="37"></td>
					<td background="/images/ct_ttl_img02.gif" width="100%"
						style="padding-left: 10px;">
						<table width="100%" border="0" cellspacing="0" cellpadding="0">
							<tr>
							<c:if test="${menu=='manage'}">
								<td width="93%" class="ct_ttl01">��ǰ ����</td>
							</c:if>
							<c:if test="${menu=='search'}">
								<td width="93%" class="ct_ttl01">��ǰ �˻�</td>
							</c:if>
							</tr>
						</table>
					</td>
					<td width="12" height="37"><img src="/images/ct_ttl_img03.gif"
						width="12" height="37"></td>
				</tr>
			</table>

			<table width="100%" border="0" cellspacing="0" cellpadding="0"
				style="margin-top: 10px;">
				<tr>

					<td align="right">
					<select name="searchCondition" class="ct_input_g" style="width: 80px">
							<option value="1" ${search.searchCondition=="1"?"SELECTED":""}>��ǰ��</option>
							<option value="2" ${search.searchCondition=="2"?"SELECTED":""}>��ǰ����</option>
					</select> 
					<input type="text" name="searchKeyword"	value="${search.searchKeyword==null?'':search.searchKeyword}"
						class="ct_input_g" style="width: 200px; height: 19px"></td>


					<td align="right" width="70">
						<table border="0" cellspacing="0" cellpadding="0">
							<tr>
								<td width="17" height="23"><img	src="/images/ct_btnbg01.gif" width="17" height="23"></td>
								<td background="/images/ct_btnbg02.gif" class="ct_btn01"
									style="padding-top: 3px;"><a
									href="javascript:fncGetList('1');">�˻�</a></td>
								<td width="14" height="23"><img
									src="/images/ct_btnbg03.gif" width="14" height="23"></td>
							</tr>
						</table>
					</td>
				</tr>
			</table>



			<table width="100%" border="0" cellspacing="0" cellpadding="0"
				style="margin-top: 10px;">
				<tr>
					<td colspan="11">��ü${resultPage.totalCount }�Ǽ�, ����
						${resultPage.currentPage} ������</td>
				</tr>
				<tr>
					<td class="ct_list_b" width="100">No</td>
					<td class="ct_line02"></td>
					<td class="ct_list_b" width="150">��ǰ��</td>
					<td class="ct_line02"></td>
					<td class="ct_list_b" width="150">����</td>
					<td class="ct_line02"></td>
					<td class="ct_list_b">�����</td>
					<td class="ct_line02"></td>
					<td class="ct_list_b">�������</td>
				</tr>
				<tr>
					<td colspan="11" bgcolor="808285" height="1"></td>
				</tr>

				<%--menu test
				<c:out var="str" value="${menu}"/>
				 --%>
				<%--menu test --%>
				<%-- manage �����ڿ� View ���� --%>
				<c:if test="${menu=='manage'}">
					<c:forEach var="productList" items="${list}">
						<c:set var="i" value="${ i+1 }" />
						<c:set var="tran" value="�Ǹ���" />
						<c:if test="${! empty productList.proTranCode}">
							<c:choose>
								<c:when test="${productList.proTranCode=='0  '}">
									<c:set var="tran" value="�����" />
								</c:when>
								<c:when test="${productList.proTranCode=='1  '}">
									<c:set var="tran" value="��ۿϷ�" />
								</c:when>
								<c:when test="${productList.proTranCode=='3  '}">
									<c:set var="tran" value="���ſϷ�" />
								</c:when>
								<c:otherwise>
									<c:set var="tran" value="�Ǹ���" />
								</c:otherwise>
							</c:choose>
						</c:if>

						<tr class="ct_list_pop">
							<td align="center">${i}</td>
							<td></td>
							<td align="left"><a
								href="/updateProductView.do?prodNo=${productList.prodNo}">${productList.prodName}</a></td>
							<td></td>
							<td align="left">${productList.price}</td>
							<td></td>
							<td align="left">${productList.regDate}</td>
							<td></td>
							<td align="left">${! empty tran ? tran : ""}<c:if
									test="${tran=='�����'}">
									<c:set var="link2"
										value=" href=\"/updateTranCodeByProd.do?prodNo=" />
									<a ${link2} ${productList.prodNo} ${'&tranCode=1\"'}>
										${'[����ϱ�]'}</a>
								</c:if>
							</td>
						</tr>
						<tr>
							<td colspan="11" bgcolor="D6D7D6" height="1"></td>
						</tr>
					</c:forEach>
				</c:if>
				<%-- manage �����ڿ� View �� --%>

				<%--  search ���� View ���� --%>
				<c:if test="${menu=='search'}">
					<c:forEach var="productList" items="${list}">
						<c:set var="i" value="${ i+1 }" />
						<c:set var="tran"
							value="${empty productList.proTranCode? '�Ǹ���': '������'}" />
						<tr class="ct_list_pop">
							<td align="center">${i}</td>
							<td></td>
							<td align="left"><c:if test="${tran=='������'}">
									<a>${productList.prodName} </a>
								</c:if> <%-- --%> <c:if test="${tran=='�Ǹ���'}">
									<c:set var="link2" value=" href=\"/getProduct.do?prodNo=" />
									<a ${link2}${productList.prodNo}${'\"'}>
										${productList.prodName} </a>
								</c:if></td>

							<td></td>
							<td align="left">${productList.price}</td>
							<td></td>
							<td align="left">${productList.regDate}</td>
							<td></td>
							<td align="left">${tran}</td>
						</tr>
						<tr>
							<td colspan="11" bgcolor="D6D7D6" height="1"></td>
						</tr>
					</c:forEach>
				</c:if>
				<%--  search ���� View ���� --%>
			</table>


			<!--  ������ Navigator ���� -->
			<table width="100%" border="0" cellspacing="0" cellpadding="0"
				style="margin-top: 10px;">
				<tr>
					<td align="center"><input type="hidden" id="currentPage"
						name="currentPage" value="" /> <jsp:include
							page="../common/pageNavigator.jsp" /></td>
				</tr>
			</table>
			<!--  ������ Navigator �� -->
		</form>
	</div>
</body>
</html>
