import React from 'react'
import Input from '../../components/shared/Input'
import Button from '../../components/shared/Button'
import { Link } from 'react-router-dom'

export default function Login() {
  const handleClick = () =>{
   alert("Sign In")
  }
  return (
    <div>
      <img src="" alt="" />
     <div className='space-y-5'>
     <Input title="Email" type="text" onBlur={(e) => console.log(e.target.value)} />
      <Input title="Password" className="" type="password" onBlur={(e) => console.log(e.target.value)} />
      <Button className="" onClick={handleClick}>Sign In</Button>
     </div>
     <p>I haven't an account? <span className='text-primary'><Link to="/auth/sign-up">Sign Up</Link></span></p>
    </div>
  )
}
