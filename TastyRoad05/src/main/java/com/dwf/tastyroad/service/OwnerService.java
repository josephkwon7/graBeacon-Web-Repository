package com.dwf.tastyroad.service;

import java.util.List;

import com.dwf.tastyroad.model.Owner;
import com.dwf.tastyroad.model.Search;

public interface OwnerService {
	
	//==> Owner ::  INSERT ( Owner 추가 )
	public int addOwner(Owner owner) throws Exception;
	
	//==> Owner ::  SELECT  ( Owner 찾기 ) 
	public Owner findOwner(Owner owner) throws Exception;
	
	//==> Owner ::  SELECT  ( Owner 보기 ) 
	public Owner getOwner(int ownerId) throws Exception;
		
	//==> Owner ::  UPDATE  ( Owner 수정  )
	public int updateOwner(Owner owner) throws Exception;
	
	//==> Owner ::  DELETE  ( Owner 삭제 )
	public int removeOwner(int ownerId) throws Exception;
	
	//==> Owner ::  SELECT  ( Owner 목록 보기 )
	public List<Owner> getOwnerList(Search search) throws Exception;
	
}
