import { getFineDustData as useGetFineDustData } from '../utils/getFineDustData'

// 액션 타입
const GET_FINE_DUST_DATA = 'fineDustData/GET_FINE_DUST_DATA'
const GET_FINE_DUST_DATA_SUCCESS = 'fineDustData/GET_FINE_DUST_DATA_SUCCESS'
const GET_FINE_DUST_DATA_ERROR = 'fineDustData/GET_FINE_DUST_DATA_ERROR'

const CHANGE_BOOK_MARK = 'fineDustData/CHANGE_BOOK_MARK'

// 바로 액션 객체 넣기
export const getFineDustData = () => async (dispatch, getState) => {
  dispatch({ type: GET_FINE_DUST_DATA }) // 요청이 시작됨
  try {
    const res = await useGetFineDustData()
    // API 호출
    dispatch({
      type: GET_FINE_DUST_DATA_SUCCESS,
      payload: {
        fineDustData: res.map(data => ({
          ...data,
          bookMark: false,
        })),
      },
    }) // 성공
  } catch (errorMsg) {
    dispatch({ type: GET_FINE_DUST_DATA_ERROR, error: errorMsg }) // 실패
  }
}

export function changeBookMark(diff) {
  return {
    type: CHANGE_BOOK_MARK,
    payload: { diff },
  }
}

// 초기값
const initialState = {
  loading: false,
  data: null,
  error: null,
}

// 추가 / 제거
export default function fineDustData(state = initialState, action) {
  switch (action.type) {
    case GET_FINE_DUST_DATA:
      return {
        loading: true,
        data: null,
        error: null,
      }
    case GET_FINE_DUST_DATA_SUCCESS:
      return {
        loading: false,
        data: action.payload.fineDustData,
        error: null,
      }
    case GET_FINE_DUST_DATA_ERROR:
      return {
        loading: false,
        data: null,
        error: action.error,
      }
    case CHANGE_BOOK_MARK:
      return {
        loading: false,
        data: state.data.map(station =>
          station.stationName === action.payload.diff
            ? { ...station, bookMark: !station.bookMark }
            : station,
        ),
        error: null,
      }
    default:
      return state
  }
}
