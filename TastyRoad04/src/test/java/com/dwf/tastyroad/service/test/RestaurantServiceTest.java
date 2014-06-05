package com.dwf.tastyroad.service.test;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.dwf.tastyroad.model.Restaurant;
import com.dwf.tastyroad.service.RestaurantDao;
import com.dwf.tastyroad.service.RestaurantService;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:config/commonservice.xml"})
public class RestaurantServiceTest {
	
	@Autowired
	@Qualifier("restaurantServiceImpl")
	private RestaurantService restaurantService;

	//Restaurant의 ID값을 한번 추출후 계속 사용하기 위해 만든 필드
	static int resId;
	
	@Test
	public void testAddRestaurant() throws Exception {
		System.out.println("\n===================================");
		Restaurant restaurant = new Restaurant("빵빵맛집", "http://100.100.100.100:8080/tastyroad/hoho.png");
		System.out.println(restaurant);
		int result = restaurantService.addRestaurant(restaurant);
		System.out.println("insert 결과 : "+ result);
		Assert.assertEquals(1, result);
		System.out.println("===================================\n");
		
	}
	
	@Test
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
	
	@Test
	public void testGetRestaurant() throws Exception {
		System.out.println("\n===================================");
		Restaurant result = restaurantService.getRestaurant(this.resId);
		System.out.println("ResId :" + resId);
		System.out.println("get 결과 : "+ result);
		Assert.assertNotNull(result);
		System.out.println("===================================\n");
	}
	
	@Test
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
	
	@Test
	public void testDeleteRestaurant() throws Exception {
		System.out.println("\n===================================");
		int result = restaurantService.removeRestaurant(resId);
		System.out.println("delete 결과 : "+ result);
		Assert.assertEquals(1, result);
		System.out.println("===================================\n");
	}
	
}
