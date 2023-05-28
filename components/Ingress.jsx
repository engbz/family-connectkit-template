import styled from 'styled-components'

const Ingress = (props) => (
  <ScIngress className={props.className}>{props.children}</ScIngress>
);

export default Ingress;

const ScIngress = styled.h2`
    font-size: 40px;
    color: ${({ theme }) => theme.colors.secondary};
  `