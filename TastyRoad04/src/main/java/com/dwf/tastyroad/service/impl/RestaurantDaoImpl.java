package com.dwf.tastyroad.service.impl;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.dwf.tastyroad.model.Restaurant;
import com.dwf.tastyroad.model.Search;
import com.dwf.tastyroad.service.RestaurantDao;

@Repository
public class RestaurantDaoImpl implements RestaurantDao {

	///Field
	@Autowired
	@Qualifier("sqlSessionTemplate")
	private SqlSession sqlSession;
	
	///Constructor
	public RestaurantDaoImpl(){
		System.out.println("::"+getClass()+" Default Constructor Call");
	}
	
	///Method
	public void setSqlSession(SqlSession sqlSession){
		System.out.println("::"+getClass()+".setSqlSession() Call");
		this.sqlSession = sqlSession;
	}
	
	@Override
	public int addRestaurant(Restaurant restaurant) throws Exception {
		return sqlSession.insert("RestaurantMapper.addRestaurant", restaurant);
	}
	
	@Override
	public Restaurant findRestaurant(Restaurant restaurant) throws Exception {
		return sqlSession.selectOne("RestaurantMapper.findRestaurant", restaurant);
	}

	@Override
	public Restaurant getRestaurant(int resId) throws Exception {
		return sqlSession.selectOne("RestaurantMapper.getRestaurant", resId);
	}

	@Override
	public int updataRestaurant(Restaurant restaurant) throws Exception {
		return sqlSession.update("RestaurantMapper.updateRestaurant", restaurant);
	}

	@Override
	public int removeRestaurant(int resId) throws Exception {
		return sqlSession.delete("RestaurantMapper.removeRestaurant", resId);
	}

	//아직 미구현  - YH
	@Override
	public List<Restaurant> getRestaurantList(Search search) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

}
