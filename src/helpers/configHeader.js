import store from '../store'
// Single responsability principle (SOLID)
export default {config : {
    headers:{
      Authorization: 'Bearer ' + store.state.token
  }
  }} 