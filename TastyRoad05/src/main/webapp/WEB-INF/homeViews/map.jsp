<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!doctype html>
<html>
	
	<head>
		
		<title>DWF - 생활의 윤택함을 더하다</title>
	
			<meta charset="UTF-8">
			<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
			<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
			<link rel="Stylesheet" href="../resources/css/bootstrap.min.css"/>
			<link rel="Stylesheet" href="../resources/css/map.css"/>
			 

			 
		 <!--  
				
				
	---------------------------------------------------------------------
								S T A R T!      
			
			
				Mr.JaeYoung 코드 시작 지점, 종료지점까지 수정하시면 안됩니다!
	
	
								S T A R T!
	---------------------------------------------------------------------
	
	
	
	
	
	-->	
	
	
	
	<!-- ----------------------------------------------------------------------->   			
   			<!-- jquery + UI + CSS google CDN -->
	
			<!--panel용 lib -->
			<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
			
			
			<script src="http://code.jquery.com/jquery.min.js"></script>
		
			<!-- GoogleMap API Key -->
			<script
			src="http://maps.googleapis.com/maps/api/js?key=AIzaSyApGDMfovgAqhGLtG5Yi7epLMIOa4_qPk4&sensor=false&language=ko">
			</script>
		
			<!-- jquery UI google CDN -->
			<link rel="stylesheet"
			href="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/themes/smoothness/jquery-ui.css" />
			<script
			src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>
		
			<!--
			<script
				src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
		 	 -->
			
			<script src="../resources/js_custom/markerclusterer.js"></script>
			<script src="../resources/js_custom/markerclusterer_packed.js"></script>
			<script src="../resources/js_custom/markerclustererPlus.js"></script>
			<script src="../resources/js_custom/markerwithlabel.js"></script>
		
			<!--panel lib -->
			<!--
			<script src="../resources/js_custom/jquery.slidePanel.min.js"></script>
			 -->
			<!-- 
			<link rel="stylesheet" href="/../resources/demos/style.css">
			  -->
			 
			<!-- slider -->
			<!--
			<script src="../resources/js_custom/modernizr.custom.js"></script>
			 -->
			
		
			<!--
			<link rel="stylesheet" href="/../resources/demos/style.css">
			-->
			
			<!--slider bar script -->
			<!--
			<script src="../resources/js_custom/script.js"></script> 
			 -->
			<script src="../resources/js_custom/slider_script.js"></script> 
			 
			<script src="/../resources/js/jquery.bootstrap.wizard.js"></script>
			<script src="http://netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js"></script>
			
			
			<!-- jquery.bootstrap.wizard 화면구성 스크립트 코드 -->
			<script>
			$(document).ready(function() {
			  	$('#rootwizard').bootstrapWizard({onTabShow: function(tab, navigation, index) {
					var $total = navigation.find('li').length;
					var $current = index+1;
					var $percent = ($current/$total) * 100;
					$('#rootwizard').find('.progress-bar').css({width:$percent+'%'});
				}});	
			});	
			</script>
			
			<script>
		
		
			//여기부터 clusterer
				//----------------------------------------------------------	
			    var script = '<script type="text/javascript" src="../resources/js_custom/markerclusterer';
			    if (document.location.search.indexOf('compiled') !== -1) {
			      script += '_compiled';
			    }
			    script += '.js"><' + '/script>';
			    document.write(script);
			</script>
			<script async>
			     var styles = [[{
			       url: '../resources/imgs/markerclusterer/people35.png',
			       height: 35,
			       width: 35,
			       anchor: [16, 0],
			       textColor: '#ff00ff',
			       textSize: 10
			     }, {
			       url: '../resources/imgs/markerclusterer/people45.png',
			       height: 45,
			       width: 45,
			       anchor: [24, 0],
			       textColor: '#ff0000',
			       textSize: 11
			     }, {
			       url: '../resources/imgs/markerclusterer/people55.png',
			       height: 55,
			       width: 55,
			       anchor: [32, 0],
			       textColor: '#ffffff',
			       textSize: 12
			     }], [{
			       url: '../resources/imgs/markerclusterer/conv30.png',
			       height: 27,
			       width: 30,
			       anchor: [3, 0],
			       textColor: '#ff00ff',
			       textSize: 10
			     }, {
			       url: '../resources/imgs/markerclusterer/conv40.png',
			       height: 36,
			       width: 40,
			       anchor: [6, 0],
			       textColor: '#ff0000',
			       textSize: 11
			     }, {
			       url: '../resources/imgs/markerclusterer/conv50.png',
			       width: 50,
			       height: 45,
			       anchor: [8, 0],
			       textSize: 12
			     }], [{
			       url: '../resources/imgs/markerclusterer/heart30.png',
			       height: 26,
			       width: 30,
			       anchor: [4, 0],
			       textColor: '#ff00ff',
			       textSize: 10
			     }, {
			       url: '../resources/imgs/markerclusterer/heart40.png',
			       height: 35,
			       width: 40,
			       anchor: [8, 0],
			       textColor: '#ff0000',
			       textSize: 11
			     }, {
			       url: '../resources/imgs/markerclusterer/heart50.png',
			       width: 50,
			       height: 44,
			       anchor: [12, 0],
			       textSize: 12
			     }]];
			     
				 //-----------------------
			     //맵 스타일 - Bright & Bubbly
			     var styles = [ 
			               ]
			     //-----------------------
			     // var zoom = parseInt(document.getElementById('zoom').value, 10);
			     //var size = parseInt(document.getElementById('size').value, 10);
			     //var style = parseInt(document.getElementById('style').value, 10);
			     var zoom = null ;
			     var size = null ;
			     var style = null;
			     //여기까지 clusterer
				 //----------------------------------------------------------
				 
			
			//---------------------------------------
		/* 	var test="${test}";
			console.log(test); */
			//HTML5 Geolocation을 이용한 ip trace
			/**/
			/*teamdwf가 수정함...*/
			/*
			var sellImage = '../resources/imgs/icons/sell.png';
			var buyImage = '../resources/imgs/icons/buy.png';
			var dealImage = '../resources/imgs/icons/deal2.png';
			var geoImage = '../resources/imgs/icons/people.png';
			*/
			
			var koreanImage = '/../resources/imgs/icons/mapkorean.png';
			var japaneseImage = '/../resources/imgs/icons/mapjapanese.png';
			var chineseImage = '/../resources/imgs/icons/mapchinese.png';
			var westernImage = '/../resources/imgs/icons/mapwestern.png';
			var cafeImage = '/../resources/imgs/icons/mapcafe.png';
			var geoImage = '/../resources/imgs/icons/people.png';
			
			var map;
			var markers = [];
		//	var modalInjectionImageArray1=[];
		//	var modalInjectionInfoArray=[];
			var firstMapLoad="true";
		    var markerClusterer;
			var cluster;
			var pos;	
			var myPosition={
					A:null,
					k:null
			};
				<%-- initialize Start --%>
				function initialize() {
					//geocoder 좌표->주소 변환 사용
					geocoder = new google.maps.Geocoder();
					var mapOptions = {
						zoom : 7,
						center : new google.maps.LatLng(35.710787, 127.969980),
						disableDefaultUI : true,
						styles: styles
					}
					//map = null;
					map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);
					
					// Try HTML5 geolocation
					if (navigator.geolocation) {
						navigator.geolocation.getCurrentPosition(function(position) {
		
							if(firstMapLoad=="true"){
								pos = new google.maps.LatLng(position.coords.latitude,
										position.coords.longitude);
							}else{
								pos=center;
							}
							
							<%-- 임시 --%>
							myPosition.A=Math.round(pos.A*1000000)/1000000;
							myPosition.k=Math.round(pos.k*1000000)/1000000;
							
							
							new google.maps.Marker({
								position : new google.maps.LatLng(position.coords.latitude,
										position.coords.longitude),
								map : map,
								icon: geoImage,
								
								});
							
							map.setCenter(pos);
							if(firstMapLoad=="true"){
								map.setZoom(13);
								firstMapLoad="false";
							}else{
								map.setZoom(zoomLevel);
								/* console.log(zoomLevel); */
							}
						}, function() {
							handleNoGeolocation(true);
						});
					} else {
						// Browser doesn't support Geolocation
						handleNoGeolocation(false);
					}
					
					markersInit(); //marker[]에 itemList push
					markerInitialize(map); //map객체에 marekr onload
					//markerClusterer = new MarkerClusterer(map, markers, {
					markerClusterer = new MarkerClusterer(map, markers, {
				          maxZoom: 14,
				          gridSize: size,
				          ignoreHidden:true
				          //styles: styles[style]
				        });
					//cluster=new Cluster(MarkerClusterer);
					//cluster.setIgnoreHidden(true);
					  //물품등록시 사용할 이벤트, 위치정하기 버튼 누르기 전에 비활성화.
					  google.maps.event.addListener(map, 'click', function(e) {
				            placeMarker(e.latLng, map);
				      });
				}<%-- initialize End --%>
			
				<%-- placeMarker Start --%>
				var markerDropCheck;
				var markerDropEffect;
				var marker;
				// 마커찍기 
				function placeMarker(position, map) {
				  if(markerDropEffect=="active" && markerDropCheck!=1){
					  marker = new google.maps.Marker({
						position: position,
						map: map,
						/* draggable:true, */
						animation: google.maps.Animation.DROP
					  });
					  map.panTo(position);
					  var lat=marker.getPosition().lat();
					  var lng=marker.getPosition().lng();
						document.getElementById("reg_lat").value=lat;
						document.getElementById("reg_lng").value=lng;
						document.getElementById("latlng").value=lat+","+lng;
					markerDropEffect="false";
					markerDropCheck=1;
		            codeLatLng();
				  }
				}<%-- placeMarker End --%>
				
				<%-- markerDrop Start --%>
				function markerDrop(){
					markerDropEffect="active";
				}<%-- markerDrop End --%>
					
					
		
				<%-- clearMarkers Start --%>
				//마커지우기(위치 재설정)
				function clearMarkers() {
			    	marker.setOptions({
			    		map:null,
			    		visible:false
			    		
			    	});
			    	marker=null;
			    	markerDropEffect="active";
			    	markerDropCheck="0";
				}<%-- clearMarkers end --%>
					
		
				<%-- codeLatLng Start --%>
				//좌표 주소 전환
				function codeLatLng() {
					  var input = document.getElementById('latlng').value;
					  var latlngStr = input.split(',', 2);
					  var lat = parseFloat(latlngStr[0]);
					  var lng = parseFloat(latlngStr[1]);
					  var latlng = new google.maps.LatLng(lat, lng);
					  geocoder.geocode({'latLng': latlng}, function(results, status) {
					    if (status == google.maps.GeocoderStatus.OK) {
					      if (results[1]) {
					    	  document.getElementById("reg_add").value=results[1].formatted_address;
					      } else {
					        alert('No results found');
					      }
					    } else {
					      alert('Geocoder failed due to: ' + status);
					    }
					    
					  });
				}<%-- codeLatLng end --%>
				
					
				
				<%-- itemSearch Start --%>
				var searchKeyword;
				var zoomLevel;
				var center;
				var markersSearchResult=[];
				var searchOption;	
				
				function itemSearch(from){
					zoomLevel=map.getZoom();
					center=map.getCenter();
					
					markersSearchResult=[];
					searchKeyword=null;
					searchOption=null;
					
					if(from=="Quick"){
						searchKeyword=document.getElementById("searchKeywordQuick").value;
					}else{
						searchKeyword=document.getElementById("searchKeywordDetail").value;
					}
					
					/* console.log(searchKeyword); */
					
					if(searchKeyword!=null){
						searchKeyword=searchKeyword.trim().toUpperCase();
					}
					
					markerClusterer.clearMarkers();
					
					if(from=="Quick"){
						for(var i=0;i<markers.length;i++){
							if(markers[i].title.toUpperCase().match(searchKeyword)!=null){
								markerClusterer.addMarker(markers[i]);
							}
						}
					}else{
				
						/* console.log("from__debug___"+from); */
						switch(from){
							case 'all': 
								searchOption="all";
								break;
							case 'buy':
								searchOption="buy";
								break;
							case 'sell':
								searchOption="sell";
								break;
							default:
								if(document.getElementById('searchOption1').checked){
									searchOption = document.getElementById("searchOption1").value;
									/* console.log("('searchOption1').checked"); */
								}
								if(document.getElementById('searchOption2').checked){
									searchOption = document.getElementById("searchOption2").value;
									/* console.log("('searchOption2').checked"); */
								}
								if(document.getElementById('searchOption3').checked){
									searchOption = document.getElementById("searchOption3").value;
									/* console.log("('searchOption3').checked"); */
								}
						}
						
						/**/
						
						/* console.log(searchOption); */
						
						if(searchOption=="all"){
							for(var i=0;i<markers.length;i++){
								//console.log(markers[i].title.toUpperCase().match(searchKeyword));
								if(markers[i].title.toUpperCase().match(searchKeyword)!=null){
									markerClusterer.addMarker(markers[i]);
									markersSearchResult.push(markers[i]);
								}
							}
						}
						if(searchOption=="buy"){
							for(var i=0;i<markers.length;i++){
								if(markers[i].stateCode==1){
									if(markers[i].title.toUpperCase().match(searchKeyword)!=null){
										markerClusterer.addMarker(markers[i]);
										markersSearchResult.push(markers[i]);	
									}
								}
							}
						}
						if(searchOption=="sell"){
							for(var i=0;i<markers.length;i++){
								if(markers[i].stateCode==2){
									if(markers[i].title.toUpperCase().match(searchKeyword)!=null){
										markerClusterer.addMarker(markers[i]);
										markersSearchResult.push(markers[i]);	
									}
								}
							}
						}
						
						//순순
						if(document.getElementById('optionsRadios1').checked){
							markersSortingDistance();
						}
						if(document.getElementById('optionsRadios2').checked){
							markersSortingPrice();
						}
										
						
					}
					markerClusterer.repaint();
					return false;
				}<%-- itemSearch End --%>
				
				<%-- markersInit() --%>
				function markersInit(){
					//markers=[];
					//statCode 1=sell, 2=buy, 3=deal
					<c:forEach var="itemList" items="${itemList}">
						<c:set var="i" value="${ i+1 }" />	
						var str="${itemList.itemName}";
						
						//console.log(str.match(searchKeyword));
						
						if(searchKeyword!=null){
							searchKeyword=searchKeyword.trim().toUpperCase();
						}
						if(str.toUpperCase().match(searchKeyword)!=null){
								console.log("debug_"+${itemList.stateCode});
							
								console.log()
								markers.push(
										new google.maps.Marker({
										//new MarkerWithLabel({
											position : new google.maps.LatLng(${itemList.gridX1} , ${itemList.gridY1} ),
											map : map,
											icon:
												<c:if test="${itemList.stateCode=='1'}">
													koreanImage
												</c:if>
												<c:if test="${itemList.stateCode=='2'}">
													japaneseImage
												</c:if>
												<c:if test="${itemList.stateCode=='3'}">
													chineseImage
												</c:if>
												<c:if test="${itemList.stateCode=='4'}">
													westernImage
												</c:if>
												<c:if test="${itemList.stateCode=='5'}">
													cafeImage
												</c:if>
													,
											stateCode : '${itemList.stateCode}',
											title : '${itemList.itemName}',
											userNo : '${itemList.userNo}',
											itemNo : '${itemList.itemNo}',
											itemInfo : '${itemList.itemInfo}',
											itemPicturePath1 : '${itemList.itemPicturePath1}',
											itemPicturePath2 : '${itemList.itemPicturePath2}',
											itemPicturePath3 : '${itemList.itemPicturePath3}',
											//content : '${itemList.itemNo}',
											distance:null,
											distance_m:null,								
											price : '${itemList.price}'		
										})
								);
							}
								
					</c:forEach>
					/*
					markers.push(
							new google.maps.Marker({
							position : new google.maps.LatLng(37.500848, 127.053065),
							map : map,
							icon: buyImage,
							title : 'epic',
							
							content :  '<div id="dialog" title="Basic dialog">'+
										'몰아치는 한숨'+
										'</div>'
							})
						);
					*/
					
					
					/* console.log("markers.length__"+markers.length);
					console.log("markers[0]__"+markers[0]);
					console.log("markers[0]__"+markers[0].price);
					console.log("markers[0].position__"+markers[0].position);
					console.log("markers[0].position__"+markers[0].position.A);
					console.log("markers[0].position__"+markers[0].position.k); */
				}<%-- markersInit() end --%>
										
				
				<%-- markerInitialize Start --%>
				function markerInitialize(map) {
				  for (var i = 0; i < markers.length; i++) {
					//console.log(markers[i]);
					//markers[i].setMap(map);   
					//console.log(markers[i].content); 
					markerAddListener(markers[i], i);
				  }
				}<%-- markerInitialize end --%>
			
				<%-- markerAddListener Start--%>
				function markerAddListener(marker, i) {
				/* 
				  var infowindow = new google.maps.InfoWindow({
					content: marker.content	
				  });
				 */
				  //console.log("marker.content_"+marker.content);
				 //var dialogName="#item"+marker.content;
				  google.maps.event.addListener(marker, 'click', function() {
					  //infowindow.open(marker.get('map'), marker);	
					  modalInjection(marker);
				  });
				  
				}<%-- markerAddListener end--%>
				
				<%-- handleNoGeolocation Start --%>
				function handleNoGeolocation(errorFlag) {
					if (errorFlag) {
						//var content = 'Error: The Geolocation service failed.';
						var content = 'Error: 상단에 팝업된 위치액세스를 허용해 주십시오.';
					} else {
						//var content = 'Error: Your browser doesn\'t support geolocation.';
						var content = 'Error: 당신의 브라우저가 위치액세스를 지원하지않습니다.\n Chrome 브라우저를 권장합니다.';
					}
		
					var options = {
						map : map,
						zoom : 7,
						position : new google.maps.LatLng(35.710787, 127.969980),
						content : content
					};
		
					var infowindow = new google.maps.InfoWindow(options);
					map.setCenter(options.position);
				}<%-- handleNoGeolocation end --%>
				
				// Add a marker to the map and push to the array.
				<%-- addMarker Start --%>
				function addMarker(location) {
					var marker = new google.maps.Marker({
						position : location,
						map : map
					});
					markers.push(marker);
				}<%-- addMarker end --%>
				
				
				
				<%-- markersSorting Distance Start --%>
				function markersSortingDistance(){
					//console.log("pos___"+pos);
					//console.log("pos.A___"+Math.round(pos.A*1000000)/1000000);
					//console.log("pos.k___"+Math.round(pos.k*1000000)/1000000);
				
					/* console.log("markersSortingDistance In__"); */
					markersSearchResult.sort(function(a, b){
						/* console.log("markersSearchResult.sort.Distance call");
					 */	//geolocation으로 잡은 A,k를 이용해 가져온 a의 절대값과 삼각함수를 이용해 거리측정
						
						//var a_A	=	Math.abs(myPosition.A-a.position.A);
						//var a_k	=	Math.abs(myPosition.k-a.position.k);
						var a_A	=	Math.abs(Math.round(myPosition.A-a.position.A*1000000)/1000000);
						var a_k	=	Math.abs(Math.round(myPosition.k-a.position.k*1000000)/1000000);
						//var a_distance=Math.pow(a_A, a_A) + Math.pow(a_k, a_k);
						//a.distance=Math.sqrt(a_distance);
						a.distance_m=
							Math.round(getDistanceFromLatLonInKm(myPosition.k, myPosition.A,
									 					a.position.k, a.position.A)*10000)/10000;
						
						//console.log(a_A);
						//console.log(a_k);
						//console.log(a_distance);
						//var b_A	=	Math.abs(myPosition.A-b.position.A);
						//var b_k	=	Math.abs(myPosition.k-b.position.k);
						var b_A	=	Math.abs(Math.round(myPosition.A-b.position.A*1000000)/1000000);
						var b_k	=	Math.abs(Math.round(myPosition.k-b.position.k*1000000)/1000000);
						//var b_distance=Math.pow(b_A, b_A) + Math.pow(b_k, b_k);
						//b.distance=Math.sqrt(b_distance);
						b.distance_m=
							Math.round(getDistanceFromLatLonInKm(myPosition.k, myPosition.A,
													 b.position.k, b.position.A)*10000)/10000;
						//console.log(b_A);
						return a.distance_m-b.distance_m
						});
					
					searchResultInjection();
				}<%-- markersSorting Distance End --%>
				
		
				<%-- ‘Haversine’ formula Start--%>
				function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
					  var R = 6371; // Radius of the earth in km
					  var dLat = deg2rad(lat2-lat1);  // deg2rad below
					  var dLon = deg2rad(lon2-lon1); 
					  var a = 
					    Math.sin(dLat/2) * Math.sin(dLat/2) +
					    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
					    Math.sin(dLon/2) * Math.sin(dLon/2)
					    ; 
					  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
					  var d = R * c; // Distance in km
					  return d;
					}
				function deg2rad(deg) {
				  return deg * (Math.PI/180)
				}
				<%-- ‘Haversine’ formula End--%>
				
				
				
				<%-- markersSorting Price Start--%>
				function markersSortingPrice(){
					/* console.log("markersSorting Price In"); */
					markersSearchResult.sort(function(a, b){
						/* console.log("markersSearchResult.sort.Price call"); */
						var a_A	=	Math.abs(Math.round(myPosition.A-a.position.A*1000000)/1000000);
						var a_k	=	Math.abs(Math.round(myPosition.k-a.position.k*1000000)/1000000);
						//var a_distance=Math.pow(a_A, a_A) + Math.pow(a_k, a_k);
						//a.distance=Math.sqrt(a_distance);
						a.distance_m=
							Math.round(getDistanceFromLatLonInKm(myPosition.k, myPosition.A,
									 					a.position.k, a.position.A)*10000)/10000;
						
						return a.price-b.price
						});
					//sorting check용 for문, 사용시 주석처리해야함.
					/*
					for(var i=0;i<markersSearchResult.length;i++){
						console.log("markersSearchResult__"+i+"price__"+markersSearchResult[i].price);
					}
					*/
					searchResultInjection();
				}<%--  markersSorting Price End --%>
		
				
				var searchResultInjectionHtml;
				function searchResultInjection(){
					//sorting check용 for문, 사용시 주석처리해야함.
					searchResultInjectionHtml=null;
					
					if(markersSearchResult.length>1){
						if(markersSearchResult[0].distance_m < 1.0){
							markersSearchResult[0].distance_m=Math.round(markersSearchResult[0].distance_m*100)/100+"(m)";
						}else{
							markersSearchResult[0].distance_m=Math.round(markersSearchResult[0].distance_m *10)/10+"(km)";
						}
						searchResultInjectionHtml=
							"<tr>"+
								"<td id=\"t1\" >" + markersSearchResult[0].distance_m + "</td>" +
								"<td id=\"t2\" >" + markersSearchResult[0].price/10000.0 + "</td>" +
								"<td id=\"t3\" ><a onclick=\"modalInjection(markersSearchResult["+0+"])\"> " +
								//"<td><a onclick=\"alert('test')\"> " + 
										markersSearchResult[0].title+ "<span>클릭하시면 상세정보를 볼수 있습니다.</span></a></td>" +
							"</tr>";
					}
					//searchResultInjectionHtml="<tbody>";
					for(var i=1;i<markersSearchResult.length;i++){
						
						
						if(markersSearchResult[i].distance_m < 1.0){
							markersSearchResult[i].distance_m=Math.round(markersSearchResult[i].distance_m*100)/100+"(m)";
						}else{
							markersSearchResult[i].distance_m=Math.round(markersSearchResult[i].distance_m *10)/10+"(km)";
						}	
						//console.log("markersSearchResult"+i+"distance_m"+markersSearchResult[i].distance_m);
						//뉴텔
						searchResultInjectionHtml+=
							"<tr>"+
								"<td id=\"t1\" >" + markersSearchResult[i].distance_m + "</td>" +
								"<td id=\"t2\" >" + markersSearchResult[i].price/10000.0 + "</td>" +
								"<td id=\"t3\" ><a onclick=\"modalInjection(markersSearchResult["+i+"])\"> " +
								//"<td><a onclick=\"alert('test')\"> " + 
										markersSearchResult[i].title+ "<span>클릭하시면 상세정보를 볼수 있습니다.</span></a></td>" +
							"</tr>";
					}
					//searchResultInjectionHtml+="</tbody>";
					document.getElementById("searchResultInjectionSector").innerHTML =searchResultInjectionHtml;
					
					/*
					<tr>
						<td>222</td>
						<td>333</td>
						<td><a>아이패드 에어 가나다라 마바사 아자 차</a></td>
					</tr>
					*/	
				
				}
				google.maps.event.addDomListener(window, 'load', initialize);
			</script>
			
			
			
