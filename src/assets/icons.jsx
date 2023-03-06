import * as React from "react"


export const Menu = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={28}
    height={27}
   
    fill="#fff"
  >
    <rect  y={11} width={24} height={2} rx={1} />
    <rect  y={4} width={24} height={2} rx={1}  />
    <rect  y={18} width={24} height={2} rx={1} />
  </svg>
)

export const ArrowRight = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={18}
      height={18}
      fill="#fff"
      {...props}
    >
      <path d="M23.12 9.91 19.25 6a1 1 0 0 0-1.42 0 1 1 0 0 0 0 1.41L21.39 11H1a1 1 0 0 0-1 1 1 1 0 0 0 1 1h20.45l-3.62 3.61a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l3.87-3.88a3 3 0 0 0 0-4.24Z" />
    </svg>
  )
  
export const Cruz = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512.021 512.021"
      style={{
        enableBackground: "new 0 0 512.021 512.021",
      }}
      xmlSpace="preserve"
      width={22}
      height={27}
      fill={"#fff"}
      {...props}
    >
      <path d="M301.258 256.01 502.645 54.645c12.501-12.501 12.501-32.769 0-45.269-12.501-12.501-32.769-12.501-45.269 0L256.01 210.762 54.645 9.376c-12.501-12.501-32.769-12.501-45.269 0s-12.501 32.769 0 45.269L210.762 256.01 9.376 457.376c-12.501 12.501-12.501 32.769 0 45.269s32.769 12.501 45.269 0L256.01 301.258l201.365 201.387c12.501 12.501 32.769 12.501 45.269 0 12.501-12.501 12.501-32.769 0-45.269L301.258 256.01z" />
    </svg>
  )