import styled from 'styled-components';

const Subline = styled.div`
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.colors.grey.light};
  ${props => props.sectionTitle && 'padding: 1rem 0'};
  ${props => props.sectionTitle && 'text-align: center'};
`;

export default Subline;
