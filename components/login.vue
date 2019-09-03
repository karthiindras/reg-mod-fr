<template>
  <div class="main1" style="min-height: 170px;">
    <form @submit.prevent="inserted">
      <center><h2>REGISTRATION FORM</h2></center>
      <label for="name">Name :</label>
      <input
        type="text"
        id="name"
        required
        v-model="student.name"
        name="name"
        placeholder="Enter your name"
      />
      <br />
      <label for="email">Email : </label>
      <input 
        type="email"
        id="email"
        required
        v-model="student.email"
        name="email"
        placeholder="Enter your email"
      />
      <center><p>{{done1}}</p></center>
      <label for="passord">Password :</label>
      <input
        type="password"
        name="password"
        minlength="3"
        id="password"
        v-model="student.password"
        maxlength="100"
        required
        placeholder="Enter your password"
      />
      <br />
      <label for="cp">Conform Password :</label>
      <input
        type="password"
        name="cp"
        minlength="3"
        maxlength="100"
        id="conformpassword"
        v-model="student.conformpassword"
        required
        placeholder="Enter your conform password"
      />
      <br />
      <button
      @click="$bvToast.show('example-toast')" variant="primary"
      :disabled="student.password !== student.conformpassword"
      >Click</button>
      <b-toast id="example-toast" title="BootstrapVue" static no-auto-hide>
      {{ msg1 }}
    </b-toast>
    </form>
  </div>
</template>
<script>
import store from '../store'
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
  methods: {
    inserted () {
      this.$store.dispatch('insertUser', this.student)
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
<style>
.main1 {
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-family: Arial, Helvetica, sans-serif;
}
.main1 button {
  width: 100px;
  height: 45px;
}
body {
  background-color: white;
  font-family: Arial, Helvetica, sans-serif;
}
.main1 input {
  padding-left: 10px;
}
.main1 label {
  color: blue;
}
.main1 h2 {
  color: red;
}
#name {
  margin-left: 200px;
}
#email {
  margin-left: 205px;
}
#password {
  margin-left: 145px;
}
#conformpassword {
  margin-left: 20px;
}
.main1 p {
   padding-left: 35px;
}
</style>
