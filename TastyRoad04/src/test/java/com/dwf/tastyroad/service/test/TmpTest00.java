package com.dwf.tastyroad.service.test;

import junit.framework.Assert;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.dwf.tastyroad.model.Beacon;
import com.dwf.tastyroad.model.Restaurant;
import com.dwf.tastyroad.service.BeaconService;
import com.dwf.tastyroad.service.OwnerService;
import com.dwf.tastyroad.service.RestaurantService;

//데이터를 적재하기 위해 만든 테스트 클래스 - YH
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:config/commonservice.xml"})
public class TmpTest00 {

	@Autowired
	@Qualifier("beaconServiceImpl")
	private BeaconService beaconService;

	@Autowired
	@Qualifier("restaurantServiceImpl")
	private RestaurantService restaurantService;
	
	@Autowired
	@Qualifier("ownerServiceImpl")
	private OwnerService ownerService;
	
	static int beaconId;
	static int resId;
	static int ownerId;
	
	//@Test
	public void testAddBeacon() throws Exception {
		System.out.println("\n===================================");
		Beacon beacon = new Beacon("d5756247-57a2-4344-915d-9599497940a0", 11, 0, 1020);
		int result = beaconService.addBeacon(beacon);
		System.out.println("insert 결과 : "+ result);
		Assert.assertEquals(1, result);
		System.out.println("===================================\n");
	}
	
	@Test
	public void testFindBeacon() throws Exception {
		System.out.println("\n===================================");
		Beacon beacon = new Beacon("d5756247-57a2-4344-915d-9599497940a7", 22, 0);
		System.out.println(beacon);
		Beacon result = beaconService.findBeacon(beacon);
		System.out.println("find 결과 : "+ result);
		Assert.assertNotNull(result);
		System.out.println("===================================\n");
		this.beaconId = result.getBeaconId();
	}
	
	//@Test
	public void testGetBeacon() throws Exception {
		System.out.println("\n===================================");
		Beacon result = beaconService.getBeacon(this.beaconId);
		System.out.println("BeaconId :" + beaconId);
		System.out.println("get 결과 : "+ result);
		Assert.assertNotNull(result);
		System.out.println("===================================\n");
	}
	
	//@Test
	public void testUpdateBeacon() throws Exception {
		System.out.println("\n===================================");
		Beacon beacon = new Beacon("d5756247-57a2-4344-915d-9599497940a0", 11, 11);
		beacon.setBeaconId(beaconId);
		System.out.println(beacon);
		int result = beaconService.updateBeacon(beacon);
		System.out.println("update 결과 : "+ result);
		Assert.assertEquals(1, result);
		System.out.println("===================================\n");
	}
	
	//@Test
	public void testDeleteBeacon() throws Exception {
		System.out.println("\n===================================");
		int result = beaconService.removeBeacon(beaconId);
		System.out.println("delete 결과 : "+ result);
		Assert.assertEquals(1, result);
		System.out.println("===================================\n");
	}
	
	//////////////////////////////////////////////////////////////////
	/////RES
	
	//@Test
	public void testAddRestaurant() throws Exception {
		System.out.println("\n===================================");
		Restaurant restaurant = new Restaurant("빵빵맛집", "http://100.100.100.100:8080/tastyroad/hoho.png");
		System.out.println(restaurant);
		int result = restaurantService.addRestaurant(restaurant);
		System.out.println("insert 결과 : "+ result);
		Assert.assertEquals(1, result);
		System.out.println("===================================\n");
		
	}
	
	//@Test
	public void testFindRestaurant() throws Exception {
		System.out.println("\n===================================");
		Restaurant restaurant = new Restaurant("빵빵맛집", "http://100.100.100.100:8080/tastyroad/hoho.png");
		System.out.println(restaurant);
		Restaurant result = restaurantService.findRestaurant(restaurant);
		System.out.println("find 결과 : "+ result);
		Assert.assertNotNull(result);
		System.out.println("===================================\n");
		this.resId = result.getResId();
	}
	
	//@Test
	public void testGetRestaurant() throws Exception {
		System.out.println("\n===================================");
		Restaurant result = restaurantService.getRestaurant(this.resId);
		System.out.println("ResId :" + resId);
		System.out.println("get 결과 : "+ result);
		Assert.assertNotNull(result);
		System.out.println("===================================\n");
	}
	
	//@Test
	public void testUpdateRestaurant() throws Exception {
		System.out.println("\n===================================");
		Restaurant restaurant = new Restaurant("뿅뿅맛집", "http://100.100.100.100:8080/tastyroad/hoho.png");
		restaurant.setResId(resId);
		System.out.println(restaurant);
		int result = restaurantService.updateRestaurant(restaurant);
		System.out.println("update 결과 : "+ result);
		Assert.assertEquals(1, result);
		System.out.println("===================================\n");
	}
	
	//@Test
	public void testDeleteRestaurant() throws Exception {
		System.out.println("\n===================================");
		int result = restaurantService.removeRestaurant(resId);
		System.out.println("delete 결과 : "+ result);
		Assert.assertEquals(1, result);
		System.out.println("===================================\n");
	}
}
