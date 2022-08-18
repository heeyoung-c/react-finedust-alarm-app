import styled from 'styled-components'

export const Footer = styled.footer`
  position: fixed;
  border: 1px solid red;
  width: 100%;
  height: 10rem;
  bottom: 0;
  background-color: lightgray;

  font-size: ${({ theme }) => theme.fontSizes.title};

  ${({ theme }) => theme.common.flexCenter};
`
