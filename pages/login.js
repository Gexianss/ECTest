import React from 'react'
import Footer from '@/components/layout/footer'
import styles from '@/styles/login.module.css'

export default function login() {
  return (
    <>
      <div className={styles.outer_postion}>
        <form>
          <div>
            <input
              className={styles.box_input}
              type="text"
              placeholder="UserID"
            />
          </div>

          <button className={styles.box_login}>Log in</button>
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
