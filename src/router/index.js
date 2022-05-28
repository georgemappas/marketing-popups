import { createRouter, createWebHashHistory } from 'vue-router'
import HomePlayground from '../views/HomePlayground.vue'
import ModalList from "../views/ModalList.vue"
import AddPopup from "../views/AddPopup.vue"
import EditPopup from "../views/EditPopup.vue"

const routes = [{
        path: '/',
        name: 'home',
        component: ModalList
    },
    {
        path: '/playground',
        name: 'HomePlayground',
        component: HomePlayground
    },
    {
        path: '/add',
        name: 'addPopup',
        component: AddPopup
    },
    {
        path: '/popups/:id',
        name: 'editPopup',
        component: EditPopup,
        props: true
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router