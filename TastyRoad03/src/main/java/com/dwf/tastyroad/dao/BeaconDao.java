package com.dwf.tastyroad.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.dwf.tastyroad.model.Beacon;

public class BeaconDao {
	
	public Beacon findBeacon(int major) throws ClassNotFoundException, SQLException{
		Class.forName("oracle.jdbc.driver.OracleDriver");
		Connection c=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe","dwf","dwf");
		
		PreparedStatement pstmt=c.prepareStatement("SELECT * FROM beacon WHERE major=?");
		pstmt.setInt(1, major);
		
		
		ResultSet rs=pstmt.executeQuery();
		
		Beacon beacon=new Beacon();
		
		while(rs.next()){
			beacon.setBeacon_id(rs.getInt("beacon_id"));
			beacon.setUuid(rs.getString("uuid"));
			beacon.setMajor(rs.getInt("major"));
			beacon.setMinor(rs.getInt("minor"));
			beacon.setTxp(rs.getInt("txp"));
			beacon.setRes_id(rs.getInt("res_id"));
			beacon.setUrl(rs.getString("url"));
		}
		
		rs.close();
		pstmt.close();
		c.close();
		
		return beacon;
	}
}
