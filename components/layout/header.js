import React from 'react'
import { GoSearch } from 'react-icons/go'
import { AiOutlinePlus } from 'react-icons/ai'
import { RiNotificationLine } from 'react-icons/ri'

export default function Header() {
  return (
    <>
      <div className="flex_search">
        {/* searchItem  */}
        <div className="box_icon">
          <GoSearch size={20} color="white" />
        </div>
        {/* Submit photo button & Notic button */}
        <div className="flex_submit_notic">
          <div className="box_submit">
            <div className="text_submit">Submit a photo</div>
            <div className="icon_plus">
              <AiOutlinePlus size={20} color="white" />
            </div>
          </div>
          <div className="box_icon position_relative">
            <RiNotificationLine size={20} color="white" />
            <div className="dot"></div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .flex_search {
            height: 90px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 20px;
          }
          .box_icon {
            width: 50px;
            height: 50px;
            border: 1px solid #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
          }

          .flex_submit_notic {
            display: flex;
            justify-content: space-between;
          }

          .box_submit {
            border: 1px solid #fff;
            padding: 10px 16px 10px 20px;
            margin-right: 20px;
            text-align: center;
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
          }

          .text_submit {
            font-size: 18px;
            color: #fff;
            padding-right: 10px;
          }

          .icon_plus {
            display: flex;
            align-items: center;
          }

          .position_relative {
            position: relative;
          }

          .dot {
            position: absolute;
            top: 14px;
            left: 27px;
            width: 6px;
            height: 6px;
            background-color: #ea215d;
            border-radius: 50%;
          }

          @media (max-width: 320px) {
          }
        `}
      </style>
    </>
  )
}
