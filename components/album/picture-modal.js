/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import style from './pictureModal.module.css'
import { LiaDownloadSolid } from 'react-icons/lia'
import { TiArrowForwardOutline } from 'react-icons/ti'
import { LiaInfoCircleSolid } from 'react-icons/lia'
import { IoMdClose } from 'react-icons/io'
import { GoHeart } from 'react-icons/go'
import { LiaBookmarkSolid } from 'react-icons/lia'

import Image from 'next/image'

export default function PictureModal({ photo }) {
  return (
    <>
      <div>
        <div className={style.modal_header}>
          <div className={style.modal_header_icon}>
            <p className={style.modal_header_p}>Download</p>
            <LiaDownloadSolid color="white" size={20} />
          </div>
          <div className={style.modal_header_icon}>
            <p className={style.modal_header_p}>Share</p>
            <TiArrowForwardOutline color="white" size={20} />
          </div>
          <div className={style.modal_header_icon}>
            <p className={style.modal_header_p}>Info</p>
            <LiaInfoCircleSolid color="white" size={20} />
          </div>
          <div className={style.btn_close}>
            <IoMdClose color="white" size={32} />
          </div>
        </div>

        <div>
          <Image
            src={photo.thumbnailUrl}
            alt={photo.title}
            width={150}
            height={150}
          />
        </div>
        <div className={style.modal_footer}>
          <div>
            <p className={style.modal_footer_title}>Title</p>
            <p className={style.modal_footer_p}>{photo.title}</p>
          </div>
          <div className={style.modal_footer_btnBox}>
            <div className={style.modal_footer_btn}>
              <p className={style.modal_footer_icon_p}>Like</p>
              <GoHeart color="white" size={20} />
            </div>
            <div className={style.modal_footer_btn}>
              <p className={style.modal_footer_icon_p}>Save</p>
              <LiaBookmarkSolid color="white" size={20} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
