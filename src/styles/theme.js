const palette = {
  orange: '#FFA500',
  black: '#000000',
}

const common = {
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
