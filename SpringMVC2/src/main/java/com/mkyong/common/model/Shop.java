package com.mkyong.common.model;

public class Shop {

	private int beacon_id;
	private String uuid;
	private int major;
	private int minor;
	private int txp;
	private int res_id;

	public Shop() {
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
		
	
	
	
}