<!--
		
		
		
		
				
	---------------------------------------------------------------------
								 THE END !      
			
			
							Mr.JaeYoung 코드 종료 지점
	
	
								 THE END ! 
	---------------------------------------------------------------------
	
	
	
	
	
	-->	
	
	
	
	
	
	
	
	
	
	
	
	
	<!--
	
	
	
	
				
	---------------------------------------------------------------------
								S T A R T!      
			
			
				Mr.MinSeok 코드 시작 지점, 종료지점까지 수정하시면 안됩니다!
	
	
								S T A R T!
	---------------------------------------------------------------------
	
	
	
	
	
	-->	

			<script>
			//로그인 메뉴 
			$(function() {
			  // Setup drop down menu
			  $('.dropdown-toggle').dropdown();
			 
			  // Fix input element click problem
			  $('.dropdown input, .dropdown label').click(function(e) {
			    e.stopPropagation();
			  });
			});
		
			//셀렉트
			
			var f_selbox = new Array('의류', '수입명품', '패션잡화' , '미용',
									'출산/육아', '모바일', '컴퓨터' , '카메라',
									'영상기기', '음악/음향/악기', '게임용품' , '스포츠/취미',
									'여행', '생활용품', '가구' , '예술/미술', '도서관련');
			var s_selbox = new Array();
			s_selbox[0] = new Array('캐쥬얼상의', '캐쥬얼하의', '여성상의', '여성하의', '남성상의', '남성하의','파티/잠옷/작업복');
			s_selbox[1] = new Array('루이비통', '샤넬', '버버리/마크제이콥스', '불가리/까르띠에', '구찌/프라다', '디올/입생로랑', '에르메스/콜롬보', '발리/에트로/페라가모','기타 수입명품');
			s_selbox[2] = new Array('여성신발', '남성신발', '가방/모자/장갑', '지갑/벨트/시계', '안경/선글라스', '쥬얼리/악세사리', '기타 패션잡화');
			s_selbox[3] = new Array('여성 기초화장품', '여성 색조화장품', '남성화장품', '향수/아로마', '헤어/바디케', '요가/운동용품','기타 미용');
			s_selbox[4] = new Array('출산/임부용품', '유아/아동의류', '유아/아동용품', '인형/장난감', '유아책/교육');
			s_selbox[5] = new Array('SKT', 'KT', 'LGU+','기타통신사/피처폰','주변기기/악세사리');
			s_selbox[6] = new Array('노트북/넷북', '태블릿PC', '데스크탑/본체', '모니터', 'CPU/메인보드/HDD','메모리/VGA/ODD','케이스/키보드마우스','복합기/프린터','USB/케이블/스피커','허브/무선랜/공유기','잉크/토너/공CD','PC게임/소프트웨어','기타 제품/PC파워');
			s_selbox[7] = new Array('DSLR', '미러리스', '일반디카/하이엔드', '필름/중형카메라', '렌즈/필터/컨버터', '삼각대/플래시/조명','메모리/배터리/가방','기타 카메라악세사리');
			s_selbox[8] = new Array('디지털TV', 'DVD/VCR', 'PMP/DMB', '셋톱박스/프로젝터', '디지털 캠코더','편집기기/소프트웨어','기타 영상관련제품');
			s_selbox[9] = new Array('MP3/CDP', '오디오/홈시어터', '헤드폰/스피커/앰프', '기타 음향기기', 'LP/CD/DVD 음반','건반악기','관악기','현악기','타악기');
			s_selbox[10] = new Array('NDSL/WII/닌텐도', 'PSP/PS2/PS3/PS4', 'XBOX360', '게임소프트웨어', '기타 게임용품');
			s_selbox[11] = new Array('축구용품/의류', '야구용품/의류', '농구용품/의류', 'MTB사이클 용품의류', '미니벨로/일반자전거', '인라인/스케이트보드','스키/보드/의류','골프용품/의류','헬스/수영/용품/의류','피규어/프라모델/브릭','기타스포츠/레저용품');
			s_selbox[12] = new Array('등산용품/의류', '캠핑용품/장비', '낚시용품/의류','숙박권/시설 이용권');
			s_selbox[13] = new Array('사무용품 복사기팩스', '대형가전(TV,냉장고,세탁기,에어컨 등)', '소형가전(밥솥,다리미,가습기,면도기 등)', '침구/커튼/패브릭', '욕실용품/주방용품','전자사전/MC스퀘어','상품권/판매가능티켓', '반려동물 용품', 'DIY/리폼 용품,공구','학습도구/문구','기타 중고');
			s_selbox[14] = new Array('침실(침대/화장대)', '거실(쇼파/테이블)', '주방(식탁/수납장)', '사무용(책상/서랍)','인테리어소품');
			s_selbox[15] = new Array('서양/동양/현대작품', '미술재료/물감/마카', '미술용품도구','골동품/기타수집');
			s_selbox[16] = new Array('학습/사전/참고서', '문학/과학/경영', '월간/계간/잡지', '여행/취미/레저', '예술/디자인도서','컴퓨터/인터넷도서','아동/어린이도서','소설/만화책','전집');
		
		
			function init(f){
				var f_sel = f.category1;
				var s_sel = f.category2;
		
				f_sel.options[0] = new Option("대분류 선택", "");
				s_sel.options[0] = new Option("소분류 선택", "");
		
				for(var i =0; i<f_selbox.length; i++){
					f_sel.options[i+1] = new Option(f_selbox[i], i);
				}
			}
		
			function itemChange(f){
				var f_sel = f.category1;
				var s_sel = f.category2;
		
				var sel = f_sel.selectedIndex;
				for(var i=s_sel.length; i>=0; i--){
					s_sel.options[i] = null;
				}
		
				s_sel.options[0] = new Option("소분류 선택", "");
		
				if(sel != 0){
					for(var i=0; i<s_selbox[sel-1].length; i++){
						s_sel.options[i+1] = new Option(s_selbox[sel-1][i],i);
					}
				}
			}
			
			(function($) {
		
			    jQuery.fn.extend({
			        slimScroll: function(o) {
		
			            var ops = o;
			            //do it for every element that matches selector
			            this.each(function(){
		
			            var isOverPanel, isOverBar, isDragg, queueHide, barHeight,
			                divS = '<div></div>',
			                minBarHeight = 30,
			                wheelStep = 30,
			                o = ops || {},
			                cwidth = o.width || 'auto',
			                cheight = o.height || '250px',
			                size = o.size || '7px',
			                color = o.color || '#000',
			                position = o.position || 'right',
			                opacity = o.opacity || .4,
			                alwaysVisible = o.alwaysVisible === true;
			            
			                //used in event handlers and for better minification
			                var me = $(this);
		
			                //wrap content
			                var wrapper = $(divS).css({
			                    position: 'relative',
			                    overflow: 'hidden',
			                    width: cwidth,
			                    height: cheight
			                }).attr({ 'class': 'slimScrollDiv' });
		
			                //update style for the div
			                me.css({
			                    overflow: 'hidden',
			                    width: cwidth,
			                    height: cheight
			                });
		
			                //create scrollbar rail
			                var rail  = $(divS).css({
			                    width: '15px',
			                    height: '100%',
			                    position: 'absolute',
			                    top: 0
			                });
		
			                //create scrollbar
			                var bar = $(divS).attr({ 
			                    'class': 'slimScrollBar ', 
			                    style: 'border-radius: ' + size 
			                    }).css({
			                        background: color,
			                        width: size,
			                        position: 'absolute',
			                        top: 0,
			                        opacity: opacity,
			                        display: alwaysVisible ? 'block' : 'none',
			                        BorderRadius: size,
			                        MozBorderRadius: size,
			                        WebkitBorderRadius: size,
			                        zIndex: 99
			                });
		
			                //set position
			                var posCss = (position == 'right') ? { right: '1px' } : { left: '1px' };
			                rail.css(posCss);
			                bar.css(posCss);
		
			                //wrap it
			                me.wrap(wrapper);
		
			                //append to parent div
			                me.parent().append(bar);
			                me.parent().append(rail);
		
			                //make it draggable
			                bar.draggable({ 
			                    axis: 'y', 
			                    containment: 'parent',
			                    start: function() { isDragg = true; },
			                    stop: function() { isDragg = false; hideBar(); },
			                    drag: function(e) 
			                    { 
			                        //scroll content
			                        scrollContent(0, $(this).position().top, false);
			                    }
			                });
		
			                //on rail over
			                rail.hover(function(){
			                    showBar();
			                }, function(){
			                    hideBar();
			                });
		
			                //on bar over
			                bar.hover(function(){
			                    isOverBar = true;
			                }, function(){
			                    isOverBar = false;
			                });
		
			                //show on parent mouseover
			                me.hover(function(){
			                    isOverPanel = true;
			                    showBar();
			                    hideBar();
			                }, function(){
			                    isOverPanel = false;
			                    hideBar();
			                });
		
			                var _onWheel = function(e)
			                {
			                    //use mouse wheel only when mouse is over
			                    if (!isOverPanel) { return; }
		
			                    var e = e || window.event;
		
			                    var delta = 0;
			                    if (e.wheelDelta) { delta = -e.wheelDelta/120; }
			                    if (e.detail) { delta = e.detail / 3; }
		
			                    //scroll content
			                    scrollContent(0, delta, true);
		
			                    //stop window scroll
			                    if (e.preventDefault) { e.preventDefault(); }
			                    e.returnValue = false;
			                }
		
			                var scrollContent = function(x, y, isWheel)
			                {
			                    var delta = y;
		
			                    if (isWheel)
			                    {
			                        //move bar with mouse wheel
			                        delta = bar.position().top + y * wheelStep;
		
			                        //move bar, make sure it doesn't go out
			                        delta = Math.max(delta, 0);
			                        var maxTop = me.outerHeight() - bar.outerHeight();
			                        delta = Math.min(delta, maxTop);
		
			                        //scroll the scrollbar
			                        bar.css({ top: delta + 'px' });
			                    }
		
			                    //calculate actual scroll amount
			                    percentScroll = parseInt(bar.position().top) / (me.outerHeight() - bar.outerHeight());
			                    delta = percentScroll * (me[0].scrollHeight - me.outerHeight());
		
			                    //scroll content
			                    me.scrollTop(delta);
		
			                    //ensure bar is visible
			                    showBar();
			                }
		
			                var attachWheel = function()
			                {
			                    if (window.addEventListener)
			                    {
			                        this.addEventListener('DOMMouseScroll', _onWheel, false );
			                        this.addEventListener('mousewheel', _onWheel, false );
			                    } 
			                    else
			                    {
			                        document.attachEvent("onmousewheel", _onWheel)
			                    }
			                }
		
			                //attach scroll events
			                attachWheel();
		
			                var getBarHeight = function()
			                {
			                    //calculate scrollbar height and make sure it is not too small
			                    barHeight = Math.max((me.outerHeight() / me[0].scrollHeight) * me.outerHeight(), minBarHeight);
			                    bar.css({ height: barHeight + 'px' });
			                }
		
			                //set up initial height
			                getBarHeight();
		
			                var showBar = function()
			                {
			                    //recalculate bar height
			                    getBarHeight();
			                    clearTimeout(queueHide);
			                    
			                    //show only when required
			                    if(barHeight >= me.outerHeight()) {
			                        return;
			                    }
			                    bar.fadeIn('fast');
			                }
		
			                var hideBar = function()
			                {
			                    //only hide when options allow it
			                    if (!alwaysVisible)
			                    {
			                        queueHide = setTimeout(function(){
			                            if (!isOverBar && !isDragg) { bar.fadeOut('slow'); }
			                        }, 1000);
			                    }
			                }
		
			            });
			            
			            //maintain chainability
			            return this;
			        }
			    });
		
			    jQuery.fn.extend({
			        slimscroll: jQuery.fn.slimScroll
			    });
		
			})(jQuery);
		
		
			//invalid name call
			              $('#chatlist').slimscroll({
			                  color: '#00f',
			                  size: '10px',
			                  width: '50px',
			                  height: '150px'                  
			              });
			
		   </script>
			
		
			
			<!--
				
				
				
				
						
			---------------------------------------------------------------------
										 THE END !      
					
					
									Mr.MinSeok 코드 종료 지점
			
			
										 THE END ! 
			---------------------------------------------------------------------
			
			
			
			
			
			-->				
