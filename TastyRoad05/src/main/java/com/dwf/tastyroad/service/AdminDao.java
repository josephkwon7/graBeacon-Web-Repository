package com.dwf.tastyroad.service;

import com.dwf.tastyroad.model.Admin;

public interface AdminDao {
	
	//adminId로 password를 가져온다 - Administrator 유저의 로그인을 처리하기 위함
	public Admin findAdmin(String adminId) throws Exception;
	
}
