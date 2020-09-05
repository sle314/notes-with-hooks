import React from 'react'

import { Svg } from './Svg'

interface Props {
  className?: string
}

export const Delete: React.FC<Props> = ({ className }) => (
  <Svg width={14} height={18} className={className}>
    <path
      d='M13.9844 0.984375V3H0.015625V0.984375H3.48438L4.51562 0H9.48438L10.5156 0.984375H13.9844ZM1
      15.9844V3.98438H13V15.9844C13 16.5156 12.7969 16.9844 12.3906 17.3906C11.9844 17.7969 11.5156
      18 10.9844 18H3.01562C2.48438 18 2.01562 17.7969 1.60938 17.3906C1.20312 16.9844 1 16.5156 1
      15.9844Z'
      fill="currentColor"
    />
  </Svg>
)
