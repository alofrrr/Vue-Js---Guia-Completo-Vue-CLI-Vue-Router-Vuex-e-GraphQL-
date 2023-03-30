
<template>
  <div class="contadores">
    <app-contador v-for="c in 5" :key="c"/>
  </div>
</template>

<script>
import MeuContador from './MeuContador.vue'

export default {
    components: {
        'app-contador': MeuContador
    }

}
</script>

<style>

</style>