import React from 'react'
import { MdOutlineContentCopy } from 'react-icons/md'
import { GoSearch } from 'react-icons/go'
import { RiNotificationLine } from 'react-icons/ri'

export default function TabBar() {
  return (
    <>
      <div className="box mobile_only">
        <MdOutlineContentCopy size={18} color="white" />
        <GoSearch size={18} color="white" />
        <div className="position_relative">
          <div>
            <RiNotificationLine size={18} color="white" />
          </div>
          <div className="dot"></div>
        </div>
      </div>

      <style jsx>
        {`
          .mobile_only {
            display: none;
          }

          @media (max-width: 320px) {
            .box {
              height: 48px;
              background-color: #111;
              position: fixed;
              bottom: 0;
              display: flex;
              justify-content: space-around;
              align-items: center;
              width: 100%;
            }

            .position_relative {
              position: relative;
            }

            .dot {
              position: absolute;
              top: 1px;
              left: 13px;
              width: 5px;
              height: 5px;
              background-color: #ea215d;
              border-radius: 50%;
            }
          }
        `}
      </style>
    </>
  )
}
