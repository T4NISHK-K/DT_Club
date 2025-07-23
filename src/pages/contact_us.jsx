import React from 'react'
import { ContactPageOne } from '../components/contact'
import { TubelightNavbar } from '../components/tubelight-navbar.jsx'
import { FooterThree } from '../components/footer'

export function Contact_us() {
  return (
    <div>
        <TubelightNavbar/>
        <ContactPageOne/>
        <FooterThree/>
    </div>
  )
}