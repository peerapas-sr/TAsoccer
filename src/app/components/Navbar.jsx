import React from 'react'
import Link from 'next/link'
function Navbar() {
  return (
    <nav>
      <div className="container mx-auto">
        <div className = 'flex justify-between items-center py-2'>
            <div>
                <Link href="/">NextAuth</Link>
                </div>
            <ul className = 'flex'>
                <li className = 'mx-3'><Link href="/login">Sign In</Link></li>
                <li><Link href="/register">Sign Up</Link></li>
            </ul>
        </div>
      </div>
    </nav>
  )
}


export default Navbar