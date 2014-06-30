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

<body bgcolor="#ffffff" text="#000000">

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
		<br>
		
<br>
<br>
<br>
<br>

		<table width="100%" height="37" border="0" cellpadding="0"cellspacing="0">
			<tr>
				
				<table width="100%" height="37" border="0" cellpadding="0" cellspacing="0">
    	<tr>
    		<div class="restaurantAdd_well"><i class="icon-edit"></i> 맛집상세정보</div>
    	</tr>
    </table>
				</td>
				
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
					<td width="104" class="ct_write">상세위치-경도<img src="/resources/images/ct_icon_red.gif" width="3" height="3" align="absmiddle"></td>
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
								<input class="btn" type="submit" value="맛집수정">
							</form>
						</td>

						<td width="17" height="23">
							<form name="removeOwner" action="/restaurant/removeRestaurant" method="POST">
								<input type="hidden" name="resId" value="${restaurant.resId}">
								<input class="btn" type="submit" value="맛집삭제">
							</form>
						</td>

						
									<td width="3"></td>	


			<!--  뒤로가기대신 목록보기로 바꿈
						<td class="btn" style="padding-top:3px;">
							<a href="javascript:history.go(-1);">뒤로</a></td>
						-->
						<form name=getRestaurantListView method="POST">
						</form>
						<td class="btn" style="padding-top:3px;">
						<a href="javascript:post('/restaurant/getRestaurantListView');">맛집목록</a>

					</tr>
				</table>
			</td>
		</tr>
	</table>

</body>
</html>