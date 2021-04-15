// const skills = {
//     state: { }, // состояние приложения, данные, которые используются внутри приложения
//     actions: { }, // методы, которые описывают, то что с данными происходит
//     getters: { }, // можем вынимать какие то конкретные данные из общих файлов приложения (state) (можем сосдать метод который будет вытаскивать данные)
//     mutations: { } // описываем методы, которые будут изменять данные

// }

const skills = {
    namespaced: true,  
    actions: {
        add(store, payload) {
            this.$axios.post('/skills', payload)
            .then(response => {
                console.log(response)
            }), error => {
                console.error(error)
            }
        }
    }
}

export default skills