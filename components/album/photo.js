import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './photo.module.css'
import PictureModal from './picture-modal'

export default function PhotoList({ albumId }) {
  const [photos, setPhotos] = useState([])
  const [selectPhoto, setSelectPhoto] = useState(null)

  const openModal = (photo) => {
    setSelectPhoto(photo)
  }

  const closeModal = () => {
    setSelectPhoto(null)
  }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => response.json())
      .then((json) => setPhotos(json))
  }, [albumId])

  console.log(selectPhoto)

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
              onClick={() => openModal(photo)}
            />
          </div>
        ))}
      </div>
      {selectPhoto && (
        <PictureModal
          isOpen={true}
          onRequestClose={closeModal}
          photo={selectPhoto}
        />
      )}
    </>
  )
}
