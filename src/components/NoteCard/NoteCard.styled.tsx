import styled from 'styled-components'

export const Container = styled.article`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 1.25rem;
  color: black;
  background: #FDFDFD;
  border: 3px solid transparent;
  border-radius: 0.625rem;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
  transition: border-color 0.5s ease-in-out;
  font-size: 4rem;

  :hover {
    cursor: pointer;
    border: 3px solid #B90445;
  }
`
