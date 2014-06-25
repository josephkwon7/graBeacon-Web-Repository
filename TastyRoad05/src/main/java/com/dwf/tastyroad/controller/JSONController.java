package com.dwf.tastyroad.controller;

import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dwf.tastyroad.model.Beacon;
import com.dwf.tastyroad.model.Restaurant;
import com.dwf.tastyroad.service.BeaconService;
import com.dwf.tastyroad.service.RestaurantService;


	/*기존코드 주석처리. by 정준호.*/
////URI /beacon으로 들어오는 요청 처리
////@Controller
////@RequestMapping("/beacon")
//public class JSONController {
//	
//	//beaconServiceImpl을 beaconService에 Wiring(DI:dependancy injection)
//	@Autowired
//	@Qualifier("beaconServiceImpl")
//	private BeaconService beaconService;
//	
//	//restaurantServiceImpl을 restaurantService에 Wiring(DI:dependancy injection)
//	@Autowired
//	@Qualifier("restaurantServiceImpl")
//	private RestaurantService restaurantService;
//
//	public JSONController() {
//		System.out.println("::" +getClass()+ " Default Constructor Call");
//	}
//	
//	//http://192.168.200.27:8080/tastyroad/beacon/d5756247-57a2-4344-915d-9599497940a7/11/0
//	@RequestMapping(value = "/{uuid}/{major}/{minor}", method = RequestMethod.GET)
//	public @ResponseBody
//	Restaurant getRestaurantInJSON(@PathVariable String uuid, @PathVariable int major, @PathVariable int minor) throws Exception {
//		
//		Beacon beacon = new Beacon(uuid, major, minor);
//
//		return restaurantService.getRestaurant(beaconService.findBeacon(beacon).getResId());
//
//	}
	/*기존코드 주석처리 끝.*/
	

	/*새로 추가된 코드. by 정준호.	*/
	//URI /json으로 들어오는 요청 처리
	@Controller
	@RequestMapping("/json")
	public class JSONController {
		
		//beaconServiceImpl을 beaconService에 Wiring(DI:dependancy injection)
		@Autowired
		@Qualifier("beaconServiceImpl")
		private BeaconService beaconService;
		
		//restaurantServiceImpl을 restaurantService에 Wiring(DI:dependancy injection)
		@Autowired
		@Qualifier("restaurantServiceImpl")
		private RestaurantService restaurantService;

		public JSONController() {
			System.out.println("::" +getClass()+ " Default Constructor Call");
		}
		
		//http://192.168.200.27:8080/tastyroad/beacon/d5756247-57a2-4344-915d-9599497940a7/11/0
		@RequestMapping(value = "/{uuid}/{major}/{minor}", method = RequestMethod.GET)
		public String getRestaurantInJSON(@PathVariable String uuid, @PathVariable int major, @PathVariable int minor,Model model) throws Exception {
			
			Beacon beacon = new Beacon(uuid, major, minor);
			
			model.addAttribute(restaurantService.getRestaurant(beaconService.findBeacon(beacon).getResId()));
			return "jsonViews/jsonList";

		}
		/*새로 추가된 코드 끝. */
}