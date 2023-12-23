import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './photo.module.css'
import PictureModal from './picture-modal'

export default function PhotoList({ albumId }) {
  const [photos, setPhotos] = useState([])
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

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
              onClick={openModal}
            />
            <PictureModal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              photo={photo}
            />
          </div>
        ))}
      </div>
    </>
  )
}
