import styled from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => theme.common.flexColumnStart};
  font-family: 'NotoSansBold';
`

export const Card = styled.div`
  width: 80%;
  margin-bottom: 8rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  font-size: ${({ theme }) => theme.fontSizes.title};
  border-radius: 0.6rem;
  background-color: ${({ pm10Grade }) =>
    pm10Grade === '1'
      ? ({ theme }) => theme.palette.stateGood
      : pm10Grade === '2'
      ? ({ theme }) => theme.palette.stateNormal
      : pm10Grade === '3'
      ? ({ theme }) => theme.palette.stateNotBad
      : pm10Grade === '4'
      ? ({ theme }) => theme.palette.stateBad
      : pm10Grade === '5'
      ? ({ theme }) => theme.palette.stateWorst
      : ({ theme }) => theme.palette.stateUnKnown};
`

export const CardTop = styled.div`
  ${({ theme }) => theme.common.flexStart};
  color: ${({ theme }) => theme.palette.white};

  margin: 1rem 1rem 0;
`

export const CardBookMark = styled.p`
  margin-left: auto;
`

export const CardMiddle = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  color: ${({ theme }) => theme.palette.white};

  margin: 0 4rem;
  border: 2px dashed;
  font-size: 5rem;
`

export const CardBottom = styled.div`
  ${({ theme }) => theme.common.flexColumnStart};
  color: ${({ theme }) => theme.palette.white};
  margin-bottom: 1rem;
`
