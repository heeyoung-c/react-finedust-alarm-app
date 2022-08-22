import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeBookMark } from '../../modules/fineDustData'
import CardPresenter from './CardPresenter'
import { changeSelectedStations } from '../../modules/selectedValue'

const CardContainer = ({ renderType }) => {
  const dispatch = useDispatch()
  const { data: fineDustData } = useSelector(state => state.fineDustData)

  const { selectedSido, selectedStation, selectedStations } = useSelector(
    state => state.selectedValue,
  )

  const setBookMarkHandler = e => {
    console.log(e)
    dispatch(changeBookMark(e))
    setBookMark(selectedSido)
  }

  const setBookMark = selectedSido => {
    const selectedStations = fineDustData.filter(
      item => item.sidoName === selectedSido,
    )
    dispatch(changeSelectedStations(selectedStations))

    console.log('실행')
  }

  return (
    <CardPresenter
      renderType={renderType}
      selectedStation={selectedStation}
      selectedStations={selectedStations}
      setBookMarkHandler={setBookMarkHandler}
      fineDustData={fineDustData}
    />
  )
}

export default CardContainer
