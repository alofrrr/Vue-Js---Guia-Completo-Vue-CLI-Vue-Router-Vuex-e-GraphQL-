<template>
    <div class="contador">
        <h1>Contador</h1>
        <span>{{ contador }}</span>
        <button @click="adicionar">Adicionar</button>
        <button @click="subtrair">Subtrair</button>

    </div>
    
</template>

<script>
export default {
    data(){
        return {
            contador: 0
        }
    },
    methods: {
        adicionar(){
            this.contador++
        },
        subtrair(){
            this.contador--
        }
    }
    
}
</script>

<style>
.contador span {
    border-bottom: 1px solid #ccc;
    height: 30px;
    padding: 5px 25px;
}

.contador button {
    background-color: coral;
    height: 30px;
    width: 30px;
    border-radius: 15px;
    color: #fff;
    margin-left: 20px;
    outline: none;
}

</style>