package com.dwf.tastyroad.service.impl;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.dwf.tastyroad.model.Beacon;
import com.dwf.tastyroad.model.Search;
import com.dwf.tastyroad.service.BeaconDao;

@Repository
public class BeaconDaoImpl implements BeaconDao {
	
	///Field
	@Autowired
	@Qualifier("sqlSessionTemplate")
	private SqlSession sqlSession;
	
	private int callCount = 0;
	
	///Constructor
	public BeaconDaoImpl(){
		System.out.println("::"+getClass()+" Default Constructor Call");
	}
	
	///Method	
	public void setSqlsession(SqlSession sqlSession){
		System.out.println("::"+getClass()+".setSqlSession() Call");
		this.sqlSession = sqlSession;
	}
		
	@Override
	public int addBeacon(Beacon beacon) throws Exception {
		return sqlSession.insert("BeaconMapper.addBeacon", beacon);
	}

	@Override
	public Beacon findBeacon(Beacon beacon)
			throws Exception {
		callCount++;
		System.out.println("["+this.getClass().getName()+ "] Find Beacon Call : " +callCount);		
		return sqlSession.selectOne("BeaconMapper.findBeacon", beacon);
	}

	@Override
	public Beacon getBeacon(int beaconId) throws Exception {
		return sqlSession.selectOne("BeaconMapper.getBeacon", beaconId);
	}

	@Override
	public int updateBeacon(Beacon beacon) throws Exception {
		return sqlSession.update("BeaconMapper.updateBeacon", beacon);
	}

	@Override
	public int removeBeacon(int beaconId) throws Exception {
		return sqlSession.delete("BeaconMapper.removeBeacon", beaconId);
	}

	//현재 미 구현 - YH
	@Override
	public List<Beacon> getBeaconList(Search search) throws Exception {
		return null;
		//return sqlSession.selectList("BeconMapper.getBeaconList", search);
	}//end of method
	
}	
