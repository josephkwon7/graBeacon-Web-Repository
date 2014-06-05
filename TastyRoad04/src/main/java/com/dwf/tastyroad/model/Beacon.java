package com.dwf.tastyroad.model;

public class Beacon {
	
	///Field
	private int beaconId;
	private String uuId;
	private int major;
	private int minor;
	private int resId;
	
	///Constructor
	public Beacon(){
	}

	public Beacon(String uuId, int major, int minor) {
		this.uuId = uuId;
		this.major = major;
		this.minor = minor;
	}

	public Beacon(String uuId, int major, int minor, int resId) {
		this.uuId = uuId;
		this.major = major;
		this.minor = minor;
		this.resId = resId;
	}

	///Getter/Setter
	public int getBeaconId() {
		return beaconId;
	}

	public void setBeaconId(int beaconId) {
		this.beaconId = beaconId;
	}

	public String getUuId() {
		return uuId;
	}

	public void setUuId(String uuId) {
		this.uuId = uuId;
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

	public int getResId() {
		return resId;
	}

	public void setResId(int resId) {
		this.resId = resId;
	}

	@Override
	public String toString() {
		return "Beacon [beaconId=" + beaconId + ", uuId=" + uuId + ", major="
				+ major + ", minor=" + minor + ", resId=" + resId + "]";
	}
		
}
