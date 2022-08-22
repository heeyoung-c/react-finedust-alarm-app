const palette = {
  primary: '#71C9CE',
  secondary: '#A6E3E9',
  tertiary: '#CBF1F5',
  quaternary: '#E3FDFD',

  stateGood: '#00CCFF',
  stateNormal: '#33CC00',
  stateNotBad: '#FF9900',
  stateBad: '#FF3333',
  stateWorst: '#993333',
  stateUnKnown: '#999999',

  white: '#FFFFFF',
}

const common = {
  flexStart: `
    display: flex;
    align-items: center;
  `,
  flexCenter: `
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  flexAround: `
    display: flex;
    align-items: center;
    justify-content: space-around;
  `,
  flexColumnStart: `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  `,
}

const fontSizes = {
  title: '2rem',
  subtitle: '1.5rem',
  paragraph: '1rem',
}

const theme = {
  palette,
  common,
  fontSizes,
}

export default theme
