import React, { useState } from 'react';
import '../../App.css';
import { useAuth } from '../../context/auth'

export default function SignUp() {
  const { signIn, loading, user } = useAuth()
  const [email, setEmail] = useState('')
  const handleLogin = (e) => {
    e.preventDefault()
    signIn({ email })
  }

  return <div>
    <h1 className='sign-up'>SIGN IN / SIGN UP</h1>
    {loading ? (
        'Sending magic link...'
      ) : (
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className="inputField"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="button block" aria-live="polite">
            Send magic link
          </button>
        </form>
      )}
  </div>;
}
