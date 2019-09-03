<template>
    <div class="main3">
      <img src="~/assets/images/papa.gif" alt="">
    <input id="password-field" type='password'  class='form-control' required v-model='password'  placeholder='password' name='username'>    
    <input id='button' type='checkbox' @click='passwordchecking'><center><h4>show password</h4></center>    
    <button  class='btn btn-outline-success' @click='conformpassword'>CLICK</button>
    <div class='color'><br>
      <center><h5>{{verifypassword}}</h5></center>
    </div>
    </div>
</template>

<script>
import store from '~/store'
import { mapState } from 'vuex'
export default {
  name: 'main4',
  store,
  data () {
    return {
      password: '',
      token: ''
    }
  },
  mounted () {
    this.token = this.$route.params.veryfyforgetpass
  },
  computed: {
    ...mapState([
      'verifypassword'
    ])
  },
  methods: {
    conformpassword () {
      let vv = {
        password: this.password,
        token: this.token
      }
      console.log(vv.password)
      console.log(vv.token)
      this.$store.dispatch('forgetnewpassword', { user: vv, router: this.$router })
      console.log('cccccccc', vv)
    },
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
.main3 {
  position:fixed;
}
.main3 img {
       margin-left: 475px;
    border-radius: 900px;
    width: 270px;
    margin-top: 80px;

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
    margin-top: 18px;
    width: 202px;
}
.color h4 {
  color:white;;
    
}
#button {
  margin-top:15px;
}
h4{
    color: white;
    font-size: 18px;
      margin-left: 406px;
}
h5{
      color: white;
    margin-left: 410px;
}
</style>