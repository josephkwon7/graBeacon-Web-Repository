package com.dwf.tastyroad.service;

import java.util.List;

import com.dwf.tastyroad.model.Restaurant;
import com.dwf.tastyroad.model.Search;

public interface RestaurantService {

	//==> Restaurant ::  INSERT ( Restaurant 추가 )
	public int addRestaurant(Restaurant restaurant) throws Exception;
	
	//==> Restaurant ::  SELECT  ( Restaurant 찾아서 보기 ) 
	public Restaurant findRestaurant(Restaurant restaurant) throws Exception;
	
	//==> Restaurant ::  SELECT  ( Restaurant 보기 ) 
	public Restaurant getRestaurant(int restaurantId) throws Exception;
		
	//==> Restaurant ::  UPDATE  ( Restaurant 수정  )
	public int updateRestaurant(Restaurant restaurant) throws Exception;
	
	//==> Restaurant ::  DELETE  ( Restaurant 삭제 )
	public int removeRestaurant(int restaurantId) throws Exception;
	
	//==> Restaurant ::  SELECT  ( Restaurant 목록 보기 )
	public List<Restaurant> getRestaurantList(Search search) throws Exception;
	
	//==> Restaurant ::  COUNT  ( Restaurant 검색 결과 Row Count )
	public int getTotalCount(Search search) throws Exception;
		
}
