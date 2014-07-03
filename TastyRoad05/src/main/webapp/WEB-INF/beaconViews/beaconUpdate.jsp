<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<html>
<head>
	<title>비콘정보수정</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<link rel="stylesheet" href="/resources/css/bootstrap.css" type="text/css">
	<link rel="stylesheet" href="/resources/css/header.css" type="text/css">
    
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
	<%@include file="/WEB-INF/common/header.jsp"%>
		
		<div class="restaurant_well2">비콘정보수정</div>

<form name="detailForm" method="POST">
	
	<!--  hidden parameter for update -->
	<input type="hidden" name="beaconId" value="${beacon.beaconId}">
	<input type="hidden" name="resId" value="${beacon.resId}">
              	
	<table class="table-bordered" width="1019px" border="0" cellspacing="0" cellpadding="0" style="margin-top: 13px; margin-left: 10px">
		<tr>
			<td width="104" class="ct_write"><img src="/resources/img/icon/astar.png" width="8" height="8" align="absmiddle">UUID</td>
			<td class="ct_write01">
            	<input type="text" name="uuId" value="${beacon.uuId==null?'':beacon.uuId}" class="ct_input_g" style="width: 250px; height: auto" maxLength="36">
            </td>
        </tr>
        
        <tr>
			<td width="104" class="ct_write"><img src="/resources/img/icon/astar.png" width="8" height="8" align="absmiddle">Major</td>
			<td class="ct_write01">
            	<input type="text" name="major" value="${beacon.major==null?'':beacon.major}" class="ct_input_g" style="width: 250px; height: auto" maxLength="10" minLength="5">
            </td>
        </tr>
        
        <tr>
			<td width="104" class="ct_write">Minor</td>
			<td class="ct_write01">
            	<input type="text" name="minor" value="${beacon.minor==null?'':beacon.minor}" class="ct_input_g" style="width: 250px; height: auto" maxLength="5">
			</td>
		</tr>
	</table>

	<table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top: 10px;">
		<tr> 
			<td width="53%"></td>
			<td align="right">
			<table border="0" cellspacing="0" cellpadding="0">
				<tr>
				<!--
					<td width="17" height="23"><img src="/resources/images/ct_btnbg01.gif"
						width="17" height="23"></td>
						-->
					<button class="btn" type="button"><a href="javascript:fncUpdateBeacon();">수정</a></button>
				<!--
					<td width="14" height="23"><img src="/resources/images/ct_btnbg03.gif"
						width="14" height="23"></td>
					
				
					<td width="17" height="23"><img src="/resources/images/ct_btnbg01.gif"
						width="17" height="23"></td>
					
				-->
				
					<button class="btn" type="button"><a href="javascript:history.back()">취소</a></button>
				<!--
					<td width="14" height="23"><img src="/resources/images/ct_btnbg03.gif"
						width="14" height="23"></td>
				-->
				</tr>
			</table>
			</td>
		</tr>
	</table>
</form>
</body>
</html>