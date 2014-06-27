package com.dwf.tastyroad.model;
public class Location {
    
	//Field
	private Double gridX;
    private Double gridY;
    
    //Constuctor
    public Location() {
		// TODO Auto-generated constructor stub
	}
    
    //getter - setter
	public Double getGridX() {
		return gridX;
	}
	public void setGridX(Double gridX) {
		this.gridX = gridX;
	}
	public Double getGridY() {
		return gridY;
	}
	public void setGridY(Double gridY) {
		this.gridY = gridY;
	}

	@Override
	public String toString() {
		return "Location [gridX=" + gridX + ", gridY=" + gridY + "]";
	}
}
