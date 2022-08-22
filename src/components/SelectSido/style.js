import styled from 'styled-components'
import { Form } from 'react-bootstrap'

export const Select = styled(Form.Select)`
  width: 12rem;
  height: 6rem;

  font-family: 'NotoSansBold';
  font-size: ${({ theme }) => theme.fontSizes.title};
`
