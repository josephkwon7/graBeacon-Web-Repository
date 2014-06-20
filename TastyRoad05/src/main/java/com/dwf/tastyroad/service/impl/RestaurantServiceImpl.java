package com.dwf.tastyroad.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.dwf.tastyroad.model.Restaurant;
import com.dwf.tastyroad.model.Search;
import com.dwf.tastyroad.service.RestaurantDao;
import com.dwf.tastyroad.service.RestaurantService;

@Service
public class RestaurantServiceImpl implements RestaurantService {

	///Field
	@Autowired
	@Qualifier("restaurantDaoImpl")
	private RestaurantDao restaurantDao;
	
	///Constructor
	public RestaurantServiceImpl() {
		System.out.println("::"+this.getClass()+" Default Constructor Call");
	}
	
	///Method
	public void setRestaurantDao(RestaurantDao restaurantDao){
		System.out.println("::"+this.getClass()+".setRestaurantDao() Call");
		this.restaurantDao = restaurantDao;
	}

	@Override
	public int addRestaurant(Restaurant restaurant) throws Exception {
		return restaurantDao.addRestaurant(restaurant);
	}

	@Override
	public Restaurant findRestaurant(Restaurant restaurant) throws Exception{
		return restaurantDao.findRestaurant(restaurant);
	}
	
	@Override
	public Restaurant getRestaurant(int restaurantId) throws Exception {
		return restaurantDao.getRestaurant(restaurantId);
	}

	@Override
	public int updateRestaurant(Restaurant restaurant) throws Exception {
		return restaurantDao.updataRestaurant(restaurant);
	}

	@Override
	public int removeRestaurant(int restaurantId) throws Exception {
		return restaurantDao.removeRestaurant(restaurantId);
	}

	@Override
	public List<Restaurant> getRestaurantList(Search search) throws Exception {
		return restaurantDao.getRestaurantList(search);
	}

	@Override
	public int getTotalCount(Search search) throws Exception {
		return restaurantDao.getTotalCount(search);
	}

}
