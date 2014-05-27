package com.mkyong.common.model;

public class TestUrl {
	
	private String url;
	private String uuid;
	
	public TestUrl(){
		
	}
	
	

	public TestUrl(String url, String uuid) {
		super();
		this.url = url;
		this.uuid = uuid;
	}



	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getUuid() {
		return uuid;
	}

	public void setUuid(String uuid) {
		this.uuid = uuid;
	}
	
	
	
}
