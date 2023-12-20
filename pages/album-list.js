import React, { useEffect, useState } from 'react'
import { useAuthContext } from '@/context/authContext'
import Header from '@/components/layout/header'
import TabBar from '@/components/layout/tab-bar'
import styles from '@/styles/albumList.module.css'
import { TiArrowForwardOutline } from 'react-icons/ti'
import { LiaBookmarkSolid } from 'react-icons/lia'
import Image from 'next/image'

export default function AlbumList() {
  const { userId } = useAuthContext()
  const [user, setUser] = useState(null)
  const [albums, setAlbums] = useState([])
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    if (userId) {
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => response.json())
        .then((json) => setUser(json))
    }
  }, [userId])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then((response) => response.json())
      .then((json) => setAlbums(json))
  }, [userId])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then((response) => response.json())
      .then((json) => setPhotos(json))
  }, [])
  return (
    <>
      <Header />
      <div className={styles.user_info}>
        <p className={styles.p_name}>{user ? user.name : 'Loading...'}</p>
        <a href={`mailto:${user ? user.email : ''}`} className={styles.a_email}>
          <div className={styles.flex_icon}>
            <TiArrowForwardOutline size={20} color="white" />
          </div>
          <p className={styles.p_email}>{user ? user.email : ''}</p>
        </a>
      </div>
      <div>
        {albums.map((album) => (
          <div key={album.id}>
            <div className={styles.box_album_title}>
              <div className={styles.flex_icon}>
                <LiaBookmarkSolid size={25} color="gray" />
              </div>
              <p className={styles.p_album_title}>{album.title}</p>
            </div>
            <div className={styles.card_list}>
              {photos
                .filter((photo) => photo.albumId === album.id)
                .slice(0, 4)
                .map((photo) => (
                  <div key={photo.id} className={styles.card}>
                    <Image
                      src={photo.thumbnailUrl}
                      alt={photo.title}
                      width={455}
                      height={293}
                      style={{ objectFit: 'fill' }}
                    />
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
      <TabBar />
    </>
  )
}
