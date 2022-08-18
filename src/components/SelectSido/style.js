import styled from 'styled-components'
import { Form } from 'react-bootstrap'

export const Container = styled.div`
  height: 10rem;
  border: 0.1rem solid blue;
  ${({ theme }) => theme.common.flexCenter}
`

export const Select = styled(Form.Select)`
  width: 10rem;
  height: 6rem;
  border: 0.1rem solid red;

  font-size: ${({ theme }) => theme.fontSizes.title};
`
