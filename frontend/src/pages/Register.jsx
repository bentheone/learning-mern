import React from 'react'
import { useState, useEffect } from 'react'
import {FaUser} from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import {register, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const {name, email, password, password2} = formData
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user, isLoading, isError, isSuccess, message} = useSelector(
    (state) => state.auth
  )

  useEffect(()=>{
    if(isError) {
      toast.error(message)
    }

    if(isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,

    }))
  }
  const onSubmit = (e) => {
    e.preventDefault()

    if(password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name, email, password
      }

      dispatch(register(userData))
    }
  }

  if(isLoading) {
    return <Spinner/>
  }

  return (
    <div>
      <section className="heading">
        <h1>
          <FaUser/> Register
        </h1>
          <p>Please create an account</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
          <input
           type="text"
           className="form-control" 
           id='name' value={name} 
           placeholder='Enter your name' 
           name='name' 
           onChange={onChange}/>

          </div>
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
          <input
           type="password"
           className="form-control" 
           id='password2' value={password2} 
           placeholder='Comfirm password' 
           name='password2' 
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

export default Register