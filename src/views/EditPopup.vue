<template>
    <div class="wrapper">
        <h1 class="heading">Edit popup</h1>
        <div class="u-center">
            <form @submit.prevent="handleSubmit">
                <div class="form-section  flex-down">
                    <label for="">Title:</label>
                    <input v-model="title" class="margin-t" type="text" required>
                </div>
                <div class="form-section flex-down">
                    <label for="">Insert your html</label>
                    <textarea v-model="html" class="margin-t" name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div class="form-section flex">
                    <input class="margin-r" v-model="timeActive" type="checkbox" id="delayOption" name="delayOption" value="true">
                    <label class="margin-r" for="delayOption"> Show on Timer</label><br>
                    <select :disabled="timeActive == 0" v-model="timeDelay">
                      <option value="10000">10 seconds</option>
                      <option value="30000">30 seconds</option>
                      <option value="100000">1 minute</option>
                      <option value="300000">3  minute</option>
            </select>
                </div>
                <div class="form-section flex">
                    <input class="margin-r" v-model="scrollActive" type="checkbox" id="scrollOption" name="scrollOption" value="true">
                    <label class="margin-r" for="scrollOption"> Show After Scrolling</label><br>
    
                    <select :disabled="scrollActive == 0" v-model="scrollDistance">
              <option value="10">10%</option>
              <option value="20">20%</option>
              <option value="30">30%</option>
              <option value="40">40%</option>
              <option value="50">50%</option>
              <option value="60">60%</option>
              <option value="70">70%</option>
              <option value="80">80%</option>
            </select>
                </div>
                <div class="form-section">
                    <input v-model="exitIntent" type="checkbox" id="exitIntentOption" name="exitIntentOption" value="Boat">
                    <label for="exitIntentOption"> Show on exit-intent</label><br><br>
                    <input type="submit" value="Submit">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
export default {

    props: ['id'],

    setup(props) {
        const title = ref()
        const html = ref()
        const timeActive = ref(false)
        const timeDelay = ref(10000)
        const scrollActive = ref(false)
        const scrollDistance = ref(10)
        const exitIntent = ref(false)
        const uri = ref("http://localhost:3000/triggerSettings/" + props.id)
        const router = useRouter()


        onMounted(() => {
            fetch(uri.value)
                .then(res => res.json())
                .then(data => {
                        title.value = data.title
                        html.value = data.html,
                        timeActive.value = data.time.active,
                        timeDelay.value = data.time.delay,
                        scrollActive.value = data.scroll.active,
                        scrollDistance.value = data.scroll.scrollDistance
                        exitIntent.value = data.exitIntent.active
                })

        })

        function handleSubmit() {
           fetch(uri.value, {
    method: "PATCH",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({
           title: title.value,
html: html.value,
   time: {
    name: "Time Delay",
    active: timeActive.value,
    delay: Number(timeDelay.value),
   },
   scroll:{
    name: "Scroll Distance",
    active: scrollActive.value,
    scrollDistance: Number(scrollDistance.value),
   },
   exitIntent:{
    name: "Exit intent",
    active: exitIntent.value
   }







    })
   }).then(() => {router.push("/")
     }).catch((err) => console.log(err))
        }


        return {
            title,
            html,
            timeActive,
            timeDelay,
            scrollActive,
            scrollDistance,
            exitIntent,
            handleSubmit
        }


    }


}
</script>

<style>

</style>