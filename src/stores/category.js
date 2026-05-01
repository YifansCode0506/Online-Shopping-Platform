import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'


export const useCategoryStore = defineStore('category', () => {
  // Nav list data management
  // state Nav list data
  const categoryList = ref([]);

  // action Method for obtianing nav data
  const getCategory = async () =>{
  const res = await getCategoryAPI();
  console.log(res);
  categoryList.value = res.result;
}

return {
    categoryList,
    getCategory
}
})
