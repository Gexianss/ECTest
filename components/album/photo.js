import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './photo.module.css'

export default function PhotoList({ albumId }) {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => response.json())
      .then((json) => setPhotos(json))
  }, [albumId])

  return (
    <>
      <div className={styles.card_list}>
        {photos.map((photo) => (
          <div key={photo.id}>
            <Image
              src={photo.thumbnailUrl}
              alt={photo.title}
              width={150}
              height={150}
              className={styles.card}
            />
          </div>
        ))}
      </div>
    </>
  )
}
