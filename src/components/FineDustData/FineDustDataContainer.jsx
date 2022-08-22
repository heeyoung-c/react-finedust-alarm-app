import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFineDustData } from '../../modules/fineDustData'

import FineDustDataPresenter from './FineDustDataPresenter'

import Loading from '../Loading'

const FineDustDataContainer = () => {
  const { data, loading, error } = useSelector(state => state.fineDustData)
  const dispatch = useDispatch()

  // 미세먼지 데이터 가져오기 (이 코드가 실행되고 난 뒤에 data 에 미세먼지 정보가 들어있음)
  useEffect(() => {
    !data && dispatch(getFineDustData())
  }, [data, dispatch])

  if (loading) return <Loading />
  if (error) return <div>에러 발생</div>
  if (!data) return null

  return <FineDustDataPresenter fineDustData={data} />
}

export default FineDustDataContainer
