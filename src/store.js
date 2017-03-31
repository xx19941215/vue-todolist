const STORAGE_KEY = 'todos-vuejs'
export default {
    fetch: function() {
        return JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || [];
    },

    save(item) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(item))
    }
}