</head>
<!-- 
	onLoad=initialize 쓰지마세요. 직접 dom객체에 추가했어요.
 	onload에 추가하면 2번 되서 성능 저하됩니다~~~~~~ 
 -->
<body class="cbp-spmenu-push" data-twttr-rendered="true" onload="init(this.registerform);">
<!----------------------------------------------------------- -->


	<center><%@include file="../common/header.jsp"%></center>

<!----------------------------------------------------------- -->
	
 
 
 
   
	
	<table>
		<center>
			<div id="my-box">
				
							<br/>
							<br/>
							<article class='map_text'>
								<p>
									  &nbsp;아래의 맵에서 비콘이 설치된 맛집을 확인할 수 있습니다.
								</p>
							</article>		
			</div>
		</center>
	</table>
	
	<div id="map_canvas" style="width:80%; height:95%;"></div>
	<br/>
	<br/>
	
	<!--  임시로 푸터를 주석처리 -->
	<!-- <footer id="footer">

		<!-- preview modal -->
		<div class="modal fade" id="preview_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		  <div class="modal-dialog">
		    <div class="modal-content">
		      <div class="modal-header">
		        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
		        <h4 class="modal-title">제품명<font color="red"> [가격]</font></h4>
		       
		      </div>
		      <div class="modal-body">
		        <div id="imgslider_container">
	    		
				  <!-- main slider carousel -->
				  <div class="row-fluid">
				    <div class="span12" id="slider">
				      <div class="row-fluid">
				        <div class="span8" id="carousel-bounding-box">
				          <div id="myCarousel" class="carousel slide">
				            
				            <!-- main slider carousel items -->
				            <div class="carousel-inner">
				              <div class="active item" data-slide-number="0">
				                <img src="http://placehold.it/640x480&amp;text=one">
				              </div>
				              <div class="item" data-slide-number="1">
				                <img src="http://placehold.it/640x480&amp;text=two">
				              </div>
				              <div class="item" data-slide-number="2">
				                <img src="http://placehold.it/640x480&amp;text=three">
				              </div>
				              <div class="item" data-slide-number="3">
				                <img src="http://placehold.it/640x480&amp;text=four">
				              </div>
				               
				            </div>
				            
				            <!-- main slider carousel nav controls -->
				            <a class="carousel-control left" href="#myCarousel" data-slide="prev">‹</a>
				            <a class="carousel-control right" href="#myCarousel" data-slide="next">›</a>
				          </div>
				        </div>
				        
				       
				      </div>
				      
				    </div>
				  </div> <!--/main slider carousel-->
				</div><!-- end of image slider -->
				<br>
				<p>상세 내용</p>
				
		      </div>
		      <div class="modal-footer">
		      	<input type="submit" class="btn btn-primary" value="등록하기" >		
		        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
		       	
		      </div>
		    </div><!-- /.modal-content -->
		  </div><!-- /.modal-dialog -->
		</div><!-- /.modal -->
		<!--삭제 팝업창  -->
		<div class="modal fade" id="deletepopup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="z-index: 1060;">
		  <div class="modal-dialog" style="width: 400px;text-align: center;margin-top: 200px;margin-bottom: 200px;">
		    <div class="modal-content">
		   
		      <div class="modal-body">
		        <p>삭제 하시겠습니까?</p>
		        <button type="button" class="btn btn-default" data-dismiss="modal">취소</button>
		        <button type="button" class="btn btn-danger">삭제</button>
		      </div>
		    </div><!-- /.modal-content -->
		  </div><!-- /.modal-dialog -->
		</div><!-- /.modal -->
		
		<!-- footer부분에 modal용 div넣습니다. 레이아웃과 상관없으니 삭제하지 마세요 -->
			<%-- modal Injection 공간 --%>
			<div id="htmlInjectionSector" class="htmlInjectionSector" title="htmlInjectionSector">
			</div>												 
		<!-- footer부분에 modal용 div넣습니다. 레이아웃과 상관없으니 삭제하지 마세요 -->

		 
		 
		 
	</footer>
