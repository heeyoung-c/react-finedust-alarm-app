import styled from 'styled-components'
import { Form } from 'react-bootstrap'

export const Select = styled(Form.Select)`
  min-width: 12rem;
  max-width: max-content;
  height: 6rem;

  font-family: 'NotoSansBold';
  font-size: ${({ theme }) => theme.fontSizes.title};
`
