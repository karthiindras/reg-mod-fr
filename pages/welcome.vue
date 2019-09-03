<template>
    <div class="ll" v-if="rr === 'Welcome My page'">    
  <img src="../assets/images/99.gif" alt=""><br>
  <button  class='btn btn-outline-success' @click='logout'>LOGOUT</button>
    </div>
    <div class="llll" v-else>
     <center><h1>Please first login</h1></center>
  <img src="../assets/images/ii.gif" alt=""><br>

    </div>
</template>

<script>
import store from '../store'
import { mapState } from 'vuex'
// import axios from 'axios'
export default {
  store,
  mounted () {
    var temtoken = localStorage.getItem('token')
    console.log('mmmmmmmmmmmmmmmmmm', temtoken)
    this.$store.dispatch('onemoreverify', temtoken)
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/loginform')
      console.log('0000000000000000000000000', this.$store.state.backendMegres)
    }
  },
  computed: {
    ...mapState({ rr: 'resres' })
  }
}
</script>

<style scoped>
.ll img{
  border-radius: 200px;
      margin-left: 385px;
    margin-top: 100px;
}
.ll button {
      margin-top: 40px;
    margin-left: 510px;
    width: 170px;
}
.llll img{
    border-radius: 200px;
      margin-left: 455px;
    margin-top: 100px;
}
.llll h1 {
      color: white;
    padding-top: 40px;
    font-size: 60px;
}
</style>