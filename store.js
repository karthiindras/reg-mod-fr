import Vue from 'vue'
// import BootstrapVue from 'bootstrap-vue'
// import VueParticles from 'vue-particles'
import Vuex from 'vuex'
import axios from 'axios'
import { ToastPlugin } from 'bootstrap-vue'
// import Vue from 'vue'
// import mdbvue from 'mdbvue'
// Vue.use(mdbvue)
// import router from 'vue-router'
// Vue.use(router)
// import bootstrap from 'bootstrap-vue'
// Vue.use(VueParticles)
Vue.use(ToastPlugin)
// Vue.use(bootstrap)
Vue.use(Vuex)
Vue.use(axios)
export default new Vuex.Store({
  state: {
    students: [],
    student: [],
    msg: '',
    backendMsg: '',
    backendMsgres: '',
    emailres: '',
    verifypassword: '',
    resres: ''
    // count: 1
  },
  mutations: {
    insertStudent (state, payload) {
      // console.log(payload)
      state.students.push(payload)
      // if (state.student < 1) {
      //   state.student.push('success')
      // }
    },
    errorstudent (state, payload) {
      state.msg = payload
      // // if (state.student < 1) {
      // console.log('user already exists')
      // console.log(payload)
      // return state.student.push(payload)
      // // }
    },
    successstudent (state, payload) {
      state.msg = payload
      // return state.student.push('registered success')
      //     }
    // }
    },
    alreadyregister (state, payload) {
      state.backendMsg = payload
    },
    logindetail (state, payload) {
      state.backendMsgres = payload
      console.log('**********************//////////', payload.data)
    },
    emailcheck (state, payload) {
      state.emailres = payload
    },
    verifyyy (state, payload) {
      console.log('payload comming', payload)
      state.verifypassword = payload
    },
    correct (state, payload) {
      state.resres = payload
    }
  },
  getters: {
    done (state) {
      let arraytt = state.student[state.student.length - 1]
      console.log(state.student.length)
      // let arraytt = state.student.length - 1
      return arraytt
    }
  },
  actions: {
    insertUser ({
      commit
    }, data) {
      let res = {
        msg: ''
      }

      axios
        .post('http://localhost:4009/register', data)
        .then(
          indata => {
            // console.log('Inserted', indata.data.data)
            if (indata.data.data === 'Registered Success') {
              console.log(indata.data.data)
              commit('insertStudent', indata.data.data)
              console.log('varudha')
              res.msg = indata.data.data
              commit('successstudent', res.msg)
            } else {
              console.log('bad very bad', indata.data.data)
              res.msg = indata.data.data
              commit('errorstudent', res.msg)
            }
          })
    },
    outdata ({commit}, data) {
      // console.log('mbcjhvbcjvhbcjvbvjvkbvjcxnnvcxv', router)
      let acitiveRes = {
        backendMsg: ''
      }
      // console.log('data-------->', token1)
      axios
        .post('http://localhost:4009/tokenbackend', { active: data })
        .then(
          indataa => {
            // if (indataa.data.data === 'kk successfull') {
            console.log('data', indataa.data.data)
            acitiveRes.backendMsg = indataa.data.data
            commit('alreadyregister', acitiveRes.backendMsg)
          }
          // }
        ).catch(err => {
          console.log('the back end err ', err)
          acitiveRes.backendMsg = err
          commit('alreadyregister', acitiveRes.backendMsg)
        })
      console.log('any')
      // console.log(data)
    },
    insertUsered ({ commit }, { user, router }) {
      console.log('jvjjvbbchjvbhcjvbhcxvbv', user)
      let acitiveResponse = {
        backendMsgres: ''
      }
      axios
        .post('http://localhost:4009/login_register', user)
        .then(
          inoudata => {
            console.log('=============>', inoudata.data.data)
            acitiveResponse.backendMsgres = inoudata.data.data
            console.log('yyyyyyyyyyyy', inoudata.data.data.data)
            localStorage.setItem('token', inoudata.data.data.token)
            if (inoudata.data.data.data === 'login successfull') {
              router.push('/welcome')
            } else {
              console.log('Please fil the email and password')
            }
            console.log('uytrewq', inoudata.data.data.token)
            // localStorage.setItem('token11', inoudata.data.data.token)
            // localStorage.setItem('hi', inoudata.data.data.token)
            console.log('ttttttttttttttt', inoudata.data.data.data)
            console.log('ttttttttttttttt', inoudata.data.data.token)
            console.log('checking------------------->', acitiveResponse.backendMsgres)
            commit('logindetail', acitiveResponse.backendMsgres)
          }
        ).catch(err => {
          acitiveResponse.backendMsgres = err
          console.log('checking------------------->', acitiveResponse.backendMsgres)
          commit('logindetail', acitiveResponse.backendMsgres)
        })
    },
    insertemail ({ commit }, data) {
      console.log('----======>', data)
      let emailresponse = {
        emailres: ''
      }
      axios.post('http://localhost:4009/forget_register', data)
        .then(
          emailverify => {
            emailresponse.emailres = emailverify.data.data
            console.log('one more =================>', emailresponse.emailres)
            commit('emailcheck', emailresponse.emailres)
          }
        ).catch(err => {
          emailresponse.emailres = err
          console.log('one more =================>', emailresponse.emailres)
          commit('emailcheck', emailresponse.emailres)
        })
      // emailresponse.emailres = data
    },
    forgetnewpassword ({ commit }, { user, router }) {
      console.log('ssseeeee', user)
      console.log('ssssssssss', router)
      let verify = {
        verifypassword: ''
      }
      axios
        .post('http://localhost:4009/forget_new_password', user)
        .then(
          emailandpassword => {
            verify.verifypassword = emailandpassword.data.data
            console.log('jjjjjjjjjjjjjjjjjjjjjjjjj', verify.verifypassword)
            if (verify.verifypassword === 'kk successfull change') {
              router.push('/loginform')
            } else {
              console.log('Please fil the email and password')
            }
            commit('verifyyy', verify.verifypassword)
          }
        ).catch(err => {
          verify.verifypassword = err
          console.log('lllllllllllllllllllllllll', verify.verifypassword)
          commit('verifyyy', verify.verifypassword)
        })
      // console.log('token-------->', gg)
      // console.log('data-------------->', data)
    },
    onemoreverify ({ commit }, data) {
      let checkHeader = {
        headers: {
          authendication: localStorage.getItem('token')
        }
      }
      console.log('@@@@', checkHeader)
      // let checkSession = {
      //   session: {
      //     views: localStorage.getItem('token')
      //   }
      // }
      axios
        // .post(`http://localhost:4009/welcome_controller/${data}`, {}, {check: checkHeader, session: checkSession})
        .post(`http://localhost:4009/welcome_controller/${data}`, {}, checkHeader)
        .then(
          successtoken1 => {
            // console.log('dddddddddddddddd', successtoken1.msg)
            var kkk = successtoken1.data.msg
            console.log('777777777777777777777', kkk)
            commit('correct', kkk)
          }
        )
    }
  }
})
