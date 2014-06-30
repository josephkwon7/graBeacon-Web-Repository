<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!doctype html>
<html>
<head>
	<title>점주관리</title>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8">
	<link rel="stylesheet" href="\resources\css\bootstrap.css" type="text/css">
	<link rel="stylesheet" type="text/css" href="../resources/css/header.css">
	
	<!-- 자바스크립트 주석처리. by 정준호. to Post방식으로 받기 위함. -->
	<!--  
	<script type="text/javascript">
		function fncMoveBackward(){
			document.location.href="/restaurant/listRestaurant";
		}
	</script>
	-->
	
	
	<style type="text/css">
	.submittable{
	margin-top : 20px;
	margin-left : 730px;
	}
	</style>
	
	
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

<body>




<br/>
<br/>
 
<hr/> 
<hr/>
<hr/>
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
		
		


		<table width="100%" height="37" border="0" cellpadding="0" cellspacing="0">
		
            
              <tr>
              	<div class="restaurantAdd_well"><i class="icon-plus"></i>점주조회</div>
              </tr>
       
	</table>
		
		 
		
	<c:if test="${owner.ownerId != 0}">	
		
		<table  class="table-bordered" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top:13px;">
			<tr>
				<td height="1" colspan="4" ></td>
			</tr>
			<tr>
				<td width="104" class="ct_write">점주번호 </td>
				<td ></td>
				<td class="ct_write01">
				
				
								${owner.ownerId==null?'':owner.ownerId}
						
				</td>
			</tr>
			<tr>
				<td ></td>
			</tr>
			<tr>
				<td class="ct_write">맛집이름<img src="/resources/images/ct_icon_red.gif" width="3" height="3" align="absmiddle"></td>
				<td ></td>
				<td class="ct_write01">
					${owner.name==null?'':owner.name}
				</td>
			</tr>
			<tr>
				<td height="1" colspan="3" bgcolor="D6D6D6"></td>
			</tr>
			<tr>
				<td class="ct_write">전화번호</td>
				<td ></td>
				<td class="ct_write01">
					${owner.phone==null?'':owner.phone}
				</td>
			</tr>
			<tr>
				<td height="1" colspan="3" bgcolor="D6D6D6"></td>
			</tr>
			<tr>
				<td class="ct_write">주소</td>
				<td ></td>
				<td class="ct_write01">
					${owner.addr==null?'':owner.addr}
				</td>
			</tr>
			<tr>
				<td height="1" colspan="3" ></td>
			</tr>
			<tr>
				<td class="ct_write">이메일</td>
				<td ></td>
				<td class="ct_write01">
					<!-- 테이블 시작 -->
				
								${owner.email==null?'':owner.email}
						
				</td>
			</tr>
			<tr>
				 
			</tr>
			<tr>
				<td  class="ct_write">맛집번호</td>
				<td width="1"></td>
				<td class="ct_write01">
					${owner.resId==null?'':owner.resId}
				</td>
			</tr>
			<tr>
				<td ></td>
			</tr>
		</table>
		
		
	</c:if>
	
	<c:if test="${owner.ownerId == 0}">
		등록된 점주가 없습니다. 아래 점주추가 버튼을 눌러 점주를 추가해 주세요.	
	</c:if>
	
	<table class="submittable" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td >
							<c:if test="${owner.ownerId == 0}">
								<form name="getAddOwnerView" action="/owner/getAddOwnerView" method="POST">
									<input type="hidden" name="resId" value="${owner.resId}">
									<input type="submit" value="점주추가" class="btn">&nbsp;
								</form>							
							</c:if>
							<c:if test="${owner.ownerId != 0}">
								<form name="getUpdateOwnerView" action="/owner/getUpdateOwnerView" method="POST">
									<input type="hidden" name="ownerId" value="${owner.ownerId}">
									<input type="submit" value="점주수정"  class="btn">&nbsp;&nbsp;
								</form>
							</c:if>
						</td>
							<c:if test="${owner.ownerId != 0}">
								<td  ></td>	

									<td >
										<form name="removeOwner" action="/owner/removeOwner" method="POST">
											<input type="hidden" name="ownerId" value="${owner.ownerId}">
											<input type="hidden" name="ownerId" value="${owner.resId}">
											<input type="submit" value="점주삭제" class="btn">&nbsp;&nbsp;
										</form>
									</td>
							</c:if>
			 
						<td >
						
							<!--  
							<a href="javascript:fncMoveBackward();">맛집목록</a></td>
							-->
						
							<form  name="moveToRestaurantList" action="/restaurant/getRestaurantListView"" method="POST">
								<input type="submit" value="맛집목록" class="btn">&nbsp;&nbsp;
							</form> 
		 <!-- 
						<td class="btn">
						 <a href="javascript:history.go(-1);" >뒤로</a> </td>
			  -->
						

					</tr>
				</table>
		 
</body>
</html>