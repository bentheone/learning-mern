import React from 'react'
import { useState, useEffect } from 'react'
import {FaSignInAlt} from 'react-icons/fa'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const {email, password} = formData
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,

    }))
  }
  const onSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div>
      <section className="heading">
        <h1>
          <FaSignInAlt/> Login
          <p>Login and start setting Goals</p>
        </h1>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
          <input
           type="email"
           className="form-control" 
           id='email' value={email} 
           placeholder='Enter your email' 
           name='email' 
           onChange={onChange}/>

          </div>
          <div className="form-group">
          <input
           type="password"
           className="form-control" 
           id='password' value={password} 
           placeholder='Enter your password' 
           name='password' 
           onChange={onChange}/>

          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Login