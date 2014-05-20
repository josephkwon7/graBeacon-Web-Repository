package com.mkyong.common.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.mkyong.common.model.Shop;

public class BeaconDao {
	
	public Shop findShop(String uuid) throws ClassNotFoundException, SQLException{
		Class.forName("oracle.jdbc.driver.OracleDriver");
		Connection c=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe","dwf","dwf");
		
		PreparedStatement pstmt=c.prepareStatement("SELECT * FROM beacon WHERE uuid=?");
		pstmt.setString(1, uuid);
		
		ResultSet rs=pstmt.executeQuery();
		
		Shop shop=new Shop();
		
		while(rs.next()){
			shop.setBeacon_id(rs.getInt("beacon_id"));
			shop.setUuid(rs.getString("uuid"));
			shop.setMajor(rs.getInt("major"));
			shop.setMinor(rs.getInt("minor"));
			shop.setTxp(rs.getInt("txp"));
			shop.setRes_id(rs.getInt("res_id"));
		}
		
		rs.close();
		pstmt.close();
		c.close();
		
		return shop;
	}
}
