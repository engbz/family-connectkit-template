import styled from 'styled-components'

const Title = (props) => (
  <ScTitle>{props.children}</ScTitle>
);

export default Title;

const ScTitle = styled.h1`
    font-size: 64px;
    color: ${({ theme }) => theme.colors.primary};
  `