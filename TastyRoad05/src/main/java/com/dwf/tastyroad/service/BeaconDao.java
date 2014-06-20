package com.dwf.tastyroad.service;

import java.util.List;

import com.dwf.tastyroad.model.Beacon;
import com.dwf.tastyroad.model.Search;

public interface BeaconDao {
	
	//Beacon을 추가함
	public int addBeacon(Beacon beacon) throws Exception;
	
	//uuid,major,minor 조합을 인자로 Beacon정보를 리턴함(resId 즉 restaurant의 ID 참조목적)
	//이후 restaurant 테이블을 이 resId를 통해 참조함 
	public Beacon findBeacon(Beacon beacon) throws Exception;
	
	//Beacon의 고유ID(DB에 Insert시 부여)를 인자로 해당 비컨의 정보를 리턴함
	public Beacon getBeacon(int beaconId) throws Exception;
		
	//Beacon의 정보를 수정함
	public int updateBeacon(Beacon beacon) throws Exception;
	
	//Beacon을 삭제함	
	public int removeBeacon(int beaconId) throws Exception;
	
	//Beacon의 목록을 리턴함
	public List<Beacon> getBeaconList(Search search) throws Exception;
	
	//Beacon의 검색 결과 총 ROW 수를 리턴함
	public int getTotalCount(Search search) throws Exception;
	
}
