package com.dwf.tastyroad.service.impl;

import java.util.List;



import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.dwf.tastyroad.model.Search;
//import com.freshmarket.dao.ItemDao;
import com.dwf.tastyroad.service.UnitedItemDao;
import com.dwf.tastyroad.model.Item;

@Repository
public class UnitedItemDaoImpl implements UnitedItemDao {
    
	@Autowired
	@Qualifier("sqlSessionTemplate")
	private SqlSession sqlSession;
	
	//Setter Injection
    public void setSqlSession(SqlSession sqlSession){
    	this.sqlSession=sqlSession;
    }
    
    //Default Constructor
    public UnitedItemDaoImpl() {
		// TODO Auto-generated constructor stub
    	System.out.println("__________________________");
    	System.out.println("United_Item_Dao_Impl_Call_");
    	System.out.println("__________________________");
	}

	@Override
	public Integer addItem(Item item) {
		
		
		Integer a = sqlSession.insert("UnitedItemMapper.addItem", item);
		item.setItemNo((Integer)sqlSession.selectOne("UnitedItemMapper.findItemNo", item));
		Integer b = sqlSession.insert("UnitedItemMapper.addLocation", item);
		Integer c = sqlSession.insert("UnitedItemMapper.addItem_pic", item);

		return a+b+c;
	}
	
	@Override
	public Item findItem(Integer itemNo) {
		return sqlSession.selectOne("UnitedItemMapper.findItem", itemNo);
	}

	@Override
	public Integer updateItem(Item item) {
		return sqlSession.update("UnitedItemMapper.updateItem", item);
	}

	@Override
	public Integer removeItem(Integer itemNo) {
		return sqlSession.delete("UnitedItemMapper.removeItem", itemNo);
	}

	@Override
	public List<Item> findItemList(Search search) {
		return sqlSession.selectList("UnitedItemMapper.findItemList", search);
	}

	@Override
	public List<Item> findMyItemList(Integer userNo) {
		// TODO Auto-generated method stub
		return null;
	}

}
