package com.mkyong.common.model;

public class Beacon {
	
	private int beacon_id;
	private String uuid;
	private int major;
	private int minor;
	private int txp;
	private int res_id;
	private String url;
	
	public Beacon(){
		super();
	}
	
	public Beacon(int beacon_id, String uuid, int major, int minor, int txp,
			int res_id, String url) {
		super();
		this.beacon_id = beacon_id;
		this.uuid = uuid;
		this.major = major;
		this.minor = minor;
		this.txp = txp;
		this.res_id = res_id;
		this.url = url;
	}
	public int getBeacon_id() {
		return beacon_id;
	}
	
	
	public void setBeacon_id(int beacon_id) {
		this.beacon_id = beacon_id;
	}
	public String getUuid() {
		return uuid;
	}
	public void setUuid(String uuid) {
		this.uuid = uuid;
	}
	public int getMajor() {
		return major;
	}
	public void setMajor(int major) {
		this.major = major;
	}
	public int getMinor() {
		return minor;
	}
	public void setMinor(int minor) {
		this.minor = minor;
	}
	public int getTxp() {
		return txp;
	}
	public void setTxp(int txp) {
		this.txp = txp;
	}
	public int getRes_id() {
		return res_id;
	}
	public void setRes_id(int res_id) {
		this.res_id = res_id;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	
	
}
