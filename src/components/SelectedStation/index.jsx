import React, { useEffect } from 'react'
import * as S from './style'
import { useSelector, useDispatch } from 'react-redux'
import { changeSelectedStations } from '../../modules/fineDust'

import { FINE_DUST_DATA } from '../../context/fineDustData'

const SelectedStation = () => {
  const selectedSido = useSelector(state => state.selectedSido)
  console.log(selectedSido)
  const dispatch = useDispatch()
  const ttt = useSelector(state => state.selectedStations)

  const selectedStations = FINE_DUST_DATA.response.body.items
    .filter(item => item.sidoName === selectedSido)
    .map(sido => sido.stationName)

  // useEffect(() => {
  //   console.log('변한다')
  // }, [selectedSido])

  console.log(ttt)
  return (
    <>
      <S.Select>
        {selectedStations.map(stationName => (
          <option key={stationName}>
            {stationName || '지역을 선택해주세요'}
            {/* 이 부분 질문하기(지역선택 어떻게 나오게 할 지) */}
          </option>
        ))}
      </S.Select>
    </>
  )
}

export default SelectedStation
