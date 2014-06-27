package com.dwf.tastyroad.model;

import java.util.Date;

public class Item {
    private Integer itemNo;
    private Integer userNo;
    private String itemName;
    private String itemInfo;
    private Integer price;
    private Date regiDate;
    private Integer stateCode;
    private Integer category1;
    private Integer category2;
    private String itemPicturePath1;
    private String itemPicturePath2;
    private String itemPicturePath3;
    private Double gridX1;
    private Double gridY1;
    private Double gridX2;
    private Double gridY2;
    private Double gridX3;
    private Double gridY3;
    
    public Item() {
		// TODO Auto-generated constructor stub
	}    
    
	public Integer getItemNo() {
		return itemNo;
	}
	public void setItemNo(Integer itemNo) {
		this.itemNo = itemNo;
	}
	public Integer getUserNo() {
		return userNo;
	}
	public void setUserNo(Integer userNo) {
		this.userNo = userNo;
	}
	public String getItemName() {
		return itemName;
	}
	public void setItemName(String itemName) {
		this.itemName = itemName;
	}
	public String getItemInfo() {
		return itemInfo;
	}
	public void setItemInfo(String itemInfo) {
		this.itemInfo = itemInfo;
	}
	public Integer getPrice() {
		return price;
	}
	public void setPrice(Integer price) {
		this.price = price;
	}
	public Date getRegiDate() {
		return regiDate;
	}
	public void setRegiDate(Date regiDate) {
		this.regiDate = regiDate;
	}
	public Integer getStateCode() {
		return stateCode;
	}
	public void setStateCode(Integer stateCode) {
		this.stateCode = stateCode;
	}
	public Integer getCategory1() {
		return category1;
	}
	public void setCategory1(Integer category1) {
		this.category1 = category1;
	}
	public Integer getCategory2() {
		return category2;
	}
	public void setCategory2(Integer category2) {
		this.category2 = category2;
	}
	public String getItemPicturePath1() {
		return itemPicturePath1;
	}
	public void setItemPicturePath1(String itemPicturePath1) {
		this.itemPicturePath1 = itemPicturePath1;
	}
	public String getItemPicturePath2() {
		return itemPicturePath2;
	}
	public void setItemPicturePath2(String itemPicturePath2) {
		this.itemPicturePath2 = itemPicturePath2;
	}
	public String getItemPicturePath3() {
		return itemPicturePath3;
	}
	public void setItemPicturePath3(String itemPicturePath3) {
		this.itemPicturePath3 = itemPicturePath3;
	}
	public Double getGridX1() {
		return gridX1;
	}
	public void setGridX1(Double gridX1) {
		this.gridX1 = gridX1;
	}
	public Double getGridY1() {
		return gridY1;
	}
	public void setGridY1(Double gridY1) {
		this.gridY1 = gridY1;
	}
	public Double getGridX2() {
		return gridX2;
	}
	public void setGridX2(Double gridX2) {
		this.gridX2 = gridX2;
	}
	public Double getGridY2() {
		return gridY2;
	}
	public void setGridY2(Double gridY2) {
		this.gridY2 = gridY2;
	}
	public Double getGridX3() {
		return gridX3;
	}
	public void setGridX3(Double gridX3) {
		this.gridX3 = gridX3;
	}
	public Double getGridY3() {
		return gridY3;
	}
	public void setGridY3(Double gridY3) {
		this.gridY3 = gridY3;
	}
	@Override
	public String toString() {
		return "Item [itemNo=" + itemNo + ", userNo=" + userNo + ", itemName="
				+ itemName + ", itemInfo=" + itemInfo + ", price=" + price
				+ ", regiDate=" + regiDate + ", stateCode=" + stateCode
				+ ", category1=" + category1 + ", category2=" + category2
				+ ", itemPicturePath1=" + itemPicturePath1
				+ ", itemPicturePath2=" + itemPicturePath2
				+ ", itemPicturePath3=" + itemPicturePath3 + ", gridX1="
				+ gridX1 + ", gridY1=" + gridY1 + ", gridX2=" + gridX2
				+ ", gridY2=" + gridY2 + ", gridX3=" + gridX3 + ", gridY3="
				+ gridY3 + "]";
	}
}

