import styled, { keyframes } from 'styled-components'

const slideIn = keyframes`
  from {
    opacity: 0;
    right: -10rem;
  }

  to {
    opacity: 1;
    right: 0;
  }
`

const Notification = styled.div`
  position: relative;
  background: gray;
  margin-bottom: 0.5rem;
  max-width: 20rem;
  padding: 1rem;
  animation: ${slideIn} 400ms;

  &:last-of-type {
    margin-bottom: 0;
  }
`

export default Notification
