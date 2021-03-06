<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<html>
<meta content='text/html; charset=utf-8' http-equiv='Content-type'>
<head>

<title>DWF - 생활의 윤택함을 더하다</title>
<meta content='width=device-width, initial-scale=1.0' name='viewport'>
<meta
	content='DWF is a multi-platform texting app that allows iPhone, Android, and BlackBerry users to send and receive messages for free.
	 With FWD users may message each other one-on-one and in groups chats with unlimited numbers of friends.'
	name='description'>


<!--  세세한 CSS 설정 -->

<link rel="stylesheet"	type="text/css"	href="../resources/css/header.css">

<link href="../resources/css/login_custom.css" rel="stylesheet" />

<!-- 로그인 양식 커스텀 js  커스텀시 : ko로 검색하여 바뀐 글귀 확인요망
<script type="text/javascript" src="/resources/js/kakao_login.js">
	
</script> 
-->
<!-- 로그인 양식 커스텀 js -->
<!--link
	href="http://img2.kakao.co.kr/assets/sub-aa63efef21a82ab3e877bf3e4ee66158.css"
	media="all" rel="stylesheet" />
	
<!-- button css -->
<link href="../resources/css/manage.css" rel="stylesheet" />

<!-- 로그인 유효성 체크 -->

	
<meta content='TastyRoad, Beacon, 비콘, 테이스티, 로드, DWF' name='keywords'>


	<script type="text/javascript">
		function loginValidation(){
			//Form 유효성 검증
		 	var adminId = document.loginForm.adminId.value;
			//var password = document.loginForm.password.value;
		
			if(adminId == null || adminId.length<1){
				alert("관리자ID를 입력하세요");
				return;
			}
			//document.loginForm.action="/admin/logonAction";
			document.loginForm.action="/admin/logonAction";
			document.loginForm.submit();
		}
		
		//function loginBoxReset(){
		//	document.loginForm.reset();
		//}
			
	   	function post(path) {
	
		    var form = document.createElement("form");
		    form.setAttribute("method", "post");
		    form.setAttribute("action", path);
	
		    document.body.appendChild(form);
		    form.submit();
		} 

   	</script>
   	
</head>

 <div class = "linebottom"></div>	 

 <body>
	<br/>
	<header>
		
			<div id="header">
				<div class="wrap">
					
					<div class="navi-icon">
						<a href="/"><div class="logo"></div></a> 
						<a href="javascript:post('/home/getIntroView');"><div class="navi01"></div></a>
						<a href="javascript:post('/home/getMapView');"><div class="navi02"></div></a>
						<a href="javascript:post('/home/getManageView');"><div class="navi03"></div></a> 

					</div>
					<!-- 네비게이션 아이콘 -->
				</div>
				<!-- Wrap -->
			</div>
			<!-- 헤더 -->
			
		</header>
<!-- 로그인 박스는 메인 페이지 이미지 안에 삽입 요망. -->

