<!DOCTYPE HTML>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html; charset=UTF-8" %>

	
<c:if test="${ resultPage.currentPage <= resultPage.pageUnit }">
		◀ 이전
</c:if>

<c:if test="${ resultPage.currentPage > resultPage.pageUnit }">
		 <a href="javascript:fncGetList(
		 ${ resultPage.currentPage-5>1?resultPage.currentPage-5:1})">◀ 이전</a>
</c:if>
	
<c:forEach var="i"  begin="${resultPage.beginUnitPage}" end="${resultPage.endUnitPage}" step="1">
		 <a href="javascript:fncGetList(${i })">${i }</a>
</c:forEach>

<c:if test="${resultPage.currentPage >= resultPage.maxPage}">
		이후 ▶
</c:if>
<c:if test="${ resultPage.currentPage < resultPage.maxPage }">
		<a href="javascript:fncGetList(
		${resultPage.currentPage+5<=resultPage.maxPage?
		resultPage.currentPage+5:resultPage.maxPage})">이후 ▶</a>
</c:if>
