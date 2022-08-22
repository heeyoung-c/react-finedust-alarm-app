# 미세먼지 알리미

전국의 미세먼지 농도를 알려주는 사이트입니다  
`모바일 디스플레이 사이즈를 기준으로 제작하였습니다`

## 배포 주소

## 📑기술 스택

<img src="https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"/> 
<img src="https://img.shields.io/badge/REDUX-764ABC?style=for-the-badge&logo=Redux&logoColor=white"/> 
<img src="https://camo.githubusercontent.com/38547f500d8d549765a404fbbc093e03e47a4762502cb7e56c645d1511a9f0e5/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5354594c45442d434f4d504f4e454e54532d4442373039333f7374796c653d666f722d7468652d6261646765266c6f676f3d7374796c65642d636f6d706f6e656e7473266c6f676f436f6c6f723d7768697465">
<img src="https://img.shields.io/badge/REDUX THUNK-764ABC?style=for-the-badge&logo=Redux&logoColor=white"/>

## 주요 기능

1. 사용자가 설정한 기본 지역의 미세먼지 정보만 표시하는 기능

1. 특정 시/도의 미세먼지 정보를 모두 리스팅하는 기능

1. 특정 지역을 즐겨찾기에 등록/해제하는 기능(업데이트 중)

1. 즐겨찾기 해놓은 지역들의 미세먼지 정보만 모아보는 기능(업데이트 중)

1. 하단 탭을 통해 기본 지역만 보기, 전체 보기, 즐겨찾기한 지역만 보기를 전환하는 기능

1. 특정 지역의 미세먼지 수치에 따라 해당 지역을 표시하는 색/아이콘 등이 달라지는 기능

## File Setting

📦src  
┣ 📂assets  
┃ ┗ 📂fonts  
┃ ┃ ┣ 📜NotoSansKR-Black.otf  
┃ ┃ ┣ 📜NotoSansKR-Bold.otf  
┃ ┃ ┣ 📜NotoSansKR-Light.otf  
┃ ┃ ┣ 📜NotoSansKR-Medium.otf  
┃ ┃ ┣ 📜NotoSansKR-Regular.otf  
┃ ┃ ┗ 📜NotoSansKR-Thin.otf  
┣ 📂components  
┃ ┣ 📂Card  
┃ ┃ ┣ 📜CardContainer.jsx  
┃ ┃ ┣ 📜CardPresenter.jsx  
┃ ┃ ┣ 📜index.js  
┃ ┃ ┗ 📜style.js  
┃ ┣ 📂FineDustData  
┃ ┃ ┣ 📜FineDustDataContainer.jsx  
┃ ┃ ┣ 📜FineDustDataPresenter.jsx  
┃ ┃ ┗ 📜index.js  
┃ ┣ 📂Footer  
┃ ┃ ┣ 📜index.jsx  
┃ ┃ ┗ 📜style.js  
┃ ┣ 📂Loading  
┃ ┃ ┣ 📜index.jsx  
┃ ┃ ┗ 📜style.js  
┃ ┣ 📂SelectedStation  
┃ ┃ ┣ 📜index.jsx  
┃ ┃ ┗ 📜style.js  
┃ ┗ 📂SelectSido  
┃ ┃ ┣ 📜index.jsx  
┃ ┃ ┗ 📜style.js  
┣ 📂modules  
┃ ┣ 📜fineDustData.js  
┃ ┣ 📜index.js  
┃ ┗ 📜selectedValue.js  
┣ 📂pages  
┃ ┣ 📂BookMark  
┃ ┃ ┗ 📜index.jsx  
┃ ┣ 📂EntireRegion  
┃ ┃ ┣ 📜index.jsx  
┃ ┃ ┗ 📜style.js  
┃ ┗ 📂MyRegion  
┃ ┃ ┣ 📜index.jsx  
┃ ┃ ┗ 📜style.js  
┣ 📂styles  
┃ ┣ 📜globalStyle.js  
┃ ┗ 📜theme.js  
┣ 📂utils  
┃ ┗ 📜getFineDustData.js  
┣ 📜App.js  
┣ 📜index.css  
┗ 📜index.js