<div class='login-box'>
	<form name="loginForm" id="login-form" method="POST">
		<fieldset>
			<legend>로그인 영역</legend>
			<ul class='login_lst'>
				<li>
					<span class='inp_box'> 
					<label class='_loginBoxEmailPlaceholder' for='u_id'></label> 
					<input class='_loginBoxEmailInput' id='u_id' name='adminId' placeholder='관리자ID' 
						tabindex='1' type='text'>
						<!--  아래 불필요 코드들 삭제함 - YH -->
						<!--  <button class='_loginBoxEmailTooltipBtn btn_help' tabindex='5'
							type='button'>도움말 보기</button>
						
						<div class='ly_tooltip' data-part-name='emailTooltipLayer'>
							<!-- 물음표(로그인 버튼 옆) -->
						<!--  <div class='bn_box'>
							<a class='_findEmailBtn'
									href='https://accounts.kakao.com/weblogin/find_email?continue=http://www.kakao.com'
									target='_blank'>관리자 계정 찾기</a>
							</div>  
							<span class='arr' style='right: 15px'></span>
						</div>
						-->
					</span>
				</li>
				<li>
					<span class='inp_box'> 
						<label class='_loginBoxPasswordPlaceholder' for='u_pass'></label> 
						<input class='_loginBoxPasswordInput' id='u_pass' name='password'
								placeholder='비밀번호' tabindex='2' type='password'>
					</span>
				</li>
				</li>
				<li>				
			</ul>
			<!-- 아래 불필요 코드 삭제 - YH -->  
			<!-- <div class='state_box'>
				<input id='u_ot' name='remember' tabindex='3' type='checkbox'>
				<label for='u_ot'>로그인 상태 유지</label>
			 -->
			<p class='_loginBoxErrorText error_txt' style='display: none'></p>
			<!--  
			<button class='_loginBoxLoginBtn btn_login' tabindex='4'
				type='submit'>
			-->
			<!-- 원본
			<a href="javascript:loginValidation();">
				<button class='_loginBoxLoginBtn btn_login' tabindex='4'>
					<span>로그인</span>
				</button>
			</a>
			 -->
			<!-- CSS수정해서 버튼 동작하도록 수정 요망 - YH -->
			<a href="javascript:loginValidation;">
					로그인
			</a>

		 <!--  관리자페이지에서 필요없는 목록들 주석  
			<div class='mem_info'>
				<div class='mem_wrap'>
					<a class='_createAccountToggleBtn btn_mem' href='#'>회원가입</a> 
					<div class='_createAccountLayerContainer'></div>
					<div class='ly_tooltip down' data-part-name='createAccountLayer'>
						<p>계정이 맞는지 먼저 확인해보세요.</p>
						<div class='bn_box'>
							 
							<a class='_findEmailBtn'
								href='https://accounts.kakao.com/weblogin/find_email?continue=http://www.kakao.com'
								target='_blank'>계정 찾기</a> <span class='bar'></span> <a
								class='_createAccountBtn'
								href='https://accounts.kakao.com/weblogin/create_account?continue=http://www.kakao.com'
								target='_blank'>회원가입</a>
						</div>
						<span class='arr' style='left: 15px'></span>
					</div>
				</div>
				<ul class='find_lst'>
					<li>
						 <a class='_findEmailBtn'
						href='https://accounts.kakao.com/weblogin/find_email?continue=http://www.kakao.com'
						target='_blank'>계정 찾기</a> <span class='bar'></span>
					</li>
					<li><a class='_findPasswordBtn'
						href='https://accounts.kakao.com/weblogin/find_password?continue=http://www.kakao.com'
						target='_blank'>비밀번호 찾기</a></li>
				</ul>
			</div>
			<!--  -->
		</fieldset>
	</form>
</div>

<!-- 로그인 스크립트 -->
<!-- 불필요 아래 코드 삭제 - YH -->
<!--  
<script>
	$('.login-button').hide();

	$(document).ready(
			function() {
				$('a.logout-button').on('click', function() {
					$('form')[1].submit();
				})

				$(".slideshow > span:gt(0)").hide();
				$(".text-area > span:gt(0)").hide();
				setInterval(function() {
					$('.slideshow > span:first').fadeOut(1800).next().fadeIn(
							100).end().appendTo('.slideshow');

					setTimeout(function() {
						$('.text-area > span:first').fadeOut(10).next().fadeIn(
								10).end().appendTo('.text-area');
					}, 1800);
				}, 7000);
			});

	window.kakao.statics = {
		defaultErrorMessage : '에러가 발생했습니다. 잠시 후 다시 시도해 주세요.',
		loginContinueUrl : 'http://www.kakao.com/',
		loginCallbackUrl : 'http://www.kakao.com/cb'
	};
</script>
-->
 
</body>
  <!-- footer 요망 -->
</html>
