new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Alerta!')
        },
        armazenarValor(event) {
            this.valor = event.target.value
        }
    }
})