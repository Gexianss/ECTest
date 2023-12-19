import React from 'react'
import Header from '@/components/layout/header'
import TabBar from '@/components/layout/tab-bar'
import styles from '@/styles/albumList.module.css'
import { TiArrowForwardOutline } from 'react-icons/ti'
import { LiaBookmarkSolid } from 'react-icons/lia'

export default function AlbumList() {
  return (
    <>
      <Header />
      <p className={styles.p_name}>Leanne Graham</p>
      <a href="mailto:abc@example.com" className={styles.a_email}>
        <div className={styles.flex_icon}>
          <TiArrowForwardOutline size={20} color="white" />
        </div>
        <p className={styles.p_email}>Sincere@april.biz</p>
      </a>
      <div className={styles.box_album_title}>
        <div className={styles.flex_icon}>
          <LiaBookmarkSolid size={25} color="gray" />
        </div>
        <p className={styles.p_album_title}>quidem molestiae enim</p>
      </div>
      <div className={styles.card_list}>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
      </div>
      <TabBar />
    </>
  )
}
