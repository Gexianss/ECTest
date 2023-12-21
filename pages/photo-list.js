import React from 'react'
import Header from '@/components/layout/header'
import TabBar from '@/components/layout/tab-bar'
import { useAuthContext } from '@/context/authContext'

export default function PhotoList() {
    const {userId} = useAuthContext()
    // const {albumId} = 

  return (
    <>
      <Header />
      <p>quidem molestiae enim</p>
      
      <TabBar />
    </>
  )
}
