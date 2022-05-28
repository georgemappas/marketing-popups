<template>
    <div class="wrapper">
        <h1 class="page-title">
            Modal List
        </h1>
    </div>
    <div class="wrapper">
        <div class="button-icon">
            <router-link to="/add">
            <span @click="addPopup"  class="material-symbols-rounded">add</span>
            </router-link>
        </div>
    </div>
    
    
    <!--<modal-container>
        <template #heading>Delay Trigger
</template>

<template #content>
    <div v-for="popup in triggerDelay" :key="popup.id">
        <modal-content :popup="popup" @delete="deleteDelay"></modal-content>
    </div>
</template>
         </modal-container>-->

         <modal-container>
<template #heading>
     Popups
</template>

<template #content>
    <div v-for="popup in popupsInfo" :key="popup.id">
        <modal-content  :popup="popup"  @delete="popupDelete"></modal-content>


    </div>
</template>
         </modal-container>
   


</template>

<script>
import ModalContainer from '@/components/ModalContainer.vue'
import ModalContent from '@/components/ModalContent.vue'
import getPopups from "@/composables/getPopups"
import {ref} from "vue"
import {useRouter} from "vue-router"

export default {
    name: 'Modal-List',
    components: { ModalContainer, ModalContent },

    setup() {
        const isShowModal = ref(false)


        function toggleModal(){
            isShowModal.value =! isShowModal.value
            //console.log(isShowModal.value)
        }

        const { popupsInfo, load } = getPopups()

        load(popupsInfo)


        function popupDelete(id){
            popupsInfo.value = popupsInfo.value.filter((trigger)  => {
               return trigger.id !== id 
            }) 
        }

        //function deleteScroll(id){
        //    triggerScroll.value = triggerScroll.value.filter((trigger)  => {
        //       return trigger.id !== id 
        //    }) 
        //}

    const router = useRouter()
    function addPopup(){
        router.push("/")
    }

    function test(){
        console.log("Hello")
    }

    function testtwo(){
        console.log("bb")
    }


        //return { triggerDelay, triggerScroll, deleteDelay, deleteScroll, toggleModal }
        return {popupsInfo, popupDelete,toggleModal, isShowModal, addPopup,test,testtwo}
    }

}
</script>

<style lang="scss">
.popup-type__container {
    text-align: left;
    margin-bottom: 30px;
}

.popup {
    &-container {
        display: flex;
        gap: 2%;
        flex-wrap: wrap;
    }
    &-content {
        background-color: white;
        box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);
        padding: 16px 16px;
        text-align: left;
        text-transform: capitalize;
        margin-bottom: 20px;
        border-radius: 10px;
        min-width: 250px;
    }
    &-interactions {
        display: flex;
        justify-content: space-between;
        //gap: 40px;
        margin-top: 35px;
        &__icons span {
            margin-right: 5px;
            cursor: pointer;
            &:hover {
                color: #6f64a3;
            }
        }
    }
}
</style>>

