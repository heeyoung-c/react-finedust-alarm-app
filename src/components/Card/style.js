import styled from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => theme.common.flexColumnStart};

  border: 1px solid green;
`

export const Card = styled.div`
  width: 80%;
  height: 14rem;
  border: 2px solid royalblue;
  margin-bottom: 4rem;
  font-size: ${({ theme }) => theme.fontSizes.title};
`

export const CardTop = styled.div`
  border: 1px solid red;
`

export const CardMiddle = styled.div`
  border: 1px solid blue;
`

export const CardBottom = styled.div`
  border: 1px solid green;
`