</body>
</html>

<%-- 속도향상을 위해 맨 아래로 내림. --%>
<script>

 function modalInjection(marker){
	  
	  console.log(marker.itemNo);
  	  //var userNo='${user.userNo}';
  	  var htmlinjec;
	  new function makeHtml(){
			htmlinjec=
			"<div id=\"item"+marker.itemNo+"\" class=\"item"+marker.itemNo+" modal fade\" title=\""+marker.title+"\"  tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">"+
				"<div id=\"injection-modal\"class=\"modal-dialog\">"+
					"<div class=\"modal-Content\">"+
						"<div class=\"modal-header\">"+
						"<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>"+
				        "<h4 class=\"modal-title\">"+marker.title+"<font color=\"red\"></font></h4>"+
				       
						"</div>"+
						"<div class=\"modal-body\">"+
						
					    "<div id=\"imgslider_container_view\">"+
						  "<div class=\"row-fluid\">"+
						    "<div class=\"span12\" id=\"slider\">"+
						      "<div class=\"row-fluid\">"+
						        "<div class=\"span8\" id=\"carousel-bounding-box\">"+
						          "<div id=\"myCarousel_view\" class=\"carousel slide\">"+
						            /* main slider carousel items */
						            "<div class=\"carousel-inner\">"+
						              "<div class=\"active item\" data-slide-number=\"0\">"+
						                "<img  src = \"http://imageserver.iisweb.kr/teamdwf/"+marker.itemPicturePath1+"\" style=\"width: 640px; height:480;\">"+
						              "</div>"+
						              "<div class=\"item\" data-slide-number=\"1\">"+
						              	"<img  src = \"http://imageserver.iisweb.kr/teamdwf/"+marker.itemPicturePath2+"\" style=\"width: 640px; height:480;\">"+
					                  "</div>"+
						              "<div class=\"item\" data-slide-number=\"2\">"+
						                "<img  src = \"http://imageserver.iisweb.kr/teamdwf/"+marker.itemPicturePath3+"\" style=\"width: 640px; height:480;\">"+
						              "</div>"+						            
						             	
						              
						            "</div>"+
						            
						            /* main slider carousel nav controls */
						            "<a class=\"carousel-control left\" href=\"#myCarousel_view\" data-slide=\"prev\">‹</a>"+
						            "<a class=\"carousel-control right\" href=\"#myCarousel_view\" data-slide=\"next\">›</a>"+
						         "</div>"+
						       "</div>"+
						        
						       
						     "</div>"+
						      
						   "</div>"+
						 "</div>"+ /* main slider carousel */
					"</div>"+/* end of image slider */
							
							
							<%-- ItemInfo 들어가는 공간 --%>
							"<br><div id=\"itemInfo\">"+
								marker.itemInfo+
							"</div>"+
							
						"</div>"+
						"<div class=\"modal-footer\">"+
						"</div>"+ 
						"<div class=\"modal-footer\">";
						
						//if(userNo==marker.userNo){
						//	htmlinjec+=
						//	"<button type=\"button\" class=\"btn btn-primary\" >수정</button>"+
						//	"<button class=\"btn btn-primary\" data-toggle=\"modal\" href=\"#deletepopup\" onclick=\"return false\">삭제</button>";						
						//	}
						
						htmlinjec+=
						//"<button type=\"button\" class=\"btn btn-danger\" >찜</button>"+
						"<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>"+
						"</div>"+
					"</div>"+	
				"</div>"+
			"</div>"+
			"<a data-toggle=\"modal\" href=\"#item"+marker.itemNo+"\" id=\"modallink\"></a>";
		};
		document.getElementById("htmlInjectionSector").innerHTML = htmlinjec;
		document.getElementById("modallink").click();
 }
		

 </script>
 
