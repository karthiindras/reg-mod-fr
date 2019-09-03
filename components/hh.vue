<template>
  <div class="main1" style="min-height: 170px;">
    <divn class="main2"></divn>
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
      <button
      @click="$bvToast.show('example-toast')" variant="primary"
      :disabled="student.password !== student.conformpassword"
      >Register</button> 
      <b-toast id="example-toast" title="BootstrapVue" static no-auto-hide>
      {{ msg1 }}
    </b-toast>
    </form>
  </div>
</template>