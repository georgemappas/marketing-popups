<template>
    <div v-if="isShow" @click.self="toggleModal" class="modal">
        <div class="modal-container">
            <span @click="toggleModal" id="close-button" class="material-symbols-rounded">close</span>
            <div class="modal-content">
                <h1>{{popup.title}}</h1>
                <div v-html="popup.html"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
    name: "ModalVue",
    props: ["popup"],
    setup(props) {

        const isShow = ref(false)
        const delayActive = ref(props.popup.time.active)
        const time = ref(props.popup.time.delay);


        // trigger for toggle Modal
    function toggleModal() {
            isShow.value = !isShow.value
        }


        //delay  triggers
        if (delayActive.value == true) {
            fireDelayTrigger()
        }

        function fireDelayTrigger() {
            setTimeout(() => {
                isShow.value = true;
            }, time.value)
        }




    //After Scroll
    const scrollActive = ref(props.popup.scroll.active)
    const scrollDistance = ref(props.popup.scroll.scrollDistance)

    const ifScroll = (() => {
        if (scrollActive.value === true) {
            modalScroll()
        }
    })

    onMounted(() => {
        window.addEventListener("scroll", ifScroll)
    })

    function modalScroll() {
        const fullPageHeight = ref(window.document.body.scrollHeight / 100);
        const openAfterScroll = ref(fullPageHeight.value * scrollDistance.value);

        if (window.scrollY >= openAfterScroll.value) {
            isShow.value = true;
        }
    }


//const exitIntent = ref(props.exitIntent.active)




        return { toggleModal, isShow }
    }






}
</script>

<style lang="scss">
body {
    overflow: scroll;
}
</style>