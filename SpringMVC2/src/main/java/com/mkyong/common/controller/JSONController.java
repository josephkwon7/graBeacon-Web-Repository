package com.mkyong.common.controller;

import java.sql.SQLException;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mkyong.common.dao.BeaconDao;
import com.mkyong.common.model.Shop;

@Controller
@RequestMapping("/beacon")
public class JSONController {

	@RequestMapping(value = "{uuid}", method = RequestMethod.GET)
	public @ResponseBody
	Shop getShopInJSON(@PathVariable String uuid) throws ClassNotFoundException, SQLException {

		
		BeaconDao beaconDao=new BeaconDao();
		Shop shop=beaconDao.findShop(uuid);
		
		return shop;

	}

}