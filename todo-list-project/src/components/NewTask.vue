<template>
    <div class="new-task">
        <input v-model="name" @keydown.enter="addTask" type="text" placeholder="New Task?" class="form-element" />
        <button class="form-element" @click="addTask">+</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            name : ''
        }
    },
    methods: {
        addTask() {
            this.$emit('taskAdded', { name: this.name })
            this.name = ''
        }
    }

}
</script>

<style>

.new-task{
    margin: 35px;
}

.form-element{
    font-size: 1.6rem;
    padding: 5px 10px 8px;
    border: 1px solid #FFF;
    outline: none;
}

input.form-element{
    width: 500px;
    background: #FFF2;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    color: #FFF;
}

button.form-element{
    border-left: none;
    background-color: cadetblue;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
}

</style>