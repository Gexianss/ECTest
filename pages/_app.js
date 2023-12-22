import '@/styles/globals.css'
import { AuthProvider } from '../context/authContext'

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      <AuthProvider initialUserId="">
        {getLayout(<Component {...pageProps} />)}
      </AuthProvider>
    </>
  )
}
