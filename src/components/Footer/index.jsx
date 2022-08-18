import React from 'react'
import { Link } from 'react-router-dom'

import * as S from './style'

function Footer() {
  return (
    <S.Footer>
      <Link to='/my-region'>내 지역 | </Link>
      <Link to='/entire-region'>전체 시·도 | </Link>
      <Link to='/bookmark'>즐겨찾기</Link>
    </S.Footer>
  )
}

export default Footer
