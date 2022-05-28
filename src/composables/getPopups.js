import { ref } from "vue"

const getPopups = () => {

    const popupsInfo = ref([])
        //const triggerDelay = ref([])
        //const triggerScroll = ref([])

    const error = ref(null)

    const load = async() => {
        try {
            let data = await fetch("http://localhost:3000/triggerSettings")
            if (!data.ok) {
                throw Error("No data available")
            }
            popupsInfo.value = await data.json()
        } catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return { popupsInfo, load }

}

export default getPopups