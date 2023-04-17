import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <>
    <nav>
      <ul>
       <link href="/"> <li>HOME</li></link>
       <link href="/About"><li>ABOUT</li></link>  
       <link href="/Services"><li>SERVICES</li></link>  
        <link href="/Contact"><li>CONTACT</li></link>
      </ul>
      </nav>
    </>
    
  )
}

export default Header