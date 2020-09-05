import styled from 'styled-components'

export const Container = styled.div<{ isSmall?: boolean, size?: number, unit?: string }>`
  font-size: ${({
    isSmall = false,
    size = 4,
    unit = 'rem',
  }) => `${isSmall ? 0.25 * size : size}${unit}`};

  h1 {
    font-size: 1em;
  }

  h2 {
    font-size: 0.75em;
  }

  p {
    font-size: 0.5em;
  }
`
