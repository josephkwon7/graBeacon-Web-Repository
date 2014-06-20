package com.dwf.tastyroad.service;

import java.util.List;

import com.dwf.tastyroad.model.Beacon;
import com.dwf.tastyroad.model.Search;

public interface BeaconService {

	//==> Beacon ::  INSERT ( Beacon 추가 )
	public int addBeacon(Beacon beacon) throws Exception;
	
	//==> Beacon ::  SELECT  ( Beacon uuid/major/minor로 맛집찾기 ) 
	public Beacon findBeacon(Beacon beacon) throws Exception;
	
	//==> Beacon ::  SELECT  ( Beacon 보기 ) 
	public Beacon getBeacon(int beaconId) throws Exception;
		
	//==> Beacon ::  UPDATE  ( Beacon 수정  )
	public int updateBeacon(Beacon beacon) throws Exception;
	
	//==> Beacon ::  DELETE  ( Beacon 삭제 )
	public int removeBeacon(int beaconId) throws Exception;
	
	//==> Beacon ::  SELECT  ( Beacon 목록 보기 )
	public List<Beacon> getBeaconList(Search search) throws Exception;
	
	//==> Beacon ::  COUNT  ( Beacon 검색 결과 Row Count )
	public int getTotalCount(Search search) throws Exception;
	
}
