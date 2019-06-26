import styled from 'styled-components';

const Section = styled.section`
  background: ${props => props.background && props.theme.colors.bg.default};
  padding: 4rem 1rem;
`;

export default Section;
