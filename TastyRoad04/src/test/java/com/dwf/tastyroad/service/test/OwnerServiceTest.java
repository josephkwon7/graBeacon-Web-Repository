package com.dwf.tastyroad.service.test;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.dwf.tastyroad.model.Owner;
import com.dwf.tastyroad.service.OwnerDao;
import com.dwf.tastyroad.service.OwnerService;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:config/commonservice.xml"})
public class OwnerServiceTest {
	
	@Autowired
	@Qualifier("ownerServiceImpl")
	private OwnerService ownerService;

	//Owner의 ID값을 한번 추출후 계속 사용하기 위해 만든 필드
	static int ownerId;
	
	@Test
	public void testAddOwner() throws Exception {
		System.out.println("\n===================================");
		Owner owner = new Owner("홍길동");
		int result = ownerService.addOwner(owner);
		System.out.println("insert 결과 : "+ result);
		Assert.assertEquals(1, result);
		System.out.println("===================================\n");
	}
	
	@Test
	public void testFindOwner() throws Exception {
		System.out.println("\n===================================");
		Owner owner = new Owner("홍길동");
		System.out.println(owner);
		Owner result = ownerService.findOwner(owner);
		System.out.println("find 결과 : "+ result);
		Assert.assertNotNull(result);
		System.out.println("===================================\n");
		this.ownerId = result.getOwnerId();
	}
	
	@Test
	public void testGetOwner() throws Exception {
		System.out.println("\n===================================");
		Owner result = ownerService.getOwner(ownerId);
		System.out.println("OwnerId :" + ownerId);
		System.out.println("get 결과 : "+ result);
		Assert.assertNotNull(result);
		System.out.println("===================================\n");
	}
	
	@Test
	public void testUpdateOwner() throws Exception {
		System.out.println("\n===================================");
		Owner owner = new Owner("홍길순");
		owner.setOwnerId(ownerId);
		System.out.println(owner);
		int result = ownerService.updateOwner(owner);
		System.out.println("update 결과 : "+ result);
		Assert.assertEquals(1, result);
		System.out.println("===================================\n");
	}
	
	@Test
	public void testDeleteOwner() throws Exception {
		System.out.println("\n===================================");
		int result = ownerService.removeOwner(ownerId);
		System.out.println("delete 결과 : "+ result);
		Assert.assertEquals(1, result);
		System.out.println("===================================\n");
	}
	
}
