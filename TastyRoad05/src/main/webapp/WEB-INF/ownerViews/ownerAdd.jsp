<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!doctype html>
<html>
<head>
<title>점주등록</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/resources/css/header.css" type="text/css">
<link rel="stylesheet" href="/resources/css/bootstrap.css"
	type="text/css">
<script type="text/javascript">
	function fncAddProduct() {
		//Form 유효성 검증
		var name = document.detailForm.name.value;
		//var addr = document.detailForm.addr.value;
		//var phone = document.detailForm.phone.value;
		//var email = document.detailForm.email.value;

		if (name == null || name.length < 1) {
			alert("이름은 반드시 입력하여야 합니다.");
			return;
		}
		/*
		if(addr == null || addr.length<1){
			alert("주소는 반드시 입력하여야 합니다.");
			return;
		}
		if(phone == null || phone.length<1){
			alert("전화번호는 반드시 입력하여야 합니다.");
			return;
		}
		if(email == null || email.length<1){
			alert("이메일은 반드시 입력하여야 합니다.");
			return;
		}
		 */
		document.detailForm.action = '/owner/addOwner';
		document.detailForm.submit();
	}

	function resetData() {
		document.detailForm.reset();
	}
</script>


<style type="text/css">
.submittable {
	margin-top: 20px;
	margin-left: 730px;
}
</style>

</head>

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
	<header>
		<div id="header" align="center">
			<div class="wrap">

				<div class="navi-icon">
					<a href="/"><div class="logo"></div></a> <a href=javascript:post('/home/getIntroView');><div
							class="navi01"></div></a> <a href=javascript:get('/home/getMapView');><div
							class="navi02"></div></a> <a href=javascript:post('/home/getManageView');><div
							class="navi03"></div></a>
				</div>
				<div align="right">

					<a href="javascript:post('/admin/logoutAction');">log-out<img
						src="../resources/img/icon/logout.png"></a>

				</div>
				<!-- 네비게이션 아이콘 -->
			</div>
			<!-- Wrap -->
		</div>
	</header>
	
	<!--<c:out value="${owner}"/>-->

		<div class="restaurant_well">점주등록</div>

		<table class="table-bordered" width="100%" border="0" cellspacing="0" cellpadding="0"
			style="margin-top: 13px;">
			<tr>
				<td width="104" class="ct_write"><img src="/resources/img/icon/astar.png" width="8px" height="8px" align="absmiddle">이름</td>
				<td class="ct_write01"><input type="text" name="name"
					class="ct_input_g" style="width: 250px; height: 19px"
					maxLength="20" value="${owner.name}"></td>
			</tr>
				
			<tr>
				<td width="104" class="ct_write">주소</td>
				<td class="ct_write01"><input type="text" name="addr"
					class="ct_input_g" style="width: 250px; height: 19px"
					maxLength="20" value="${owner.addr}"></td>
			</tr>
			
			<tr>
				<td width="104" class="ct_write">전화번호</td>
				<td class="ct_write01"><input type="text" name="phone"
					class="ct_input_g" style="width: 250px; height: 19px"
					maxLength="20" value="${owner.phone}"></td>
			</tr>
			
			<tr>
				<td width="104" class="ct_write">이메일</td>
				<td class="ct_write01"><input type="text" name="email"
					class="ct_input_g" style="width: 250px; height: 19px"
					maxLength="20" value="${owner.email}"></td>
			</tr>
		</table>

		<input type="hidden" name="resId" value="${owner.resId}">

		<table width="100%" border="0" cellspacing="0" cellpadding="0"
			style="margin-top: 10px;">
			<tr>
				<td width="53%"></td>
				<td align="right">
					<table border="0" cellspacing="0" cellpadding="0">
						<tr>
							<button class="btn">
								<a href="javascript:fncAddProduct();">등록</a>
							</button>
							&nbsp;
							<button class="btn">
								<a href="javascript:resetData();">취소</a>
							</button>
							&nbsp;
							<button class="btn">
								<a href="javascript:history.go(-1);">뒤로</a>
							</button>
						</tr>
					</table>
				</td>
			</tr>
		</table>
	</form>
</body>
</html>