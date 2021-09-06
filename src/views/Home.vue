<template>
  <div class="home">
      <div>
          test:
      </div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  inject:['boardService'],
  components: {
    HelloWorld
  },
    computed: {
    },
    async created() {
      console.log('>>== created');
      //const resp = await this.boardService.getBoardList('aa','');


    }

}
</script>
