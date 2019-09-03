<template>
  <div class="main1">
    <form>
      <h2>REGISTRATION FORM</h2>
      <!-- <label for="name">Name :</label>
      <input
        type="text"
        id="name"
        requiredss
        v-model="student.name"
        name="name"
        placeholder="Enter your name"
      />
      <br />text
      <br /> -->
      <label for="email">Email :</label>
      <input
        type="email"
        id="email"
        required
        v-model="student.email"
        name="email"
        placeholder="Enter your email"
      />
      <br />
      <br />
      <label for="passord">Password :</label>
      <input
        type="password"
        name="password"
        minlength="3"
        id="password"
        v-model="student.password"
        maxlength="12"
        required
        placeholder="Enter your password"
      />
      <!-- <br />
      <br />
      <label for="cp">Conform Password :</label>
      <input
        type="password"
        name="cp"
        minlength="3"
        maxlength="12"
        id="conformpassword"
        v-model="student.conformpassword"
        required
        placeholder="Enter your conform password"
      />regform -->
      <br />
      <br />
      <button
        name="btn-name"
        :disabled="student.password !== student.conformpassword"
        @click="inserted" 
      >Click</button>
      <!-- $('button[name='']') -->
    </form>
  </div>
</template>
<script>
// import func from '../'vue-temp/vue-editor-bridge'

import store from '../store'
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
  //   computed: {
  //   ...mapState({ students: 'students' })
  // },
  methods: {
    inserted () {
      // console.log(student)
      this.$store.dispatch('insertUser', this.student)
    }
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
  height: 25px;
}
body {
  background-color: black;
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
</style>
