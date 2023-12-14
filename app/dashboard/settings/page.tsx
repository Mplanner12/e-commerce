import SideMenu from '@/app/components/SideMenu'
import React from 'react'

const page = () => {
  return (
    <div className='flex h-screen bg-gray-100'>
        <SideMenu />

        <main>
            This is my settings
        </main>
    </div>
  )
}

export default page
