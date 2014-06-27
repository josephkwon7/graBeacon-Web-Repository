<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!doctype html>
<html>
<head>
	<title>맛집등록</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<link rel="stylesheet" href="/resources/css/admin.css" type="text/css">
	<script type="text/javascript">

		function fncAddProduct(){
			//Form 유효성 검증
		
		 	var name = document.detailForm.name.value;
			var addr = document.detailForm.addr.value;
			var phone = document.detailForm.phone.value;
			var geoLat = document.detailForm.geoLat.value;
			var geoLong = document.detailForm.geoLong.value;
			var imgSmall1 = document.detailForm.imgSmall1.value;
			var imgBig1 = document.detailForm.imgBig1.value;
			var imgMenu = document.detailForm.imgMenu.value;
			var copyComment = document.detailForm.copyComment.value;
			var resCategory = document.detailForm.resCategory.value;
		
			if(name == null || name.length<1){
				alert("상호명은 반드시 입력하여야 합니다.");
				return;
			}
	/*		if(addr == null || addr.length<1){
				alert("주소는 반드시 입력하여야 합니다.");
				return;
			}
			if(phone == null || phone.length<1){
				alert("전화번호는 반드시 입력하여야 합니다.");
				return;
			}
			if(geoLat == null || geoLat.length<1){
				alert("상세위치(위도)는 반드시 입력하여야 합니다.");
				return;
			}
			if(geoLong == null || geoLong.length<1){
				alert("상세위치(경도)는 반드시 입력하여야 합니다.");
				return;
			}	
			if(imgSmall1 == null || imgSmall1.length<1){
				alert("메인이미지는 반드시 있어야 합니다.");
				return;
			}
			if(imgBig1 == null || imgBig1.length<1){
				alert("상세이미지1은 반드시 있어야 합니다.");
				return;
			}
			if(imgMenu == null || imgMenu.length<1){
				alert("메뉴이미지는 반드시 있어야 합니다.");
				return;
			}
			if(copyComment == null || copyComment.length<1){
				alert("광고문구는 반드시 입력하여야 합니다.");
				return;
			}		
			if(resCategory == null || resCategory.length<1){
				alert("맛집분류는 반드시 선택하여야 합니다.");
				return;
			}
	*/
	
			document.detailForm.action='/restaurant/addRestaurant';
			document.detailForm.submit();
		}
	
	function resetData(){
		document.detailForm.reset();
	}
	

	</script>


</head>

<body bgcolor="#ffffff" text="#000000">

