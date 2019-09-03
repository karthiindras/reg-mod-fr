<template>
    <div class="particles-js">
        <h1 v-if="backend == 'kk successfull'">
    <!-- <img  src='~/assets/images/img_avatar2.png' alt=''> -->
    <!-- <img  src='' alt=''> -->
        <!-- <img src="../as" alt=""> -->
          <h1>Click this button.....</h1>
        <!-- <nuxt-link class="button" to="/loginform">Click This</nuxt-link> -->
    <button  class='btn btn-outline-success' @click='indataa'>CLICK</button>
        </h1>
    </div>
</template>
<script>
    // import login from '~/components/login.vue'
    import store from '~/store'
    import { mapState } from 'vuex'
    // import particles from '~/example.js'
    export default {
      store,
      // particles,
      mounted () {
        console.log('ijhgyuvbhyivfgthbnjikoi9u8y7t6gyhbjnkiou986ygh', this.$route.params.mail)
        var token = this.$route.params.mail
        this.$store.dispatch('outdata', token)
        console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq', this.$router)
      },
      methods: {
        indata () {
          return this.$store.dispatch('indataa')
          // this.$router.push('/loginform')
        },
        indataa () {
          this.$router.push('/loginform')
        }
      },
      computed: {
        ...mapState({
          backend: 'backendMsg'
        })
      }

    }
</script>

<style scoped>
button {
          margin-left: 520px;;
    margin-top: -110px;
    width: 202px;
}
h1{
     padding-top: 120px;
    color: white;
    padding-left: 150px;

}

</style>