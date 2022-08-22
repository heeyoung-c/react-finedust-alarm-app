import React from 'react'
import * as S from './style'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const CardPresenter = ({
  renderType,
  selectedStation,
  selectedStations,
  setBookMarkHandler,
  fineDustData,
}) => {
  switch (renderType) {
    case 'my-region':
      return (
        <S.Container>
          <S.Card pm10Grade={selectedStation.pm10Grade}>
            <S.CardTop>
              <p>{selectedStation.sidoName}</p>
              <h4>{selectedStation.stationName}</h4>
              <S.CardBookMark
                onClick={() => {
                  setBookMarkHandler(selectedStation.stationName)
                }}
              >
                {selectedStation.bookMark ? AiFillStar() : AiOutlineStar()}
              </S.CardBookMark>
            </S.CardTop>
            <S.CardMiddle>
              <p>
                {selectedStation.pm10Grade === '1'
                  ? '좋음'
                  : selectedStation.pm10Grade === '2'
                  ? '보통'
                  : selectedStation.pm10Grade === '3'
                  ? '한때 나쁨'
                  : selectedStation.pm10Grade === '4'
                  ? '나쁨'
                  : selectedStation.pm10Grade === '5'
                  ? '매우 나쁨'
                  : '알 수 없음'}
              </p>
            </S.CardMiddle>
            <S.CardBottom>
              <h3>
                미세먼지 수치: {selectedStation.pm10Value || '알 수 없음'}
              </h3>
              <h3>측정 시각: {selectedStation.dataTime || '알 수 없음'}</h3>
            </S.CardBottom>
          </S.Card>
        </S.Container>
      )
    case 'entire-region':
      return (
        <S.Container>
          {selectedStations.map(selectedStation => (
            <S.Card
              key={selectedStation.stationName}
              pm10Grade={selectedStation.pm10Grade}
            >
              <S.CardTop>
                <p>{selectedStation.sidoName}</p>
                <h4>{selectedStation.stationName}</h4>
                <S.CardBookMark
                  onClick={() => {
                    setBookMarkHandler(selectedStation.stationName)
                  }}
                >
                  {selectedStation.bookMark ? AiFillStar() : AiOutlineStar()}
                </S.CardBookMark>
              </S.CardTop>
              <S.CardMiddle>
                <p>
                  {selectedStation.pm10Grade === '1'
                    ? '좋음'
                    : selectedStation.pm10Grade === '2'
                    ? '보통'
                    : selectedStation.pm10Grade === '3'
                    ? '한때 나쁨'
                    : selectedStation.pm10Grade === '4'
                    ? '나쁨'
                    : selectedStation.pm10Grade === '5'
                    ? '매우 나쁨'
                    : '알 수 없음'}
                </p>
              </S.CardMiddle>
              <S.CardBottom>
                <h3>
                  미세먼지 수치: {selectedStation.pm10Value || '알 수 없음'}
                </h3>
                <h3>측정 시각: {selectedStation.dataTime || '알 수 없음'}</h3>
              </S.CardBottom>
            </S.Card>
          ))}
        </S.Container>
      )
    case 'book-mark':
      return (
        <S.Container>
          {selectedStations.map(selectedStation =>
            selectedStation.bookMark ? (
              <S.Card
                key={selectedStation.stationName}
                pm10Grade={selectedStation.pm10Grade}
              >
                <S.CardTop>
                  <p>{selectedStation.sidoName}</p>
                  <h4>{selectedStation.stationName}</h4>
                  <S.CardBookMark
                    onClick={() => {
                      setBookMarkHandler(selectedStation.stationName)
                    }}
                  >
                    {selectedStation.bookMark ? AiFillStar() : AiOutlineStar()}
                  </S.CardBookMark>
                </S.CardTop>
                <S.CardMiddle>
                  <p>
                    {selectedStation.pm10Grade === '1'
                      ? '좋음'
                      : selectedStation.pm10Grade === '2'
                      ? '보통'
                      : selectedStation.pm10Grade === '3'
                      ? '한때 나쁨'
                      : selectedStation.pm10Grade === '4'
                      ? '나쁨'
                      : selectedStation.pm10Grade === '5'
                      ? '매우 나쁨'
                      : '알 수 없음'}
                  </p>
                </S.CardMiddle>
                <S.CardBottom>
                  <h3>
                    미세먼지 수치: {selectedStation.pm10Value || '알 수 없음'}
                  </h3>
                  <h3>측정 시각: {selectedStation.dataTime || '알 수 없음'}</h3>
                </S.CardBottom>
              </S.Card>
            ) : null,
          )}
        </S.Container>
      )
    default:
      return
  }
}

export default CardPresenter
