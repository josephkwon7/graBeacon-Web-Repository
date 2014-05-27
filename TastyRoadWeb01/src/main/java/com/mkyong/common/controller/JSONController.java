package com.mkyong.common.controller;

import java.sql.SQLException;



import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mkyong.common.dao.BeaconDao;
import com.mkyong.common.model.Beacon;
import com.mkyong.common.model.TestUrl;

@Controller
@RequestMapping("/beacon")
public class JSONController {
	
	@RequestMapping(value = "/Thumbnail/{major}", method = RequestMethod.GET)
	public @ResponseBody
	Beacon getBeaconInJSON(@PathVariable int major) throws ClassNotFoundException, SQLException {

		
		BeaconDao beaconDao=new BeaconDao();
		Beacon beacon=beaconDao.findBeacon(major);
		
		return beacon;

	}
	/*
	@RequestMapping(value = "/Thumbnail/{uuid}", method = RequestMethod.GET)
	public @ResponseBody
	String getUrlInJSON(@PathVariable String uuid) throws ClassNotFoundException, SQLException {

		TestUrl testUrl=new TestUrl(uuid,"http://consciouslifenews.com/wp-content/uploads/2013/12/bad-food-mac-donals.jpg");
		
		String url1=testUrl.getUrl();
		return url1;

	}*/

}