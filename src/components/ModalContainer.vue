<template>
  <div class="wrapper margin-bottom">
            <div class="popup-type__container">
                <h2><slot name="heading"></slot></h2>
                <hr>
            </div>
            <div class="popup-container">
               <slot name="content"></slot>
            </div>
        </div>
</template>

<script>
export default {
name: "modal-container",

setup(){

}}
</script>

<style lang="scss">


</style>