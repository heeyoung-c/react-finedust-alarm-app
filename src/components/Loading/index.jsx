import React from 'react'

import * as S from './style'

const Loading = () => {
  return (
    <S.LoadingContainer>
      <S.Loading animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </S.Loading>
    </S.LoadingContainer>
  )
}

export default Loading
