package com.dwf.tastyroad.model;

public class Owner {
	
	///Field
	private int ownerId;
	private String name;
	private String phone;
	private String addr;
	private String email;
	private int resId;
	
	///Constructor
	public Owner() {
	}
	
	public Owner(String name){
		this.name = name;
	}

	///Getter/Setter
	public int getOwnerId() {
		return ownerId;
	}

	public void setOwnerId(int ownerId) {
		this.ownerId = ownerId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getAddr() {
		return addr;
	}

	public void setAddr(String addr) {
		this.addr = addr;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getResId() {
		return resId;
	}

	public void setResId(int resId) {
		this.resId = resId;
	}

	///toString
	@Override
	public String toString() {
		return "Owner [ownerId=" + ownerId + ", name=" + name + ", phone="
				+ phone + ", addr=" + addr + ", email=" + email + ", resId="
				+ resId + "]";
	}
	
	
}
