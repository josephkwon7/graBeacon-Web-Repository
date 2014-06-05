package com.dwf.tastyroad.model;

import java.util.ArrayList;

/*
 *   
 */
public class Search {
	///Field
	private String[] userName;
	private ArrayList<String> userId;
	private String searchCondition;
	
	///Constructor
	public Search() {
	}
	
	///Method
	public String[] getUserName() {
		return userName;
	}
	public void setUserName(String[] userName) {
		this.userName = userName;
	}
	
	public ArrayList<String> getUserId() {
		return userId;
	}
	public void setUserId(ArrayList<String> userId) {
		this.userId = userId;
	}

	public String getSearchCondition() {
		return searchCondition;
	}
	public void setSearchCondition(String searchCondition) {
		this.searchCondition = searchCondition;
	}
}//end of class