import { getCategoryAPI } from "@/apis/category";
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

export function useCategory(){
  const categoryData = ref({})
  const route = useRoute();

  const getCategory = async (id) => {
    const res = await getCategoryAPI(route.params.id);
    categoryData.value = res.result;
  }

  onMounted( () => {
    getCategory()
  });

  // There is a reuse issue here, so we call watch to monitor    
  watch(
    () => route.params.id,
    () => {
    getCategory()
  })

  return {
    categoryData
  }
}