// lib/auth0.ts
import { initAuth0 } from '@auth0/nextjs-auth0'

const auth0 = initAuth0({
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
  baseURL: process.env.BASE_URL,
  secret: process.env.AUTH0_SECRET,
})

export default auth0
