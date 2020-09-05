import React, { SVGProps } from 'react'

interface Props extends SVGProps<SVGSVGElement> {
  width: number
  height: number
  className?: string
}

export const Svg: React.FC<Props> = ({ width, height, className, children, ...rest }) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    className={className}
    fill='none'
    {...rest}
  >
    {children}
  </svg>
)
