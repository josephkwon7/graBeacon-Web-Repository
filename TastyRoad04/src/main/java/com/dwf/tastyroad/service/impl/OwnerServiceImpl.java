package com.dwf.tastyroad.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.dwf.tastyroad.model.Owner;
import com.dwf.tastyroad.model.Search;
import com.dwf.tastyroad.service.OwnerDao;
import com.dwf.tastyroad.service.OwnerService;

@Service
public class OwnerServiceImpl implements OwnerService {

	///Field
	@Autowired
	@Qualifier("ownerDaoImpl")
	private OwnerDao ownerDao;
	
	///Constructor
	public OwnerServiceImpl() {
		System.out.println("::"+this.getClass()+" Default Constructor Call");
	}

	///Method
	public void setOwnerDao(OwnerDao ownerDao){
		System.out.println("::"+this.getClass()+".setRestaurantDao() Call");
		this.ownerDao = ownerDao;
	}
	
	@Override
	public int addOwner(Owner owner) throws Exception {
		return ownerDao.addOwner(owner);
	}

	@Override
	public Owner findOwner(Owner owner) throws Exception {
		return ownerDao.findOwner(owner);
	}

	@Override
	public Owner getOwner(int ownerId) throws Exception {
		return ownerDao.getOwner(ownerId);
	}

	@Override
	public int updateOwner(Owner owner) throws Exception {
		return ownerDao.updateOwner(owner);
	}

	@Override
	public int removeOwner(int ownerId) throws Exception {
		return ownerDao.removeOwner(ownerId);
	}

	@Override
	public List<Owner> getOwnerList(Search search) throws Exception {
		return ownerDao.getOwnerList(search);
	}

}
