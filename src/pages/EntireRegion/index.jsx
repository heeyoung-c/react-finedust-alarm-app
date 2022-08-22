import React from 'react'
import SelectSido from '../../components/SelectSido'
import Card from '../../components/Card'

import * as S from './style'

const EntireRegion = () => {
  return (
    <>
      <S.Container>
        <SelectSido></SelectSido>
      </S.Container>
      <Card renderType='entire-region'></Card>
    </>
  )
}

export default EntireRegion
