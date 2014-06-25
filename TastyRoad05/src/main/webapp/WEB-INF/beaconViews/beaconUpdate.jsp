<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<html>
<head>
	<title>비콘정보수정</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<link rel="stylesheet" href="/resources/css/admin.css" type="text/css">
	<script type="text/javascript">

		function fncUpdateBeacon(){
			//Form 유효성 검증
		
			var uuId = document.detailForm.uuId.value;
			var major = document.detailForm.major.value;
			var minor = document.detailForm.minor.value;
			
			if(uuId == null || uuId.length<1){
				alert("상품상세정보는 반드시 입력하여야 합니다.");
				return;
			}
			if(major == null || major.length<1){
				alert("제조일자는 반드시 입력하셔야 합니다.");
				return;
			}
			if(minor == null || minor.length<1){
				alert("가격은 반드시 입력하셔야 합니다.");
				return;
			}
		
			document.detailForm.action='/beacon/updateBeacon';
			document.detailForm.submit();
		}


	</script>


</head>

<body bgcolor="#ffffff" text="#000000">

<form name="detailForm" method="POST">
	
	<!--  hidden parameter for update -->
	<input type="hidden" name="beaconId" value="${beacon.beaconId}">
	<input type="hidden" name="resId" value="${beacon.resId}">
	
	<table width="100%" height="37" border="0" cellpadding="0"
		cellspacing="0">
		<tr>
			<td width="15" height="37"><img src="/resources/images/ct_ttl_img01.gif"
				width="15" height="37"></td>
			<td background="/resources/images/ct_ttl_img02.gif" width="100%"
				style="padding-left: 10px;">
			<table width="100%" border="0" cellspacing="0" cellpadding="0">
				<tr>
					<td width="93%" class="ct_ttl01">비콘정보수정</td>
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
			<td height="1" colspan="3" bgcolor="D6D6D6"></td>
		</tr>
		<tr>
			<td width="104" class="ct_write">UUID <img
				src="/resources/images/ct_icon_red.gif" width="3" height="3" align="absmiddle"></td>
			<td bgcolor="D6D6D6" width="1"></td>
			<td class="ct_write01"><input type="text" name="uuId" value="${beacon.uuId==null?'':beacon.uuId}"
				class="ct_input_g" style="width: 100px; height: 19px" maxLength="10"
				minLength="6"></td>
		</tr>
		<tr>
			<td height="1" colspan="3" bgcolor="D6D6D6"></td>
		</tr>
		<tr>
			<td width="104" class="ct_write">Major <img
				src="/resources/images/ct_icon_red.gif" width="3" height="3" align="absmiddle"></td>
			<td bgcolor="D6D6D6" width="1"></td>
			<td class="ct_write01"><input type="text" name="major" value="${beacon.major==null?'':beacon.major}"
				class="ct_input_g" style="width: 100px; height: 19px" maxLength="10"
				minLength="6"></td>
		</tr>
		<tr>
			<td height="1" colspan="3" bgcolor="D6D6D6"></td>
		</tr>
		<tr>
			<td width="104" class="ct_write">Minor <img
				src="/resources/images/ct_icon_red.gif" width="3" height="3" align="absmiddle"></td>
			<td bgcolor="D6D6D6" width="1"></td>
			<td class="ct_write01"><input type="text" name="minor" value="${beacon.minor==null?'':beacon.minor}"
				class="ct_input_g" style="width: 100px; height: 19px" maxLength="50">
			</td>
		</tr>
		<tr>
			<td height="1" colspan="3" bgcolor="D6D6D6"></td>
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
						style="padding-top: 3px;"><a href="javascript:fncUpdateBeacon();">수정</a></td>
					<td width="14" height="23"><img src="/resources/images/ct_btnbg03.gif"
						width="14" height="23"></td>
	
	
					<td width="17" height="23"><img src="/resources/images/ct_btnbg01.gif"
						width="17" height="23"></td>
					<td background="/resources/images/ct_btnbg02.gif" class="ct_btn01"
						style="padding-top: 3px;"><a href="javascript:history.back()">취소</a></td>
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