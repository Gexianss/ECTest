import React, { useState, useEffect } from 'react'
import { useAlbumContext } from '@/context/albumContext'
export default function PhotoList() {
  const { albumId } = useAlbumContext()
  const { albumTitle } = useAlbumContext()
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => response.json())
      .then((json) => setPhotos(json))
  }, [albumId])
  return (
    <>
      <div>{albumTitle}</div>
      <div>{photos}</div>
    </>
  )
}
