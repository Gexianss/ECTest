import { createContext, useContext, useState } from 'react'

const albumContext = createContext(null)

export const AlbumProvider = ({ children }) => {
  const [albumId, setAlbumId] = useState()
  const [albumTitle, setAlbumTitle] = useState()

  const albumValue = {
    albumId,
    setAlbumId,
    albumTitle,
    setAlbumTitle,
  }

  return (
    <albumContext.Provider value={{ albumValue }}>
      {children}
    </albumContext.Provider>
  )
}

export const useAlbumContext = () => useContext(albumContext)
