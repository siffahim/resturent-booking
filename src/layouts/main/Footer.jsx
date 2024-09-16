import React from 'react'
import logo from '../../assets/footer-logo.png'
import { Facebook, Instagram, Twitch, Twitter } from 'lucide-react'

export default function Footer() {
  const socialLinks = [{
    icon: <Instagram />,
    path: "www.instragram.com"
  },
  {
    icon: <Facebook />,
    path: "www.facebook.com"
  },{
    icon: <Twitter />,
    path: "www.twitter.com"
  }]
  return (
    <div className='bg-blackie text-white px-10 py-10'>
      <div className='flex items-center justify-between'>
        <img src={logo} alt="" />
        <div className='flex gap-10'>
            <div>
            <h2>Follow us</h2>
            <div className='flex itmes-cneter gap-4'>
              {
                socialLinks.map((item,index)=> <div className='w-8 h-8 flex items-center justify-center bg-base text-blackie rounded'>
                <a href={item.path} target='_blank'>{item.icon}</a>
              </div>)
              }
            </div>
            </div>
            <div>
            <h2>Call Us</h2>
            <h2>01515210524</h2>
            </div>
        </div>
      </div>
      <p className='w-2/4'>The Food we had enjoyed at the time of dinner. It was really delicious taste with great quality, everything had unique taste which we had ordered, nice arrangement and services from the staff while eating, we found nothing bad about this hotel.</p>
    </div>
  )
}
