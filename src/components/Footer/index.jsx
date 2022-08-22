import React from 'react'
import * as S from './style'
import { BsFillBookmarkStarFill } from 'react-icons/bs'
import { IoHomeSharp } from 'react-icons/io5'

function Footer() {
  return (
    <S.Footer>
      <S.CustomLink to='/my-region'>{IoHomeSharp()}</S.CustomLink>
      <S.CustomLink to='/entire-region'>전체 시·도</S.CustomLink>
      <S.CustomLink to='/bookmark'>{BsFillBookmarkStarFill()}</S.CustomLink>
    </S.Footer>
  )
}

export default Footer
