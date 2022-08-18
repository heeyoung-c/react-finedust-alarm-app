import React from 'react'
import * as S from './style'

const Card = () => {
  return (
    <S.Container>
      <S.Card>
        <S.CardTop>
          <p>시도 이름</p>
        </S.CardTop>
        <S.CardMiddle>
          <p>미세먼지 좋음, 보통, 나쁨</p>
        </S.CardMiddle>
        <S.CardBottom>
          <p>미세먼지 수치</p>
        </S.CardBottom>
      </S.Card>
    </S.Container>
  )
}

export default Card
