new Vue({
    el: '#desafio',
    data: {
    nome: 'Ana Laura',
    idade: 21,
    linkImg: 'https://br.vuejs.org/images/logo.png'

    },
    methods: {
        idadeVezes3: function() {
            return this.idade * 3
        },
        random: function() {
            return Math.random()
        },
        updateInput: function(event) {
            event.target.value = this.nome 
        }

    }
  })