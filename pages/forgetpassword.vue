<template>
    <div class="main3">
      <img src="../assets/images/img_avatar2.png" alt="">
     <!-- <label for="email">Email :</label> -->
    <input type='text'  class='form-control' required v-model='student.email'  placeholder='Email' id='usr' name='username'>    
    <button  class='btn btn-outline-success' @click='inserted_email'>CLICK</button>
    <div class='color' v-if="emailres1 === 'email success'"><br>
      <center><h5>{{emailres1}}</h5></center>
      <!-- {{emailres1}} -->
      <img src="../assets/images/gif.gif">
    </div>
    <div class="color" v-else-if="emailres1 === 'please try again....'"><br>
      <center><h5>{{emailres1}}</h5></center>
      <img src="../assets/images/ii.gif">
      </div>
    </div>
</template>
<script>
import store from '../store'
import { mapState } from 'vuex'
export default {
  name: 'main3',
  store,
  data () {
    return {
      student: {
        email: '',
        token: ''
      }
    }
    // mounted () {
  //   this.token = this.$route.params.veryfyforgetpass
  // },
  },
  methods: {
    inserted_email () {
      this.$store.dispatch('insertemail', this.student)
      console.log(this.student)
    }
  },
  computed: {
    ...mapState({emailres1: 'emailres'})
  }
}
</script>

<style scoped>
.main3 {
  position:fixed;
}
.main3 img {
       margin-left: 475px;
    border-radius: 900px;
    width: 270px;
    margin-top: 30px;

}
.main3 input {
      margin-top: 40px;
    width: 400px;
    margin-left: 410px;
    /* color:#34393f; */
    background-color: #34393f;
    color: white
}
.main3 button {
      margin-left: 510px;
    margin-top: 30px;
    width: 202px;
}
.color h5 {
  color:white;;
      margin-left: 430px;
}
.color img {
  width:150px;
  background-color:#34393f; 
      margin-left: 540px;

}
</style>