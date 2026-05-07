import { getBannerAPI } from '@/apis/home'
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'

export function useBanner() {
    const bannerList = ref([]);
    const route = useRoute();

    const getBanner = async () => {
        const res = await getBannerAPI({
            distributionSite: '2'
        })
        // console.log(res)
        bannerList.value = res.result
    }

    onMounted(() => getBanner());

    // There is a reuse issue here, so we call watch to monitor    


    return {
        bannerList
    }
}