import styled from 'styled-components'

export const Container = styled.div<{ isSmall?: boolean, size?: number, unit?: string }>`
  font-size: ${({
    isSmall = false,
    size = 4,
    unit = 'rem',
  }) => `${isSmall ? 0.25 * size : size}${unit}`};
  text-shadow: 0px 0.0625em 0.0625em rgba(0, 0, 0, 0.25);

  h1 {
    font-size: 1em;
    line-height: 1.25;
    margin-bottom: 0.625em;
  }

  h2 {
    font-size: 0.5625em;
    line-height: 1.25;
    margin-bottom: 1.625em;
  }

  p {
    font-size: 0.25em;
    line-height: 1.25;
    margin-bottom: 0.25em;
  }

  ul, ol {
    font-size: 0.25em;
    line-height: 1.25;
    margin-left: 0.4em;
    padding-left: 0;

    li {
      margin-left: 0;
      padding-left: 0;
      margin-bottom: 0.25em;
    }
  }

  ul {
    li {
      :before {
        content: '•';
        font-size: 2em;
        line-height: 1;
        vertical-align: middle;
        margin-right: 0.25em;
      }
    }
  }

  ol {
    margin-left: 2em;

    li {
      list-style: decimal;
    }
  }
`
