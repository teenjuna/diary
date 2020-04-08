import React from "react"

export interface Props {
  className?: string
}

export default function RecordsIcon(props: Props) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        d="M21.3333 26.6667H10.6667C9.6058 26.6667 8.58839 26.2452 7.83824 25.4951C7.08809 24.7449 6.66667 23.7275 6.66667 22.6667V9.33333C6.66667 8.9797 6.52619 8.64056 6.27614 8.39052C6.02609 8.14047 5.68696 7.99999 5.33333 7.99999C4.97971 7.99999 4.64057 8.14047 4.39052 8.39052C4.14048 8.64056 4 8.9797 4 9.33333V22.6667C4 24.4348 4.70238 26.1305 5.95262 27.3807C7.20286 28.631 8.89856 29.3333 10.6667 29.3333H21.3333C21.687 29.3333 22.0261 29.1929 22.2761 28.9428C22.5262 28.6928 22.6667 28.3536 22.6667 28C22.6667 27.6464 22.5262 27.3072 22.2761 27.0572C22.0261 26.8071 21.687 26.6667 21.3333 26.6667ZM13.3333 17.3333C13.3333 17.6869 13.4738 18.0261 13.7239 18.2761C13.9739 18.5262 14.313 18.6667 14.6667 18.6667H21.3333C21.687 18.6667 22.0261 18.5262 22.2761 18.2761C22.5262 18.0261 22.6667 17.6869 22.6667 17.3333C22.6667 16.9797 22.5262 16.6406 22.2761 16.3905C22.0261 16.1405 21.687 16 21.3333 16H14.6667C14.313 16 13.9739 16.1405 13.7239 16.3905C13.4738 16.6406 13.3333 16.9797 13.3333 17.3333ZM28 11.92C27.9861 11.7975 27.9593 11.6768 27.92 11.56V11.44C27.8559 11.3029 27.7704 11.1769 27.6667 11.0667L19.6667 3.06666C19.5564 2.96294 19.4304 2.87743 19.2933 2.81332C19.2535 2.80767 19.2131 2.80767 19.1733 2.81332C19.0379 2.73564 18.8883 2.68578 18.7333 2.66666H13.3333C12.2725 2.66666 11.2551 3.08808 10.5049 3.83823C9.75476 4.58838 9.33333 5.60579 9.33333 6.66666V20C9.33333 21.0609 9.75476 22.0783 10.5049 22.8284C11.2551 23.5786 12.2725 24 13.3333 24H24C25.0609 24 26.0783 23.5786 26.8284 22.8284C27.5786 22.0783 28 21.0609 28 20V12V11.92ZM20 7.21332L23.4533 10.6667H21.3333C20.9797 10.6667 20.6406 10.5262 20.3905 10.2761C20.1405 10.0261 20 9.68695 20 9.33333V7.21332ZM25.3333 20C25.3333 20.3536 25.1929 20.6928 24.9428 20.9428C24.6928 21.1929 24.3536 21.3333 24 21.3333H13.3333C12.9797 21.3333 12.6406 21.1929 12.3905 20.9428C12.1405 20.6928 12 20.3536 12 20V6.66666C12 6.31304 12.1405 5.9739 12.3905 5.72385C12.6406 5.4738 12.9797 5.33332 13.3333 5.33332H17.3333V9.33333C17.3369 9.78818 17.4181 10.2391 17.5733 10.6667H14.6667C14.313 10.6667 13.9739 10.8071 13.7239 11.0572C13.4738 11.3072 13.3333 11.6464 13.3333 12C13.3333 12.3536 13.4738 12.6928 13.7239 12.9428C13.9739 13.1929 14.313 13.3333 14.6667 13.3333H25.3333V20Z"
        fill="currentColor"
      />
    </svg>
  )
}
