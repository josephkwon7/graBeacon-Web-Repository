<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!doctype html>
<html>
<head>
	<title>점주관리</title>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8">
	<link rel="stylesheet" href="/resources/css/admin.css" type="text/css">
	
	<!-- 자바스크립트 주석처리. by 정준호. to Post방식으로 받기 위함. -->
	<!--  
	<script type="text/javascript">
		function fncMoveBackward(){
			document.location.href="/restaurant/listRestaurant";
		}
	</script>
	-->
</head>

<body bgcolor="#ffffff" text="#000000">

		<table width="100%" height="37" border="0" cellpadding="0"cellspacing="0">
			<tr>
				<td width="15" height="37"><img src="/resources/images/ct_ttl_img01.gif" width="15" height="37"></td>
				<td background="/resources/images/ct_ttl_img02.gif" width="100%" style="padding-left:10px;">
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td width="93%" class="ct_ttl01">점주조회</td>
						<td width="20%" align="right">&nbsp;</td>
					</tr>
				</table>
				</td>
				<td width="12" height="37"><img src="/resources/images/ct_ttl_img03.gif" width="12" height="37"></td>
			</tr>
		</table>
		
	<c:if test="${owner.ownerId != 0}">	
		
		<table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top:13px;">
			<tr>
				<td height="1" colspan="3" bgcolor="D6D6D6"></td>
			</tr>
			<tr>
				<td width="104" class="ct_write">점주번호<img src="/resources/images/ct_icon_red.gif" width="3" height="3" align="absmiddle"></td>
				<td bgcolor="D6D6D6" width="1"></td>
				<td class="ct_write01">
					<table width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td width="105">
								${owner.ownerId==null?'':owner.ownerId}
							</td>
							<td>
							</td>
						</tr>
					</table>
				</td>
			</tr>
			<tr>
				<td height="1" colspan="3" bgcolor="D6D6D6"></td>
			</tr>
			<tr>
				<td width="104" class="ct_write">맛집이름<img src="/resources/images/ct_icon_red.gif" width="3" height="3" align="absmiddle"></td>
				<td bgcolor="D6D6D6" width="1"></td>
				<td class="ct_write01">
					${owner.name==null?'':owner.name}
				</td>
			</tr>
			<tr>
				<td height="1" colspan="3" bgcolor="D6D6D6"></td>
			</tr>
			<tr>
				<td width="104" class="ct_write">전화번호</td>
				<td bgcolor="D6D6D6" width="1"></td>
				<td class="ct_write01">
					${owner.phone==null?'':owner.phone}
				</td>
			</tr>
			<tr>
				<td height="1" colspan="3" bgcolor="D6D6D6"></td>
			</tr>
			<tr>
				<td width="104" class="ct_write">주소</td>
				<td bgcolor="D6D6D6" width="1"></td>
				<td class="ct_write01">
					${owner.addr==null?'':owner.addr}
				</td>
			</tr>
			<tr>
				<td height="1" colspan="3" bgcolor="D6D6D6"></td>
			</tr>
			<tr>
				<td width="104" class="ct_write">이메일</td>
				<td bgcolor="D6D6D6" width="1"></td>
				<td class="ct_write01">
					<!-- 테이블 시작 -->
					<table border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td height="26">
								${owner.email==null?'':owner.email}
							</td>
						</tr>
					</table>
				</td>
			</tr>
			<tr>
				<td height="1" colspan="3" bgcolor="D6D6D6"></td>
			</tr>
			<tr>
				<td width="104" class="ct_write">맛집번호</td>
				<td bgcolor="D6D6D6" width="1"></td>
				<td class="ct_write01">
					${owner.resId==null?'':owner.resId}
				</td>
			</tr>
			<tr>
				<td height="1" colspan="3" bgcolor="D6D6D6"></td>
			</tr>
		</table>
	</c:if>
	
	<c:if test="${owner.ownerId == 0}">
		등록된 점주가 없습니다. 아래 점주추가 버튼을 눌러 점주를 추가해 주세요.	
	</c:if>
	
	<table width="100%" border="0" cellspacing="0" cellpadding="0"	style="margin-top:10px;">
		<tr>
			<td width="53%">
			</td>
			<td align="right">
				<table border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td width="17" height="23">
							<c:if test="${owner.ownerId == 0}">
								<form name="getAddOwnerView" action="/owner/getAddOwnerView" method="POST">
									<input type="hidden" name="resId" value="${owner.resId}">
									<input type="submit" value="점주추가">
								</form>							
							</c:if>
							<c:if test="${owner.ownerId != 0}">
								<form name="getUpdateOwnerView" action="/owner/getUpdateOwnerView" method="POST">
									<input type="hidden" name="ownerId" value="${owner.ownerId}">
									<input type="submit" value="점주수정">
								</form>
							</c:if>
						</td>
							<c:if test="${owner.ownerId != 0}">
								<td width="30"></td>	

									<td width="17" height="23">
										<form name="removeOwner" action="/owner/removeOwner" method="POST">
											<input type="hidden" name="ownerId" value="${owner.ownerId}">
											<input type="hidden" name="ownerId" value="${owner.resId}">
											<input type="submit" value="점주삭제">
										</form>
									</td>
							</c:if>
							
						<td width="30"></td>	

						<td width="17" height="23"><img src="/resources/images/ct_btnbg01.gif" width="17" height="23"></td>
						<td background="/resources/images/ct_btnbg02.gif" class="ct_btn01" style="padding-top:3px;">
						
							<!--  
							<a href="javascript:fncMoveBackward();">맛집목록</a></td>
							-->
						
							<form name="moveToRestaurantList" action="/restaurant/getRestaurantListView"" method="POST">
								<input type="submit" value="맛집목록">
							</form></td>
						<td width="14" height="23"><img src="/resources/images/ct_btnbg03.gif" width="14" height="23"></td>

						<td width="30"></td>					

						<td width="17" height="23"><img src="/resources/images/ct_btnbg01.gif" width="17" height="23"></td>
						<td background="/resources/images/ct_btnbg02.gif" class="ct_btn01" style="padding-top:3px;">
							<a href="javascript:history.go(-1);">뒤로</a></td>
						<td width="14" height="23"><img src="/resources/images/ct_btnbg03.gif" width="14" height="23"></td>
						

					</tr>
				</table>
			</td>
		</tr>
	</table>

</body>
</html>