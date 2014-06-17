package com.dwf.tastyroad.model;

public class Restaurant {

	///Field
	private int resId;
	private String name;
	private String addr;
	private String phone;
	private String licenseNo;
	private double geoLat;
	private double geoLong;
	private String imgSmall1;
	private String imgBig1;
	private String imgBig2;
	private String imgBig3;
	private String imgMenu;
	private String copyComment;
	private int resCategory; //1=한식,2=일식,3=중식,4=양식,5=카페
	
	///Constructor
	public Restaurant() {
	}
	
	public Restaurant(String name, String imgSmall1) {
		this.name = name;
		this.imgSmall1 = imgSmall1;
	}

	///Getter/Setter
	public int getResId() {
		return resId;
	}

	public void setResId(int resId) {
		this.resId = resId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddr() {
		return addr;
	}

	public void setAddr(String addr) {
		this.addr = addr;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getLicenseNo() {
		return licenseNo;
	}

	public void setLicenseNo(String licenseNo) {
		this.licenseNo = licenseNo;
	}

	public double getGeoLat() {
		return geoLat;
	}

	public void setGeoLat(double geoLat) {
		this.geoLat = geoLat;
	}

	public double getGeoLong() {
		return geoLong;
	}

	public void setGeoLong(double geoLong) {
		this.geoLong = geoLong;
	}

	public String getImgSmall1() {
		return imgSmall1;
	}

	public void setImgSmall1(String imgSmall1) {
		this.imgSmall1 = imgSmall1;
	}

	public String getImgBig1() {
		return imgBig1;
	}

	public void setImgBig1(String imgBig1) {
		this.imgBig1 = imgBig1;
	}

	public String getImgBig2() {
		return imgBig2;
	}

	public void setImgBig2(String imgBig2) {
		this.imgBig2 = imgBig2;
	}

	public String getImgBig3() {
		return imgBig3;
	}

	public void setImgBig3(String imgBig3) {
		this.imgBig3 = imgBig3;
	}

	public String getImgMenu() {
		return imgMenu;
	}

	public void setImgMenu(String imgMenu) {
		this.imgMenu = imgMenu;
	}

	public String getCopyComment() {
		return copyComment;
	}

	public void setCopyComment(String copyComment) {
		this.copyComment = copyComment;
	}

	public int getResCategory() {
		return resCategory;
	}

	public void setResCategory(int resCategory) {
		this.resCategory = resCategory;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Restaurant [resId=");
		builder.append(resId);
		builder.append(", name=");
		builder.append(name);
		builder.append(", addr=");
		builder.append(addr);
		builder.append(", phone=");
		builder.append(phone);
		builder.append(", licenseNo=");
		builder.append(licenseNo);
		builder.append(", geoLat=");
		builder.append(geoLat);
		builder.append(", geoLong=");
		builder.append(geoLong);
		builder.append(", imgSmall1=");
		builder.append(imgSmall1);
		builder.append(", imgBig1=");
		builder.append(imgBig1);
		builder.append(", imgBig2=");
		builder.append(imgBig2);
		builder.append(", imgBig3=");
		builder.append(imgBig3);
		builder.append(", imgMenu=");
		builder.append(imgMenu);
		builder.append(", copyComment=");
		builder.append(copyComment);
		builder.append(", resCategory=");
		builder.append(resCategory);
		builder.append("]");
		return builder.toString();
	}


}
