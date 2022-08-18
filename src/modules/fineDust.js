// 액션 타입
const CHANGE_SELECTED_SIDO = 'fineDust/CHANGE_SELECTED_SIDO'
const CHANGE_SELECTED_STATIONS = 'fineDust/CHANGE_SELECTED_STATIONS'

// 액션 생성 함수
export function changeSelectedSido(diff) {
  return {
    type: CHANGE_SELECTED_SIDO,
    payload: { diff },
  }
}

export function changeSelectedStations(diff) {
  return {
    type: CHANGE_SELECTED_STATIONS,
    payload: { diff },
  }
}

// 초기값
const initialState = {
  selectedSido: 'testSido',
  selectedStations: [],
}

// 리듀서 선언
export default function counter(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SELECTED_SIDO:
      return {
        ...state,
        selectedSido: action.payload.diff,
      }
    case CHANGE_SELECTED_STATIONS:
      return {
        ...state,
        selectedStations: action.payload.diff,
      }
    default:
      return state
  }
}
