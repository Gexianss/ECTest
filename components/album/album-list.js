import React, { useEffect, useState } from 'react'
import { useAuthContext } from '@/context/authContext'
import styles from './albumList.module.css'
import { LiaBookmarkSolid } from 'react-icons/lia'
import Image from 'next/image'

export default function AlbumList() {
  const { userId } = useAuthContext()
  // const { setAlbumId } = useAlbumContext()
  // const { setAlbumTitle } = useAlbumContext()

  const [albums, setAlbums] = useState([])
  const [photos, setPhotos] = useState([])
  const [showPhotos, setShowPhotos] = useState(false)

  // 如果螢幕寬度小於320就設定為true
  const updateShowPhoto = () => {
    setShowPhotos(window.innerWidth <= 320)
  }

  // 依照螢幕寬度調整顯示圖片張數
  const getPhotoSlice = (albumId) => {
    // 抓取此相簿裡面的相片
    const filterPhoto = photos.filter((photo) => photo.albumId === albumId)
    // 如果螢幕<=320則顯示1張反之4張
    return showPhotos ? filterPhoto.slice(0, 1) : filterPhoto.slice(0, 4)
  }

  // 抓取使用者的相簿
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then((response) => response.json())
      .then((json) => setAlbums(json))
  }, [userId])

  // 抓取所有圖片
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then((response) => response.json())
      .then((json) => setPhotos(json))
  }, [])

  useEffect(() => {
    // 第一次loading的時候先update
    updateShowPhoto()
    // 監聽螢幕變化
    window.addEventListener('resize', updateShowPhoto)
    // 在結束後移除監聽事件
    return () => {
      window.removeEventListener('resize', updateShowPhoto)
    }
  }, [])

  return (
    <>
      <div>
        {albums.map((album) => (
          <div key={album.id}>
            <div className={styles.box_album_title}>
              <div className={styles.flex_icon}>
                <LiaBookmarkSolid size={25} color="gray" />
              </div>

              <a href="#" className={styles.link}>
                <p className={styles.p_album_title}>{album.title}</p>
              </a>
            </div>

            <div className={styles.card_list}>
              {getPhotoSlice(album.id).map((photo) => (
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
    </>
  )
}
