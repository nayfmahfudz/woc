import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
router.beforeEach(async(to, from, next) => {
  let isAuth = false
  if( localStorage.user){
    isAuth = true
  }
  // mengecek ada tidak meta auth di dalam meta
  if (to.name !== "login" && to.name !== "home") {
    if (isAuth) {
      if(to.name !== "login"){
 next();
      }else{
 next("/admin")
      }
   
    } else{ next("/login");}
    }else {
       if (isAuth) {
      if(to.name !== "login"){
 next();
      }else{
 next("/admin")
      }
   
    } else{ next();}
    }
});
export default router