import React from 'react'

import { Svg } from './Svg'

interface Props {
  className?: string
}

export const Edit: React.FC<Props> = ({ className }) => (
  <Svg width={20} height={20} className={className}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M18.7088 3.63126C19.0988 4.02127 19.0988 4.65127 18.7088 5.04127L16.8788 6.87126L13.1288
      3.12126L14.9588 1.29126C15.1456 1.10401 15.3993 0.998779 15.6638 0.998779C15.9283 0.998779
      16.1819 1.10401 16.3688 1.29126L18.7088 3.63126ZM0.998779 18.5013V15.4613C0.998779 15.3213
      1.04878 15.2013 1.14878 15.1013L12.0588 4.19126L15.8088 7.94127L4.88878 18.8513C4.79878
      18.9513 4.66878 19.0013 4.53878 19.0013H1.49878C1.21878 19.0013 0.998779 18.7813 0.998779
      18.5013Z'
      fill='currentColor'
    />
  </Svg>
)