<form name="detailForm" method="POST" enctype="multipart/form-data"><!--  -->
	<table width="100%" height="37" border="0" cellpadding="0" cellspacing="0">
		<tr>
			<td width="15" height="37"><img src="/resources/images/ct_ttl_img01.gif"
				width="15" height="37"></td>
			<td background="/resources/images/ct_ttl_img02.gif" width="100%"
				style="padding-left: 10px;">
			<table width="100%" border="0" cellspacing="0" cellpadding="0">
				<tr>
					<td width="93%" class="ct_ttl01">맛집등록</td>
					<td width="20%" align="right">&nbsp;</td>
				</tr>
			</table>
			</td>
			<td width="12" height="37"><img src="/resources/images/ct_ttl_img03.gif"
				width="12" height="37"></td>
		</tr>
	</table>
	
	<table width="100%" border="0" cellspacing="0" cellpadding="0"
		style="margin-top: 13px;">
		<tr>
			<td height="1" colspan="3" bgcolor="D6D6D6"></td>
		</tr>
		<tr>
			<td width="104" class="ct_write">맛집이름*</td>
			<td bgcolor="D6D6D6" width="1"></td>
			<td class="ct_write01">
			<table width="100%" border="0" cellspacing="0" cellpadding="0">
				<tr>
					<td width="105">
						<input type="text" name="name" class="ct_input_g" style="width: 100px; 
						height: 19px" maxLength="20">
					</td>
				</tr>
			</table>
	
			</td>
		</tr>
		<tr>
			<td height="1" colspan="3" bgcolor="D6D6D6"></td>
		</tr>
		<tr>
			<td width="104" class="ct_write">주소*</td>
			<td bgcolor="D6D6D6" width="1"></td>
			<td class="ct_write01">
				<input type="text" name="addr" class="ct_input_g" style="width: 100px; 
				height: 19px" maxLength="10">
			</td>
		</tr>
		<tr>
			<td height="1" colspan="3" bgcolor="D6D6D6"></td>
		</tr>
		<tr>
			<td width="104" class="ct_write">전화번호*</td>
			<td bgcolor="D6D6D6" width="1"></td>
			<td class="ct_write01">
				<input type="text" name="phone" class="ct_input_g" 
				style="width: 100px; height: 19px" maxLength="13">
			</td>
		</tr>
		<tr>
			<td height="1" colspan="3" bgcolor="D6D6D6"></td>
		</tr>
		<tr>
			<td width="104" class="ct_write">사업자 등록번호</td>
			<td bgcolor="D6D6D6" width="1"></td>
			<td class="ct_write01"><input type="text" name="licenseNo"
				class="ct_input_g" style="width: 100px; height: 19px" maxLength="13">
			</td>
		</tr>
		<tr>
			<td height="1" colspan="3" bgcolor="D6D6D6"></td>
		</tr>
		<tr>
			<td width="104" class="ct_write">상세위치-위도*</td>
			<td bgcolor="D6D6D6" width="1"></td>
			<td class="ct_write01"><input type="text" name="geoLat"
				class="ct_input_g" style="width: 100px; height: 19px" maxLength="13"></input>
			</td>
		</tr>
		<tr>
			<td height="1" colspan="3" bgcolor="D6D6D6"></td>
		</tr>
		<tr>
			<td width="104" class="ct_write">상세위치-경도*</td>
			<td bgcolor="D6D6D6" width="1"></td>
			<td class="ct_write01"><input type="text" name="geoLong"
				class="ct_input_g" style="width: 100px; height: 19px" maxLength="13"></input>
			</td>
		</tr>
		<tr>
			<td height="1" colspan="3" bgcolor="D6D6D6"></td>
		</tr>
		<tr>
			<td width="104" class="ct_write">메인이미지1*</td>
			<td bgcolor="D6D6D6" width="1"></td>
			<td class="ct_write01"><input type="file" name="imgSmall1"
				class="ct_input_g" style="width: 500px; height: 19px"></input>
			</td>
		</tr>
		<tr>
			<td height="1" colspan="3" bgcolor="D6D6D6"></td>
		</tr>
		<tr>
			<td width="104" class="ct_write">상세이미지1*</td>
			<td bgcolor="D6D6D6" width="1"></td>
			<td class="ct_write01"><input type="file" name="imgBig1"
				class="ct_input_g" style="width: 500px; height: 19px"></input>
			</td>
		</tr>
		<tr>
			<td height="1" colspan="3" bgcolor="D6D6D6"></td>
		</tr>
		<tr>
			<td width="104" class="ct_write">상세이미지2</td>
			<td bgcolor="D6D6D6" width="1"></td>
			<td class="ct_write01"><input type="file" name="imgBig2"
				class="ct_input_g" style="width: 500px; height: 19px"></input>
			</td>
		</tr>
		<tr>
			<td height="1" colspan="3" bgcolor="D6D6D6"></td>
		</tr>
		<tr>
			<td width="104" class="ct_write">상세이미지3</td>
			<td bgcolor="D6D6D6" width="1"></td>
			<td class="ct_write01"><input type="file" name="imgBig3"
				class="ct_input_g" style="width: 500px; height: 19px"></input>
			</td>
		</tr>
		<tr>
			<td height="1" colspan="3" bgcolor="D6D6D6"></td>
		</tr>
		<tr>
			<td width="104" class="ct_write">메뉴이미지*</td>
			<td bgcolor="D6D6D6" width="1"></td>
			<td class="ct_write01"><input type="file" name="imgMenu"
				class="ct_input_g" style="width: 500px; height: 19px"></input>
			</td>
		</tr>
		<tr>
			<td height="1" colspan="3" bgcolor="D6D6D6"></td>
		</tr>
		<tr>
			<td width="104" class="ct_write">광고문구*</td>
			<td bgcolor="D6D6D6" width="1"></td>
			<td class="ct_write01"><input type="text" name="copyComment"
				class="ct_input_g" style="width: 500px; height: 19px" maxLength="30"></input>
			</td>
		</tr>
		<tr>
			<td height="1" colspan="3" bgcolor="D6D6D6"></td>
		</tr>
		<tr>
			<td width="104" class="ct_write">맛집분류*</td>
			<td bgcolor="D6D6D6" width="1"></td>
			<td class="ct_write01">
				<select name="resCategory" class="ct_input_g" style="width: 100px; height: 19px">
				  <option value="1">한식</option>
				  <option value="2">일식</option>
				  <option value="3">중식</option>
				  <option value="4">양식</option>
				  <option value="5">카페</option>
				</select>
			</td>
		</tr>		
	</table>
	
	<table width="100%" border="0" cellspacing="0" cellpadding="0"
		style="margin-top: 10px;">
		<tr>
			<td width="53%"></td>
			<td align="right">
			<table border="0" cellspacing="0" cellpadding="0">
				<tr>
					<td width="17" height="23"><img src="/resources/images/ct_btnbg01.gif"
						width="17" height="23"></td>
					<td background="/resources/images/ct_btnbg02.gif" class="ct_btn01"
						style="padding-top: 3px;"><a
						href="javascript:fncAddProduct();">등록</a></td>
					<td width="14" height="23"><img src="/resources/images/ct_btnbg03.gif"
						width="14" height="23"></td>
	
					<td width="30"></td>
	
					<td width="17" height="23"><img src="/resources/images/ct_btnbg01.gif"
						width="17" height="23"></td>
					<td background="/resources/images/ct_btnbg02.gif" class="ct_btn01"
						style="padding-top: 3px;"><a href="javascript:resetData();">취소</a></td>
					<td width="14" height="23"><img src="/resources/images/ct_btnbg03.gif"
						width="14" height="23"></td>
				</tr>
			</table>
			</td>
		</tr>
	</table>
</form>
</body>
</html>