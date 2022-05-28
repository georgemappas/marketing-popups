<template>
    <div class="wrapper">
        <h1>Home Playground</h1>
        <h2 class="scroll-fix">{{scrollDistance}}%</h2>
        <teleport to='#modals'>
            <div v-for="popup in popupsInfo" :key="popup.name">
                    <!--<modal-view :popup="popup"></modal-view>-->
                    <modal-view :popup="popup" @close="isShow = false"></modal-view>
                </div>
            
        </teleport>
    </div>
</template>

<script>
// @ is an alias to /src
import { ref, onMounted } from "vue"
import ModalView from "@/components/ModalView.vue"
import getPopups from "@/composables/getPopups"
export default {
    name: 'HomePlayground',
    components: { ModalView },

    setup() {
        
        //Loading data from json
        const { popupsInfo, load } = getPopups()
        load(popupsInfo)

     
  




        //Show the scroll distance  in  percent while scrolling
        const scrollDistance = ref(0)

        function showScrollDistance() {
            if (window.scrollY <= window.document.body.scrollHeight) {
                scrollDistance.value = Math.floor((window.scrollY * 100) / window.document.body.scrollHeight)
            }
        }
        onMounted(() => {
            window.addEventListener("scroll", showScrollDistance)
        })





        return { scrollDistance, popupsInfo }
    }
}
</script>

<style lang="scss">
body {
    height: 3000vh
}

.scroll-fix {
    position: fixed;
    top: 70px;
    right: 40px;
}
</style>
