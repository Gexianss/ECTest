import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './photo.module.css'
import PictureModal from './picture-modal' 

export default function PhotoList({ albumId }) {
  const [photos, setPhotos] = useState([])
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => response.json())
      .then((json) => setPhotos(json))
  }, [albumId])

  const openModal = (photo) => {
    setSelectedPhoto(photo)
  }

  const closeModal = () => {
    setSelectedPhoto(null)
  }

  return (
    <>
      <div className={styles.card_list}>
        {photos.map((photo) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
          <div key={photo.id} onClick={() => openModal(photo)}>
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

      {selectedPhoto && (
        <PictureModal photo={selectedPhoto} onClose={closeModal} />
      )}
    </>
  )
}
