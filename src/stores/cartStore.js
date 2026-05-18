// Encapsulate the shopping cart module

import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore('cart', ()=>{
    // 1.定义state - cartList
    const cartList = ref([]);
    // 2. 定义action - addCart
    const addCart = (goods)=>{
        console.log('add', goods);
        // 添加购物车操作
        // 已添加过 - count +1
        // 没有添加过  - 直接push
        // 思路： 通过匹配传递过来的商品对象中的skuId能不能在cartList中找到
        const item = cartList.value.find((item) => goods.skuId === item.skuId)
        if(item){
            // 找到了
            item.count++
        }else{
            cartList.value.push(goods);
        }
    }
    return {
        cartList,
        addCart,
    }
})