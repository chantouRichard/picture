import { defineStore } from 'pinia'
import { ref } from 'vue'

export const userLoadingStore = defineStore('loading',() => {
    const loading = ref(false)

    const show = () => {
        loading.value = true
    }

    const hide = () => {
        loading.value = false
    }

    return {
        loading,
        show,
        hide
    }
})