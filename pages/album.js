import React, { useState, useEffect } from 'react'
import Header from '@/components/layout/header'
import TabBar from '@/components/layout/tab-bar'
import AlbumList from '../components/album/album-list'
import { TiArrowForwardOutline } from 'react-icons/ti'
import styles from '../styles/album.module.css'
import { useAuthContext } from '@/context/authContext'

export default function Album() {
  const { userId } = useAuthContext()
  const [user, setUser] = useState(null)

  // 抓取使用者的資料
  useEffect(() => {
    if (userId) {
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => response.json())
        .then((json) => setUser(json))
    }
  }, [userId])

  return (
    <>
      <Header />
      {/* userName & userEmail */}
      <div className={styles.user_info_grid}>
        <div></div>
        <div className={styles.user_info}>
          <p className={styles.p_name}>{user ? user.name : 'Loading...'}</p>
          <a
            href={`mailto:${user ? user.email : ''}`}
            className={styles.a_email}
          >
            <div className={styles.flex_icon}>
              <TiArrowForwardOutline size={20} color="white" />
            </div>
            <p className={styles.p_email}>{user ? user.email : ''}</p>
          </a>
        </div>
      </div>
      <AlbumList />
      <TabBar />
    </>
  )
}
