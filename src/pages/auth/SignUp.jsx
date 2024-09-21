import React from 'react'
import Input from '../../components/shared/Input'
import Button from '../../components/shared/Button'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div>
      <div>
      <img src="" alt="" />
     <div className='space-y-5'>
     <Input title="First Name" type="text" onBlur={(e) => console.log(e.target.value)} />
     <Input title="Email" type="text" onBlur={(e) => console.log(e.target.value)} />
      <Input title="Password" className="" type="password" onBlur={(e) => console.log(e.target.value)} />
      <Button className="" >Sign Up</Button>
     </div>
      <p>I already have an account? <span className='text-primary'><Link to="/auth/login">Sign In</Link></span></p>
    </div>
    </div>
  )
}
