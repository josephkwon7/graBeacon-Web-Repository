package com.dwf.tastyroad.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.dwf.tastyroad.model.Admin;
import com.dwf.tastyroad.service.AdminDao;
import com.dwf.tastyroad.service.AdminService;

@Service
public class AdminServiceImpl implements AdminService {

	///Field
	@Autowired
	@Qualifier("adminDaoImpl")
	private AdminDao adminDao;
		
	///Constructor
	public AdminServiceImpl() {
		System.out.println("::"+this.getClass()+" Default Constructor Call");
	}

	///Method
	public void setAdminDao(AdminDao adminDao){
		this.adminDao = adminDao;
	}
	
	@Override
	public Admin findAdmin(String adminId) throws Exception {
		return adminDao.findAdmin(adminId);
	}


}
