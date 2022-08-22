import styled from 'styled-components'
import { Spinner } from 'react-bootstrap'

export const LoadingContainer = styled.div`
  z-index: 2;
  ${({ theme }) => theme.common.flexCenter};
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`

export const Loading = styled(props => <Spinner {...props} />)`
  color: ${({ theme }) => theme.palette.primary};
  width: 8rem;
  height: 8rem;
  margin-bottom: 26rem;
  font-size: 4rem;
`
