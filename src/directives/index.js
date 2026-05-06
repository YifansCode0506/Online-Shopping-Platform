// define lazy load plugin
import { useIntersectionObserver } from '@vueuse/core'

// define global instruction
export const lazyPlugin = {
    install(app){
        app.directive('img-lazy',{
            mounted(el, binding) {
            // el: Element bound by directive img
            // binding: binding.value The value of the expression bound after the equals sign in the instruction
            // img url
            // console.log(el, binding.value);
                const { stop } = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                        // console.log(isIntersecting)
                        if (isIntersecting) {
                        // The image enters the viewport area
                        el.src = binding.value
                          stop()
                        }
                    },
                )
            }
        })
    }
}
