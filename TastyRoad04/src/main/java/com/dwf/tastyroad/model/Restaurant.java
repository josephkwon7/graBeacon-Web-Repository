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
	private String imgSmall2;
	private String imgSmall3;
	private String imgBig1;
	private String imgBig2;
	private String imgBig3;
	private String imgBig4;
	private String imgMenu;
	private String copyComment;
	
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

	public String getImgSmall2() {
		return imgSmall2;
	}

	public void setImgSmall2(String imgSmall2) {
		this.imgSmall2 = imgSmall2;
	}

	public String getImgSmall3() {
		return imgSmall3;
	}

	public void setImgSmall3(String imgSmall3) {
		this.imgSmall3 = imgSmall3;
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

	public String getImgBig4() {
		return imgBig4;
	}

	public void setImgBig4(String imgBig4) {
		this.imgBig4 = imgBig4;
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

	///toString
	@Override
	public String toString() {
		return "Restaurant [resId=" + resId + ", name=" + name + ", addr="
				+ addr + ", phone=" + phone + ", licenseNo=" + licenseNo
				+ ", geoLat=" + geoLat + ", geoLong=" + geoLong
				+ ", imgSmall1=" + imgSmall1 + ", imgSmall2=" + imgSmall2
				+ ", imgSmall3=" + imgSmall3 + ", imgBig1=" + imgBig1
				+ ", imgBig2=" + imgBig2 + ", imgBig3=" + imgBig3
				+ ", imgBig4=" + imgBig4 + ", imgMenu=" + imgMenu
				+ ", copyComment=" + copyComment + "]";
	}

}
