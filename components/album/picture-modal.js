import React from 'react'
import style from './pictureModal.module.css'
import { LiaDownloadSolid } from 'react-icons/lia'
import { TiArrowForwardOutline } from 'react-icons/ti'
import { LiaInfoCircleSolid } from 'react-icons/lia'
import { IoMdClose } from 'react-icons/io'
import { GoHeart } from 'react-icons/go'
import { LiaBookmarkSolid } from 'react-icons/lia'
import ReactModal from 'react-modal'
import Image from 'next/image'

export default function PictureModal({ isOpen, onRequestClose, photo }) {
  // modal UI
  const modalStyle = {
    overlay: {
      position: 'fixed',
      height: '93%',
      top: 90,
      left: -20,
      right: 1,
      backgroundColor: 'rgba(17,17,17, .8)',
    },
    content: {
      position: 'absolute',
      left: 35,
      width: '97.3%',
      border: '0px solid #ccc',
      background: '#111',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '0px',
      outline: 'none',
      boxShadow: '0 0 20px 15px rgba(255, 255, 255, .1)',
    },
  }
  // modal UI RWD
  if (window.matchMedia('(max-width: 320px)').matches) {
    modalStyle.overlay.height = '106%'
    modalStyle.overlay.top = -42
    modalStyle.overlay.marginTop = 43
    modalStyle.content.left = 0
    modalStyle.content.width = '100%'
  }
  return (
    <>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={modalStyle}
      >
        <div>
          {/* modal header */}
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
              <IoMdClose color="white" size={32} onClick={onRequestClose} />
            </div>
          </div>
          {/* image */}
          <div className={style.box_img}>
            <Image
              src={photo.thumbnailUrl}
              alt={photo.title}
              width={150}
              height={150}
              className={style.photo_img}
            />
          </div>
          {/* modal footer */}
          <div className={style.modal_footer}>
            {/* footer title */}
            <div className={style.modal_mobileOnly}>
              <p className={style.modal_footer_title}>Title</p>
              <p className={style.modal_footer_p}>{photo.title}</p>
            </div>
            {/* footer btn */}
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
      </ReactModal>
    </>
  )
}
