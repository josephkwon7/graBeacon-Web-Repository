package com.dwf.tastyroad.service.test;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.dwf.tastyroad.model.Beacon;
import com.dwf.tastyroad.service.BeaconDao;
import com.dwf.tastyroad.service.BeaconService;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:config/commonservice.xml"})
public class BeaconServiceTest {
	
	@Autowired
	@Qualifier("beaconServiceImpl")
	private BeaconService beaconService;

	//Beacon의 ID값을 한번 추출후 계속 사용하기 위해 만든 필드
	static int beaconId;
	
	@Test
	public void testAddBeacon() throws Exception {
		System.out.println("\n===================================");
		Beacon beacon = new Beacon("d5756247-57a2-4344-915d-9599497940a0", 11, 0, 1000);
		int result = beaconService.addBeacon(beacon);
		System.out.println("insert 결과 : "+ result);
		Assert.assertEquals(1, result);
		System.out.println("===================================\n");
	}
	
	@Test
	public void testFindBeacon() throws Exception {
		System.out.println("\n===================================");
		Beacon beacon = new Beacon("d5756247-57a2-4344-915d-9599497940a0", 11, 0);
		System.out.println(beacon);
		Beacon result = beaconService.findBeacon(beacon);
		System.out.println("find 결과 : "+ result);
		Assert.assertNotNull(result);
		System.out.println("===================================\n");
		this.beaconId = result.getBeaconId();
	}
	
	@Test
	public void testGetBeacon() throws Exception {
		System.out.println("\n===================================");
		Beacon result = beaconService.getBeacon(this.beaconId);
		System.out.println("BeaconId :" + beaconId);
		System.out.println("get 결과 : "+ result);
		Assert.assertNotNull(result);
		System.out.println("===================================\n");
	}
	
	@Test
	public void testUpdateBeacon() throws Exception {
		System.out.println("\n===================================");
		Beacon beacon = new Beacon("d5756247-57a2-4344-915d-9599497940a0", 11, 11);
		beacon.setBeaconId(beaconId);
		System.out.println(beacon);
		int result = beaconService.updateBeacon(beacon);
		System.out.println("update 결과 : "+ result);
		Assert.assertEquals(1, result);
		System.out.println("===================================\n");
	}
	
	@Test
	public void testDeleteBeacon() throws Exception {
		System.out.println("\n===================================");
		int result = beaconService.removeBeacon(beaconId);
		System.out.println("delete 결과 : "+ result);
		Assert.assertEquals(1, result);
		System.out.println("===================================\n");
	}
	
}
