package com.dwf.tastyroad.service;

import java.util.List;

import com.dwf.tastyroad.model.Item;
import com.dwf.tastyroad.model.Search;



public interface UnitedItemService {

    public Integer addItem(Item item);
    
    public Item findItem(Integer itemNo);

    public Integer updateItem(Item item);

    public Integer removeItem(Integer itemNo);

    public List<Item> findItemList(Search search);

    public List<Item> findMyItemList(Integer userNo);
}
