// 액션 타입
const CHANGE_SELECTED_SIDO = 'selectedValue/CHANGE_SELECTED_SIDO'
const CHANGE_SELECTED_STATIONS = 'selectedValue/CHANGE_SELECTED_STATIONS'
const CHANGE_SELECTED_STATION = 'selectedValue/CHANGE_SELECTED_STATION'

const SET_BOOK_MARK_STATIONS = 'selectedValue/SET_BOOK_MARK_STATIONS'

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

export function changeSelectedStation(diff) {
  return {
    type: CHANGE_SELECTED_STATION,
    payload: { diff },
  }
}

export function setBookMarkStations(diff) {
  return {
    type: SET_BOOK_MARK_STATIONS,
    payload: { diff },
  }
}

// 초기값
const initialState = {
  sidoNameData: [
    { id: null, value: '지역 선택' },
    { id: '서울', value: '서울' },
    { id: '부산', value: '부산' },
    { id: '대구', value: '대구' },
    { id: '인천', value: '인천' },
    { id: '광주', value: '광주' },
    { id: '대전', value: '대전' },
    { id: '울산', value: '울산' },
    { id: '경기', value: '경기' },
    { id: '강원', value: '강원' },
    { id: '충북', value: '충북' },
    { id: '충남', value: '충남' },
    { id: '전북', value: '전북' },
    { id: '전남', value: '전남' },
    { id: '경북', value: '경북' },
    { id: '경남', value: '경남' },
    { id: '제주', value: '제주' },
    { id: '세종', value: '세종' },
  ],
  selectedSido: '',
  selectedStations: [],
  selectedStation: [],
  bookMarkStations: [],
}

// 리듀서 선언
export default function selectedValue(state = initialState, action) {
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
    case CHANGE_SELECTED_STATION:
      return {
        ...state,
        selectedStation: action.payload.diff,
      }
    case SET_BOOK_MARK_STATIONS:
      return {
        ...state,
        bookMarkStations: state.selectedStations.filter(
          selectedStation =>
            selectedStation.stationName === action.payload.diff,
        ),
      }
    default:
      return state
  }
}
