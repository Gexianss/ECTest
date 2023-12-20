import React, { useEffect, useState } from 'react'
import { useAuthContext } from '@/context/authContext'
import Footer from '@/components/layout/footer'
import styles from '@/styles/login.module.css'
import { useRouter } from 'next/router'

export default function Login() {
  const router = useRouter()

  const { setUserId } = useAuthContext()
  const [users, setUsers] = useState([])
  const [userId, setLocalUserId] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setUsers(json))
  }, [])

  const handleLogin = () => {
    const user = users.find((user) => user.id.toString() === userId)

    if (user) {
      setUserId(userId)
      alert('Login successful!')
      router.push(`/album-list`)
    } else {
      alert('Invalid UserID. Please try again.')
    }
  }

  return (
    <>
      <div className={styles.outer_postion}>
        <form>
          <div>
            <input
              className={styles.box_input}
              type="text"
              placeholder="UserID"
              value={userId}
              onChange={(e) => setLocalUserId(e.target.value)}
            />
          </div>
          <button className={styles.box_login} onClick={handleLogin}>
            Log in
          </button>
          <p className={styles.box_p}>Don’t have an account?</p>
        </form>
        <div className={styles.button_flex}>
          <button className={styles.box_button}>Register</button>
          <button className={styles.box_button}>Continue with Google</button>
        </div>
      </div>
      <Footer />
    </>
  )
}
