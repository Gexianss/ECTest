import React from 'react'

export default function Footer() {
  return (
    <>
      <div className="footer">ALL RIGHTS RESERVED. CONTENT PRIVACY</div>
      <style jsx>
        {`
          .footer {
            color: white;
            font-size: 18px;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            height: 2.5rem;
            text-align: center;
          }

          @media (max-width: 320px) {
            .footer {
              font-size: 8px;
            }
          }
        `}
      </style>
    </>
  )
}
