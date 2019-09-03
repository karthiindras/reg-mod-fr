<template>
<div class='ll'>
  
  <div class='lll'>
    <div id='particles-js'>
      <!-- <link rel="stylesheet" href="../pages/example.js"> -->
      <!-- <canvas class="particles-js"></canvas> -->
    <h2>Dcrew Technology Soluctions</h2>
    <img  src='../assets/images/lop.svg' alt=''>
    <p></p>
    </div>
  </div>
    <div class='main2'>
    <img src='../assets/images/public_blue_users.png' alt=''>
     <p>LOGIN FORM</p>
    <br>
    <div>
    <input type='text'  class='form-control' required v-model='student.email'  placeholder='Email' id='usr' name='username'>
    </div>
    <br>
    <div>
     <input id='password-field' value='secret' name='password' type='password'  class='form-control'  required v-model='student.password'  placeholder='Password' >
    <input id='button' type='checkbox' @click='passwordchecking'><center><h4>show password</h4></center>
    </div>
    <button  class='btn btn-outline-success' @click='insertUsered'>LOGIN</button> 
      <div class='color'><br>
      <center><h5>{{backendres.data}}</h5></center>
    </div><br>
     <nuxt-link to='/forgetpassword'>Forget password ?</nuxt-link>
     <nuxt-link to='/'>Registration form</nuxt-link>
  </div>
</div>
</template>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r61/three.min.js"></script>
<script>
import store from '../store'
// import axios from 'axios'
// import 'particle.js'
// import particles from 'particles.js'
// import particles from 'particles.js'
import { mapState } from 'vuex'
export default {
  // name: 'main2',
  name: 'ParticlesJS',
  store,
  data () {
    return {
      student: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapState({
      backendres: 'backendMsgres'
    })
  },
  methods: {
    insertUsered () {
      this.$store.dispatch('insertUsered', { user: this.student, router: this.$router })
      // console.log('#####@@@@@@@@', this.student)
      console.log('**********************', this.$store.state.backendMsgres)
    },
    //  initParticles() {
    //   window.particlesJS("particles-js", {/* ... */})
    // },
    passwordchecking () {
      const passwordField = document.querySelector('#password-field')
      if (passwordField.getAttribute('type') === 'password') {
        passwordField.setAttribute('type', 'text')
      } else {
        passwordField.setAttribute('type', 'password')
      }
    }
  }
}
</script>

<style scoped>
.lll h2 {
      margin-left: 80px;
    margin-top: 150px;
    font-style: oblique;
    font-size: 35px;

}
.lll img{
  width: 350px;
  margin-left:125px;
}
.lll{
  width: 50%;
  float: right;
    height:100vh;
    background-color: #59d6b9;
    /* margin-right: 75px;
    margin-top: 250px;   */
}
img {
      width: 250px;
    margin-left: 173px;
    /* background-color: red; */
    margin-top: 40px;
    margin-bottom: 20px;
}
.field-icon {
  float: right;
  margin-left: -25px;
  margin-top: -25px;
  position: relative;
  z-index: 2;
}
.main2 {
  width: 50%;
  height: 100vh;
        position: fixed;
    background-color:  #32425c;
  /* background-image: url('../assets/images/81.jpg'); */   
}
p{
  color: #59d6b9;
    font-size: 24px;
    margin-left: 220px;
}
.main2 h3 {
        margin-left: 200px;
    margin-top: 55px;
    font-size: 25px;
    color: white;
}
.main2 input {
      width: 400px;
    margin-left: 100px;
    color: white;
    
}
.ll input {
  padding-left: 10px;
  background-color: #32425c;
      margin-left: 100px;
}
::placeholder {
  color:white
}
.main2 button {
      margin-left: 100px;
    width: 400px;
        background-color: #58d6b9;
    color: white;
    font-size:18px;
     margin-left: 100px;
     margin-top:10px;
}
.main2 a{
      color: white;
    font-size: 20px;
    margin-left: 85px;
    border-style: none;
}
.main2 small{
  color:black;
}
.color {
  color: red
}
#checkbox {
color: white;
    margin-top: 6px;
  margin-left: -55px;
}
h4{
    color: white;
    font-size: 18px;
}
.main2 h3 {
  color:#318d8e;
  margin-left: 385px;

}
#button {
  margin-top:15px;
}
</style>