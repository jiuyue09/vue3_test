import { watch, ref } from "vue"

function useFavicon(newicon) {
    const favicon = ref(newicon)

    const updateIcon = icon => {
        document.head.querySelectorAll(`link[rel*="icon"]`).forEach(el => el.herf = `${icon}`)
    }

    const reset = () => favicon.value = '/favicon.ico'

    watch(favicon, (i) => {
        updateIcon(i)
    })

    return { favicon, reset }
}


export default useFavicon;