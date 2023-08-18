import React, { ReactNode } from 'react'

const DashboardLayout = ({children}: {children: React.ReactNode} ) => {
  return (
    <section>
        <nav className='bg-blue-400' >Eventify Navbar</nav>
        {children}
    </section>
  )
}

export default DashboardLayout