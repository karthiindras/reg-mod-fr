
 <template>
   <div class="main1">
      <div class="backgroundOpacity"></div>

     <div class="main2">
      <div class="hexagon">
        <center><H5>ALREADY YOU HAVE REGISTERED ?</H5></center> 
        <center><button  class="btn btn-outline-success"><nuxt-link to="/loginform">LOGIN</nuxt-link></button></center>
      </div>
     </div>
     
     <div class="main3">
       <form @submit.prevent="inserted">
      <center><h2>REGISTER</h2></center>
     <center> <p>IT'S COMPLATELY FREE</p></center>
      <label for="example1">NAME</label>
    <input type="text" id="example1"  placeholder="Name" required v-model="student.name" class="form-control">
        <label for="example2">EMAIL</label>
    <input type="email" id="example2"  placeholder="Email" required v-model="student.email" class="form-control">
        <label for="example3">PASSWORD</label>
    <input type="password" id="example3"  placeholder="Password" required v-model="student.password" class="form-control">
        <label for="example4">CONFORM PASSWORD</label>
    <input type="password" id="example4" placeholder="Conform password" required v-model="student.conformpassword" class="form-control">
      <br>
      <button  class="btn btn-outline-success"
      @click="$bvToast.show('example-toast')"
      :disabled="student.password !== student.conformpassword"
      >CREATE ACCOUNT</button> 
      <b-toast id="example-toast" title="Registration result" static no-auto-hide>
     {{msg1}}
    </b-toast>
    </form>
     </div>
   </div>
 </template>
<script>
import store from '../store'
// import { mdbNavbar, mdbBtn, mdbFormInline, mdbInput } from 'mdbvue'
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'main1',
  store,
  data () {
    return {
      student: {
        name: '',
        email: '',
        password: '',
        conformpassword: ''
      }
    }
  },
  // components: {
  //   mdbNavbar,
  //   mdbBtn,
  //   mdbFormInline,
  //   mdbInput
  // },
  methods: {
    inserted () {
      this.$store.dispatch('insertUser', this.student)
    },
    loginverify () {
      this.$router.push('/loginform')
    }
  },
  computed: {
    ...mapGetters({done1: 'done'}),
    ...mapState({
      msg1: 'msg'
    })
  }
}
</script>
<style scoped>
.main2{
  padding-bottom: 140px;
padding-top:50px;
  width:50%;
  height:100vh;
  background-size: cover;
  background-image: url('../assets/images/81.jpg');
  
} 
.hexagon h5{
  transform: rotate(-30deg);
    color: white;
      padding-right: 60px;
  
}
.backgroundOpacity {
  background-color: #60e4c2;
  position: absolute;
  /* position: relative; */
 
}
  .hexagon {
  position: relative;
  width: 300px; 
  height: 173.21px;
  background-color: #32425c;
  margin: 86.60px 0;
  margin-left: 140px;
    margin-top: 230px;
    transform: rotate(30deg);
}

.hexagon:before,
.hexagon:after {
  content: "";
  position: absolute;
  width: 0;
  border-left: 150px solid transparent;
  border-right: 150px solid transparent;
}

.hexagon:before {
  bottom: 99.100%;
  border-bottom: 86.60px solid #32425c;
  
}

.hexagon:after {
  top: 99.59%;
  width: 0;
  border-top: 86.60px solid #32425c;
}
.main3 {
  width:50%;
  float: right;
  font-size: 30px;
  font-family: Arial, Helvetica, sans-serif;
  background-color:#32425c;
  padding-top:55px;
}
.main3 input {
      width: 400px;
    margin-left: 100px;
}
.main3 label {
  margin-left:100px;
}
.main3 button {
      margin-left: 100px;
    width: 400px;
        background-color: #58d6b9;
    color: white;
    font-size:15px;
     margin-left: 110px;
}
.main1 h2 {
  font-size: 30px;
}
.main1 p{
  font-size: 16px;
  padding-right:35px;
  color:#57ede8
}
body {
  background-color:white;
 
}
.main1 input {
  padding-left: 10px;
  background-color: #32425c;
  color: black;
      margin-left: 110px;
}
.main1 label {
  color:white;
  font-size: 15px;
      margin-left: 110px;
}
.main1 h2 {
  color:white;
}
.hexagon button {
      font-size: 16px;
    transform: rotate(-30deg);
    width: 150px;
    height: 35px;
    margin-top: 40px;
    margin-left: 40px;
    background-color: #59d6b9; 
       
}
.hexagon a {
  color: white;
}

</style>
