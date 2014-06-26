<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!doctype html>
<html lang="en">
<meta content='text/html; charset=utf-8' http-equiv='Content-type'>
<head>
<title>DWF - 생활의 윤택함을 더하다</title>

<link rel="stylesheet" media="all" href="../resources/css/intro.css">
<link rel="stylesheet" type="text/css" href="../resources/css/header.css">
<link rel="stylesheet" type="text/css" href="../resources/css/footer.css">

<script type="text/javascript">
	   
	   	function post(path) {
	
		    var form = document.createElement("form");
		    form.setAttribute("method", "post");
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
 <div class = "linebottom"></div>

		<header>
		
			<div id="header" align="center">
				<div class="wrap">
					
					<div class="navi-icon">
						<a href="/"><div class="logo"></div></a> 
						<a href=javascript:post('/home/getIntroView');><div class="navi01"></div></a>
						<a href=javascript:post('/home/getMapView');><div class="navi02"></div></a>
						<a href=javascript:post('/home/getManageView');><div class="navi03"></div></a> 

					</div>
					<!-- 네비게이션 아이콘 -->
				</div>
				<!-- Wrap -->
			</div>
			
		</header>
		
	 	  	  

			<section id='middle'>
				<section id='body'>

					<section class='company' id='content'>
						<div class='title -typecompany'>
							<h2></h2>
						</div>
						<section class='company-visual'>
							<article class='text type1'></article>
							<article class='text type2'>
								<p>
									&nbsp;TastyRoad는 '비콘'(beacon)이라는 저전력 근거리통신(블루투스)기술을 기반으로 만들어진 신개념 어플리케이션입니다.<br><br>
									비콘이 설치된 매장을 지나면 어플을 통해 할인정보, 메뉴상세정보, 거리정보를 전달받아 직접 방문하지 않고도 유익한 정보를 획득할 수 있어 고객에게 알뜰한 소비와 편리에 기여하고 있습니다.

								</p>

 
							</article>
						</section>
						<!--테이스티로드 로고-->
						<section class='line'></section>

						<section class='bc_use_img'>
							<article class='ci'>
								<h3></h3>
								<h4></h4>

							</article>
						</section>
						<section class='line2'></section>

						<!--테이스티로드 로고-->
						<article class='contact-us'>
							<h3>contact us</h3>
							<article class='text type1'>
								<h4>Tasty Road</h4>
								<dl>
									<dt>
										만든이
										<dd><address>Team.D.W.F(Dinner With Family)</address>
									</dd>
								 
									
								
                            </dl>
							
						 
							<!--까페가기-->
							
                      
                            <dl>
							

                                <dt>메 &nbsp;&nbsp;일</dt>
                                <dd>
						 <address>lotuslim00@naver.com</address>
								
                                <!--    <address>Team_D.W.F@gmail.com</address>-->
                                </dd>
                                
                              <div>
                               <a class='customerMap'
										href="mailTo:lotuslim00@naver.com"><img
										src="../resources/img/design/mailgo.png" target=_black height="30"
										width="30" /></a></div>
                            </dl>
							<!-- 문의 메일보내기-->
							
                          
							
                        </article>
                    </article>
                </section>

            </section>
        </section>

	   
   <footer id="footer">
    <dl class="info">
    	<dt>
        Team DWF
        </dt>
        <dt>
        주소 : 서울시 서초구 서초동 1327-15 비트아카데미빌딩 3층 301호
        </dt>
    </dl>
    <details>
    	<summary>Copyright@Team DWF Corp. All rights reserved.</summary>
    </details>
   </footer>
   
</body>  
</html>

