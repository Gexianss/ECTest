import React, { useEffect, useState } from 'react'
import { useAuthContext } from '@/context/authContext'
import Footer from '@/components/layout/footer'
import styles from '@/styles/login.module.css'
import { useRouter } from 'next/router'

export default function Login() {
  const router = useRouter()
  // 將userId傳到context儲存，維持狀態
  const { setUserId } = useAuthContext()
  const [users, setUsers] = useState([])
  const [userId, setLocalUserId] = useState('')
  // 呼叫API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setUsers(json))
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    // 比對資料後端資料，查看是否有此會員
    const user = users.find((user) => user.id.toString() === userId)

    if (user) {
      setUserId(userId)
      alert('Login successful!')
      // 成功後轉跳頁面
      router.push('/album')
    } else {
      alert('Invalid UserID. Please try again.')
    }
  }

  return (
    <>
      <div className={styles.outer_postion}>
        {/* 使用表格Submit處理登入事件 */}
        <form onSubmit={handleLogin}>
          <div>
            <input
              className={styles.box_input}
              type="text"
              placeholder="UserID"
              value={userId}
              onChange={(e) => setLocalUserId(e.target.value)}
            />
          </div>
          <button type="submit" className={styles.box_login}>
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
