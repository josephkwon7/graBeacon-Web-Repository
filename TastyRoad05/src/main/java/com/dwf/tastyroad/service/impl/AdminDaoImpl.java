package com.dwf.tastyroad.service.impl;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.dwf.tastyroad.model.Admin;
import com.dwf.tastyroad.service.AdminDao;

@Repository
public class AdminDaoImpl implements AdminDao {

	///Field
	@Autowired
	@Qualifier("sqlSessionTemplate")
	private SqlSession sqlSession;
	
	///Constructor
	public AdminDaoImpl(){
		System.out.println("::"+getClass()+" Default Constructor Call");
	}
	
	///Method	
	public void setSqlsession(SqlSession sqlSession){
		System.out.println("::"+getClass()+".setSqlSession() Call");
		this.sqlSession = sqlSession;
	}
	
	@Override
	public Admin findAdmin(String adminId) throws Exception {
		return sqlSession.selectOne("AdminMapper.findAdmin", adminId);
	}

}
