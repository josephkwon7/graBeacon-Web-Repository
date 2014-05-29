package com.dwf.tastyroad.controller;

import java.sql.SQLException;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dwf.tastyroad.dao.BeaconDao;
import com.dwf.tastyroad.model.Beacon;

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


}