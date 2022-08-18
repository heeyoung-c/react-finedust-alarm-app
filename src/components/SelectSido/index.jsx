import React from 'react'
import * as S from './style'

import SelectedStation from '../SelectedStation'
import { SIDO_NAME_DATA } from '../../context/sidoNameData'
import { useSelector, useDispatch } from 'react-redux'
import { changeSelectedSido } from '../../modules/fineDust'

const SelectSido = () => {
  const selectedSido = useSelector(state => state.selectedSido)
  const dispatch = useDispatch()

  const sidoChangeHandler = e => {
    console.log('실행 1:', e.target.value)
    dispatch(changeSelectedSido(e.target.value))
  }

  return (
    <>
      <S.Container>
        <S.Select
          size='lg'
          id='sido-name'
          name='sido-name'
          onChange={sidoChangeHandler}
        >
          {SIDO_NAME_DATA.map(sido => (
            <option key={sido.id} value={sido.value}>
              {sido.value}
            </option>
          ))}
        </S.Select>
        <SelectedStation></SelectedStation>
      </S.Container>
      <p>{selectedSido}</p>
    </>
  )
}

export default SelectSido
