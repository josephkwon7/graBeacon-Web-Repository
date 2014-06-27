package com.dwf.tastyroad.service.impl;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.dwf.tastyroad.model.Search;
import com.dwf.tastyroad.service.UnitedItemDao;
import com.dwf.tastyroad.model.Item;
import com.dwf.tastyroad.service.UnitedItemService;

@Service
public class UnitedItemServiceImpl implements UnitedItemService {
    
	@Autowired
	@Qualifier("unitedItemDaoImpl")
	private UnitedItemDao unitedItemDao;

    public void setItemDao(UnitedItemDao unitedItemDao){
    	this.unitedItemDao=unitedItemDao;
    }
    
    public UnitedItemServiceImpl() {
		// TODO Auto-generated constructor stub
    	System.out.println("__________________________");
    	System.out.println("United_Item_Service_Impl_Call");
    	System.out.println("__________________________");
	}

	@Override
	public Integer addItem(Item item) {
		// TODO Auto-generated method stub
		return unitedItemDao.addItem(item);
	}

	@Override
	public Item findItem(Integer itemNo) {
		// TODO Auto-generated method stub
		return unitedItemDao.findItem(itemNo);
	}
	
	@Override
	public Integer updateItem(Item item) {
		// TODO Auto-generated method stub
		return unitedItemDao.updateItem(item);
	}

	@Override
	public Integer removeItem(Integer itemNo) {
		// TODO Auto-generated method stub
		return unitedItemDao.removeItem(itemNo);
	}

	@Override
	public List<Item> findItemList(Search search) {
		// TODO Auto-generated method stub
		return unitedItemDao.findItemList(search);
	}

	@Override
	public List<Item> findMyItemList(Integer userNo) {
		// TODO Auto-generated method stub
		return unitedItemDao.findMyItemList(userNo);
	}
    
}