<!--  
<script>

 function modalInjection(marker){
	  
	  console.log(marker.itemNo);
  	  //var userNo='${user.userNo}';
  	  var htmlinjec;
	  new function makeHtml(){
			htmlinjec=
			"<div id=\"item"+marker.itemNo+"\" class=\"item"+marker.itemNo+" modal fade\" title=\""+marker.title+"\"  tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">"+
				"<div id=\"injection-modal\"class=\"modal-dialog\">"+
					"<div class=\"modal-Content\">"+
						"<div class=\"modal-header\">"+
						"<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>"+
				        "<h4 class=\"modal-title\">"+marker.title+"<font color=\"red\"></font></h4>"+
				       
						"</div>"+
						"<div class=\"modal-body\">"+
						
					    "<div id=\"imgslider_container_view\">"+
						  "<div class=\"row-fluid\">"+
						    "<div class=\"span12\" id=\"slider\">"+
						      "<div class=\"row-fluid\">"+
						        "<div class=\"span8\" id=\"carousel-bounding-box\">"+
						          "<div id=\"myCarousel_view\" class=\"carousel slide\">"+
						            /* main slider carousel items */
						            "<div class=\"carousel-inner\">"+
						              "<div class=\"active item\" data-slide-number=\"0\">"+
						                "<img  src = \"../resources/img/"+marker.itemPicturePath1+"\" style=\"width: 640px; height:480;\">"+
						              "</div>"+
						              "<div class=\"item\" data-slide-number=\"1\">"+
						              	"<img  src = \"../resources/img/"+marker.itemPicturePath2+"\" style=\"width: 640px; height:480;\">"+
					                  "</div>"+
						              "<div class=\"item\" data-slide-number=\"2\">"+
						                "<img  src = \"../resources/img/"+marker.itemPicturePath3+"\" style=\"width: 640px; height:480;\">"+
						              "</div>"+						            
						             	
						              
						            "</div>"+
						            
						            /* main slider carousel nav controls */
						            "<a class=\"carousel-control left\" href=\"#myCarousel_view\" data-slide=\"prev\">‹</a>"+
						            "<a class=\"carousel-control right\" href=\"#myCarousel_view\" data-slide=\"next\">›</a>"+
						         "</div>"+
						       "</div>"+
						        
						       
						     "</div>"+
						      
						   "</div>"+
						 "</div>"+ /* main slider carousel */
					"</div>"+/* end of image slider */
							
							
							<%-- ItemInfo 들어가는 공간 --%>
							"<br><div id=\"itemInfo\">"+
								marker.itemInfo+
							"</div>"+
							
						"</div>"+
						"<div class=\"modal-footer\">"+
						"</div>"+ 
						"<div class=\"modal-footer\">";
						
						//if(userNo==marker.userNo){
						//	htmlinjec+=
						//	"<button type=\"button\" class=\"btn btn-primary\" >수정</button>"+
						//	"<button class=\"btn btn-primary\" data-toggle=\"modal\" href=\"#deletepopup\" onclick=\"return false\">삭제</button>";						
						//	}
						
						htmlinjec+=
						//"<button type=\"button\" class=\"btn btn-danger\" >찜</button>"+
						"<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>"+
						"</div>"+
					"</div>"+	
				"</div>"+
			"</div>"+
			"<a data-toggle=\"modal\" href=\"#item"+marker.itemNo+"\" id=\"modallink\"></a>";
		};
		document.getElementById("htmlInjectionSector").innerHTML = htmlinjec;
		document.getElementById("modallink").click();
 }
		

</script>
-->

<center><%@include file="../common/footer.jsp"%></center>
