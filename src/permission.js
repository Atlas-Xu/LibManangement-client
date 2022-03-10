import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist

// 全局守卫路由（所有路由跳转请求均需此处进行权限的验证）
router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  // 获取token——从cookies中获取
  const hasToken = getToken()

  // 判断token是否存在
  if (hasToken) {
    // 判断是否是登录，是则转至首页
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
      NProgress.done()
    } else {
      // 从vuex中获取用户的所有权限
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      if (hasRoles) {
        // 有权限直接放行
        next()
      } else {
        try {
          // get user info 从后端服务器获取权限信息,vuex里面的user模块的getInfo
          const { roles } = await store.dispatch('user/getInfo')

          // 动态生成菜单和路由
          const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
          console.log('生成动态路由')
          console.log(accessRoutes)
          let obj = { path: '*', redirect: '/404', hidden: true } // 404需加在路由最后
          accessRoutes.push(obj)
          router.addRoutes(accessRoutes)
          next({ ...to, replace: true })
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken')
          console.log('进入异常')
          // ↓注释,少点没卵用的报错
          // Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    /* has no token*/
    // 不存在token则判断是否在路由白名单中
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
