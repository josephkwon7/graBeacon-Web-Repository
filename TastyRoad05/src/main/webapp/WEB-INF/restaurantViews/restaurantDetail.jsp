<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!doctype html>
<html>
<head>
	<title>맛집상세정보</title>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8">
	<link rel="stylesheet" href="/resources/css/admin.css" type="text/css">
	<script type="text/javascript">
		function fncMoveBackward(){
			document.location.href="/restaurant/listRestaurant";
		}
	</script>
</head>

<body bgcolor="#ffffff" text="#000000">

		<table width="100%" height="37" border="0" cellpadding="0"cellspacing="0">
			<tr>
				<td width="15" height="37"><img src="/resources/images/ct_ttl_img01.gif" width="15" height="37"></td>
				<td background="/resources/images/ct_ttl_img02.gif" width="100%" style="padding-left:10px;">
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td width="93%" class="ct_ttl01">맛집상세정보</td>
						<td width="20%" align="right">&nbsp;</td>
					</tr>
				</table>
				</td>
				<td width="12" height="37"><img src="/resources/images/ct_ttl_img03.gif" width="12" height="37"></td>
			</tr>
		</table>
		
		<table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top:13px;">
			<tr>
				<td height="1" colspan="3" bgcolor="D6D6D6"></td>
			</tr>
			<tr>
				<td width="104" class="ct_write">맛집번호<img src="/resources/images/ct_icon_red.gif" width="3" height="3" align="absmiddle"></td>
				<td bgcolor="D6D6D6" width="1"></td>
				<td class="ct_write01">
					<table width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td width="300">
								${restaurant.resId==null?'':restaurant.resId}
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
				<td width="104" class="ct_write">상호명<img src="/resources/images/ct_icon_red.gif" width="3" height="3" align="absmiddle"></td>
				<td bgcolor="D6D6D6" width="1"></td>
				<td class="ct_write01">
					${restaurant.name==null?'':restaurant.name}
				</td>
			</tr>
			<tr>
				<td height="1" colspan="3" bgcolor="D6D6D6"></td>
			</tr>
			<tr>
				<td width="104" class="ct_write">주소</td>
				<td bgcolor="D6D6D6" width="1"></td>
				<td class="ct_write01">
					${restaurant.addr==null?'':restaurant.addr}
				</td>
			</tr>
			<tr>
				<td height="1" colspan="3" bgcolor="D6D6D6"></td>
			</tr>
			<tr>
				<td width="104" class="ct_write">전화번호</td>
				<td bgcolor="D6D6D6" width="1"></td>
				<td class="ct_write01">
					${restaurant.phone==null?'':restaurant.phone}
				</td>
			</tr>
			<tr>
				<td height="1" colspan="3" bgcolor="D6D6D6"></td>
			</tr>
			<tr>
				<td width="104" class="ct_write">사업자 등록번호</td>
				<td bgcolor="D6D6D6" width="1"></td>
				<td class="ct_write01">
					<!-- 테이블 시작 -->
					<table border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td height="26">
					${restaurant.licenseNo==null?'':restaurant.licenseNo}
							</td>
						</tr>
					</table>
				</td>
			</tr>
						<tr>
				<td height="1" colspan="3" bgcolor="D6D6D6"></td>
			</tr>
			<tr>
				<td width="104" class="ct_write">상세위치-위도</td>
				<td bgcolor="D6D6D6" width="1"></td>
				<td class="ct_write01">
					<!-- 테이블 시작 -->
					<table border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td height="26">
					${restaurant.geoLat==null?'':restaurant.geoLat}
							</td>
						</tr>
					</table>
				</td>
			</tr>
						<tr>
				<td height="1" colspan="3" bgcolor="D6D6D6"></td>
			</tr>
			<tr>
				<td width="104" class="ct_write">상세위치-경도*</td>
				<td bgcolor="D6D6D6" width="1"></td>
				<td class="ct_write01">
					<!-- 테이블 시작 -->
					<table border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td height="26">
					${restaurant.geoLong==null?'':restaurant.geoLong}
							</td>
						</tr>
					</table>
				</td>
			</tr>
						<tr>
				<td height="1" colspan="3" bgcolor="D6D6D6"></td>
			</tr>
			<tr>
				<td width="104" class="ct_write">메인이미지1</td>
				<td bgcolor="D6D6D6" width="1"></td>
				<td class="ct_write01">
					<!-- 테이블 시작 -->
					<table border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td height="26">
					${restaurant.imgSmall1==null?'':restaurant.imgSmall1}
							</td>
						</tr>
					</table>
				</td>
			</tr>
						<tr>
				<td height="1" colspan="3" bgcolor="D6D6D6"></td>
			</tr>
			<tr>
				<td width="104" class="ct_write">상세이미지1</td>
				<td bgcolor="D6D6D6" width="1"></td>
				<td class="ct_write01">
					<!-- 테이블 시작 -->
					<table border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td height="26">
					${restaurant.imgBig1==null?'':restaurant.imgBig1}
							</td>
						</tr>
					</table>
				</td>
			</tr>
						<tr>
				<td height="1" colspan="3" bgcolor="D6D6D6"></td>
			</tr>
			<tr>
				<td width="104" class="ct_write">상세이미지2</td>
				<td bgcolor="D6D6D6" width="1"></td>
				<td class="ct_write01">
					<!-- 테이블 시작 -->
					<table border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td height="26">
					${restaurant.imgBig2==null?'':restaurant.imgBig2}
							</td>
						</tr>
					</table>
				</td>
			</tr>
						<tr>
				<td height="1" colspan="3" bgcolor="D6D6D6"></td>
			</tr>
			<tr>
				<td width="104" class="ct_write">상세이미지3</td>
				<td bgcolor="D6D6D6" width="1"></td>
				<td class="ct_write01">
					<!-- 테이블 시작 -->
					<table border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td height="26">
					${restaurant.imgBig3==null?'':restaurant.imgBig3}
							</td>
						</tr>
					</table>
				</td>
			</tr>
						<tr>
				<td height="1" colspan="3" bgcolor="D6D6D6"></td>
			</tr>
			<tr>
				<td width="104" class="ct_write">메뉴이미지</td>
				<td bgcolor="D6D6D6" width="1"></td>
				<td class="ct_write01">
					<!-- 테이블 시작 -->
					<table border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td height="26">
					${restaurant.imgMenu==null?'':restaurant.imgMenu}
							</td>
						</tr>
					</table>
				</td>
			</tr>
						<tr>
				<td height="1" colspan="3" bgcolor="D6D6D6"></td>
			</tr>
			<tr>
				<td width="104" class="ct_write">광고문구</td>
				<td bgcolor="D6D6D6" width="1"></td>
				<td class="ct_write01">
					<!-- 테이블 시작 -->
					<table border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td height="26">
					${restaurant.copyComment==null?'':restaurant.copyComment}
							</td>
						</tr>
					</table>
				</td>
			</tr>
			<tr>
				<td height="1" colspan="3" bgcolor="D6D6D6"></td>
			</tr>
			<tr>
				<td width="104" class="ct_write">맛집분류</td>
				<td bgcolor="D6D6D6" width="1"></td>
				<td class="ct_write01">
					<!-- 테이블 시작 -->
					<table border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td height="26">
								<c:choose>
									<c:when test="${restaurant.resCategory == 1}">한식</c:when>
									<c:when test="${restaurant.resCategory == 2}">일식</c:when>
									<c:when test="${restaurant.resCategory == 3}">중식</c:when>
									<c:when test="${restaurant.resCategory == 4}">양식</c:when>
									<c:otherwise>카페</c:otherwise>
								</c:choose>
							</td>
						</tr>
					</table>
				</td>
			</tr>
			<tr>
				<td height="1" colspan="3" bgcolor="D6D6D6"></td>
			</tr>

		</table>
	
	<table width="100%" border="0" cellspacing="0" cellpadding="0"	style="margin-top:10px;">
		<tr>
			<td width="53%">
			</td>
			<td align="right">
				<table border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td width="17" height="23">
							<form name="getUpdateOwnerView" action="/restaurant/getUpdateRestaurantView" method="POST">
								<input type="hidden" name="resId" value="${restaurant.resId}">
								<input type="submit" value="맛집수정">
							</form>
						</td>

						<td width="17" height="23">
							<form name="removeOwner" action="/restaurant/removeRestaurant" method="POST">
								<input type="hidden" name="resId" value="${restaurant.resId}">
								<input type="submit" value="맛집삭제">
							</form>
						</td>

						
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