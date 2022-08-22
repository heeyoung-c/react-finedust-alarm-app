import React from 'react'
import * as S from './style'

import { useSelector, useDispatch } from 'react-redux'
import {
  changeSelectedSido,
  changeSelectedStation,
  changeSelectedStations,
} from '../../modules/selectedValue'

const SelectSido = () => {
  const { selectedSido, sidoNameData } = useSelector(
    state => state.selectedValue,
  )
  const { data: fineDustData } = useSelector(state => state.fineDustData)
  const dispatch = useDispatch()

  // 사용자가 지정한 시도 값이 바뀌면 그걸 저장하기 위한 로직
  const changeSidoHandler = e => {
    const selectedSido = e.target.value
    dispatch(changeSelectedSido(selectedSido))

    setStationsHandler(selectedSido)
  }

  // 세부 지역 바꾸기
  const setStationsHandler = selectedSido => {
    const selectedStations = fineDustData.filter(
      item => item.sidoName === selectedSido,
    )
    dispatch(changeSelectedStations(selectedStations))
    setStationHandler(selectedStations)
  }

  // 사용자가 세부지역을 설정 하지 않은 상태에서 첫번째 세부 지역을 자동으로 설정하여 저장)
  const setStationHandler = selectedStations => {
    dispatch(changeSelectedStation(selectedStations[0]))
  }

  return (
    <>
      <S.Select defaultValue={selectedSido} onChange={changeSidoHandler}>
        {sidoNameData.map(sido => (
          <option key={sido.id} value={sido.value}>
            {sido.value}
          </option>
        ))}
      </S.Select>
    </>
  )
}

export default SelectSido
