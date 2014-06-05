package com.dwf.tastyroad.service.impl;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.dwf.tastyroad.model.Owner;
import com.dwf.tastyroad.model.Search;
import com.dwf.tastyroad.service.OwnerDao;

@Repository
public class OwnerDaoImpl implements OwnerDao {

	///Field
	@Autowired
	@Qualifier("sqlSessionTemplate")
	private SqlSession sqlSession;
	
	///Constructor
	public OwnerDaoImpl() {
		System.out.println("::"+this.getClass()+" Default Constructor Call");
	}

	///Method
	public void setSqlSession(SqlSession sqlSession){
		System.out.println("::"+this.getClass()+".setRestaurantDao() Call");
		this.sqlSession = sqlSession;
	}
	
	@Override
	public int addOwner(Owner owner) throws Exception {
		return sqlSession.insert("OwnerMapper.addOwner", owner);
	}

	@Override
	public Owner findOwner(Owner owner) throws Exception {
		return sqlSession.selectOne("OwnerMapper.findOwner", owner);
	}

	@Override
	public Owner getOwner(int ownerId) throws Exception {
		return sqlSession.selectOne("OwnerMapper.getOwner", ownerId);
	}

	@Override
	public int updateOwner(Owner owner) throws Exception {
		return sqlSession.update("OwnerMapper.updateOwner", owner);
	}

	@Override
	public int removeOwner(int ownerId) throws Exception {
		return sqlSession.delete("OwnerMapper.removeOwner", ownerId);
	}

	//아직 미 구현 - YH
	@Override
	public List<Owner> getOwnerList(Search search) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

}
