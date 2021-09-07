<template>
  <div class="home">
      <div>
          test: {{name}} <br/>
          {{accountName}}
      </div>
      <div>
        <input v-model="localName" />
        <button @click="onClickChange">change name</button>
      </div>

<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {mapMutations, mapState} from "vuex";

export default {
    name: 'Home',
    inject:['boardService'],
    components: {
      // eslint-disable-next-line vue/no-unused-components
      HelloWorld
    },
    data() {
      return {
        localName: 'test',
      }
    },
    computed: {
      ...mapState('account', ['name']),
      ...mapState('account', { accountName: state => state.name}),
    },
    async created() {
      console.log('>>== created');
      //const resp = await this.boardService.getBoardList('aa','');
    },
    methods: {
      ...mapMutations('account', ['setName']),
      onClickChange() {
        this.setName(this.localName);
      }
    }

}
</script>
