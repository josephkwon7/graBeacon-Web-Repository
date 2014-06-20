package com.dwf.tastyroad.service;

import java.util.List;

import com.dwf.tastyroad.model.Owner;
import com.dwf.tastyroad.model.Search;

public interface OwnerDao {
	
	//Owner를 추가함
	public int addOwner(Owner owner) throws Exception;

	//Owner의 정보를 찾아 리턴함
	public Owner findOwner(Owner owner) throws Exception;
	
	//Owner의 정보를 리턴함
	public Owner getOwner(int ownerId) throws Exception;
	
	//Owner의 정보를 수정함
	public int updateOwner(Owner owner) throws Exception;
	
	//Owner를 삭제함
	public int removeOwner(int ownerId) throws Exception;
	
	//Owner의 목록을 리턴함
	public List<Owner> getOwnerList(Search search) throws Exception;
	
}
