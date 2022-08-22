import React from 'react'
import SelectSido from '../../components/SelectSido'
import SelectedStation from '../../components/SelectedStation'
import Card from '../../components/Card'
import FineDustData from '../../components/FineDustData'

import * as S from './style'

const MyRegion = () => {
  return (
    <>
      <S.Container>
        <SelectSido></SelectSido>
        <SelectedStation></SelectedStation>
      </S.Container>
      <Card renderType='my-region'></Card>
      <FineDustData></FineDustData>
    </>
  )
}

export default MyRegion
