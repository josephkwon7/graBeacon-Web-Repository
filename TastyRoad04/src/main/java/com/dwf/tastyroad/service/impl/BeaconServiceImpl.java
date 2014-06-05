/**
 * 
 */
package com.dwf.tastyroad.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.dwf.tastyroad.model.Beacon;
import com.dwf.tastyroad.model.Search;
import com.dwf.tastyroad.service.BeaconDao;
import com.dwf.tastyroad.service.BeaconService;

@Service
public class BeaconServiceImpl implements BeaconService {

	///Field
	@Autowired
	@Qualifier("beaconDaoImpl")
	BeaconDao beaconDao;
	
	///Constructor
	public BeaconServiceImpl(){
		System.out.println("::"+this.getClass()+" Default Constructor Call");
	}
	
	///Method
	public void setBeaconDao(BeaconDao beaconDao){
		System.out.println("::"+this.getClass()+".setBeconDao Call");
		this.beaconDao = beaconDao;
	}
	
	@Override
	public int addBeacon(Beacon beacon) throws Exception {
		return beaconDao.addBeacon(beacon);
	}


	@Override
	public Beacon findBeacon(Beacon beacon)
			throws Exception {
		return beaconDao.findBeacon(beacon);
	}


	@Override
	public Beacon getBeacon(int beaconId) throws Exception {
		return beaconDao.getBeacon(beaconId);
	}


	@Override
	public int updateBeacon(Beacon beacon) throws Exception {
		return beaconDao.updateBeacon(beacon);
	}


	@Override
	public int removeBeacon(int beaconId) throws Exception {
		return beaconDao.removeBeacon(beaconId);
	}

	
	@Override
	public List<Beacon> getBeaconList(Search search) throws Exception {
		return beaconDao.getBeaconList(search);
	}

}
