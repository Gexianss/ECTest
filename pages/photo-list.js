import React from 'react'
import Header from '@/components/layout/header'
import TabBar from '@/components/layout/tab-bar'
import Photo from '@/components/album/photo'
import { useRouter } from 'next/router'
import styles from '../styles/photoList.module.css'

export default function PhotoList() {
  const router = useRouter()
  const { albumId, albumTitle } = router.query

  return (
    <>
      <Header />
      <p className={styles.p_title}>{decodeURIComponent(albumTitle)}</p>
      <Photo albumId={albumId} />

      <TabBar />
    </>
  )
}
