package com.dwf.tastyroad.service;

import java.util.List;

import com.dwf.tastyroad.model.Restaurant;
import com.dwf.tastyroad.model.Search;

public interface RestaurantDao {
	
	//Restaurant의 정보를 추가함
	public int addRestaurant(Restaurant restaurant) throws Exception;

	//Restaurant의 정보를 찾아서 리턴함
	public Restaurant findRestaurant(Restaurant restaurant) throws Exception;
	
	//Restaurant의 정보를 리턴함
	public Restaurant getRestaurant(int resId) throws Exception;
	
	//Restaurant의 정보를 수정함
	public int updataRestaurant(Restaurant restaurant) throws Exception;
	
	//Restaurant를 삭제함
	public int removeRestaurant(int resId) throws Exception;
	
	//Restaurant의 목록을 리턴함
	public List<Restaurant> getRestaurantList(Search search) throws Exception;

}
