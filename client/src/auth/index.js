import auth0 from 'auth0-js'
import { authConfig } from '../config'
import router from '../router/index'

const options = {
  domain: authConfig.domain,
  clientID: authConfig.clientId,
  redirectUri: authConfig.callbackUrl,
  responseType: 'token id_token',
  scope: 'openid'
}

const auth0client = new auth0.WebAuth(options)

let accessToken
let idToken
let expires

export function login () {
  auth0client.authorize()
}

export function handleAuthentication () {
  auth0client.parseHash((err, authResult) => {
    if (authResult && authResult.accessToken && authResult.idToken) {
      console.log('Access token: ', authResult.accessToken)
      console.log('id token: ', authResult.idToken)
      setSession(authResult)
    } else if (err) {
      console.log(err)
      alert(`Error: ${err.error}. Check the console for further details.`)
    }
  })
}

export function getAccessToken () {
  return accessToken
}

export function getIdToken () {
  return idToken
}

export function expireAt () {
  return expires
}

function setSession (authResult) {
  // Set isLoggedIn flag in localStorage
  localStorage.setItem('isLoggedIn', 'true')

  // Set the time that the access token will expire at
  const expiresAt = (authResult.expiresIn * 1000) + new Date().getTime()
  accessToken = authResult.accessToken
  idToken = authResult.idToken
  expires = expiresAt

  // navigate to the home route
  router.push({ name: 'Home' })
}

export function isAuthenticated () {
  // Check whether the current time is past the
  // access token's expiry time
  const expiresAt = expires
  return new Date().getTime() < expiresAt
}
