<template>
   <div class="popup-content">
       <div  class="popup-options_box">
                    <h2>{{popup.title}}</h2>
                    <div class="popup-interactions__icons">
                            <router-link :to="{name:'editPopup', params: {id: popup.id}}">
                            <span class="material-symbols-rounded" >edit</span>
                            </router-link>
                            <span class="material-symbols-rounded" @click="deletePopup">delete</span>
                        </div>
                        </div>
                    <div class="popup-options">
                        <h4 class="subheading">PopUp options</h4>
                        <div  class="popup-options_box">
                       
                        
                        
                        </div>
                  
                        <ul>
                            <li v-if="popup.time.active">
                                <span class="material-symbols-rounded" >done</span>
                                <p>{{popup.time.name}}</p>
                            </li>
                            <li v-if="popup.scroll.active">
                                <span class="material-symbols-rounded" >done</span>
                                <p>{{popup.scroll.name}}</p>
                            </li>
                            <li v-if="popup.exitIntent.active">
                                  <span class="material-symbols-rounded" >done</span>
                                    <p>{{popup.exitIntent.name}}</p>
                            </li>
                        </ul>
                    </div>

                    
        
                </div>

</template>

<script>
import {ref} from "vue"

export default {
props: ["popup"],


setup(props, context){


const uri = ref("http://localhost:3000/triggerSettings/" + props.popup.id)

const deletePopup = () => {
    fetch(uri.value, {method: "DELETE"})
    .then(() => context.emit("delete", props.popup.id))
    .catch(err => console.log(err))
}
    
const clickShow = (() => {
    context.emit("clickShow", true)
})

return {deletePopup, clickShow}

}

}
</script>

<style lang="scss">

.subheading{
    margin-top: 12px;
}

ul{
    padding: 0px;
    display: flex;
 & li{
    margin-right: 12px;
    margin-bottom: 8px;
    list-style: none;
    display: flex;
    align-items: center;
    & p{
        margin: 0px;
        margin-left: 8px;
    }
}
}

.popup-options_box{
    display: flex; 
    justify-content: space-between;
}

</style>