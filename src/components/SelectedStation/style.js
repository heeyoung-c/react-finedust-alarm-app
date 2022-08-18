import styled from 'styled-components'
import { Form } from 'react-bootstrap'

export const Select = styled(Form.Select)`
  min-width: 10rem;
  max-width: max-content;
  height: 6rem;
  border: 0.1rem solid red;

  font-size: ${({ theme }) => theme.fontSizes.title};
`
