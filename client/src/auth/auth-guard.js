import { isAuthenticated } from './index'
import router from '../router/index'

export const authGuard = (to, from, next) => {
  // If the user is authenticated, continue with the route
  console.log('authservice', isAuthenticated())
  if (isAuthenticated()) {
    return next()
  }

  // Otherwise, navigate to log in
  router.push({ name: 'Login' })
}
