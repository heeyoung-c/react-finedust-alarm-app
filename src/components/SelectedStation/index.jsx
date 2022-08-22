import React from 'react'
import * as S from './style'
import { useSelector, useDispatch } from 'react-redux'
import { changeSelectedStation } from '../../modules/selectedValue'

const SelectedStation = () => {
  const { selectedStation, selectedStations } = useSelector(
    state => state.selectedValue,
  )
  const dispatch = useDispatch()

  const changeStationHandler = e => {
    const selectedStationName = e.target.value

    // 사용자가 지정한 stationName 을 토대로 station 정보 저장하기
    const selectedStation = selectedStations.filter(
      station => station.stationName === selectedStationName,
    )
    dispatch(changeSelectedStation(...selectedStation))
  }
  return (
    <>
      <S.Select
        defaultValue={selectedStation.stationName}
        onChange={changeStationHandler}
      >
        {selectedStations.map(({ stationName }) => (
          <option key={stationName} value={stationName}>
            {stationName}
          </option>
        ))}
      </S.Select>
    </>
  )
}

export default SelectedStation
