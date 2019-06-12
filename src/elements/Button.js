import styled from 'styled-components';
import { lighten, darken } from 'polished';

const Button = styled.button`
  background: ${props => (props.whatsapp ? '#25d366' : props.theme.colors.primary)};
  border: none;
  display: flex;
  align-items: center;
  ${props => props.center && 'margin: 10px auto'};
  border-radius: ${props => (props.big && '1.5rem') || (props.small && '0.8rem') || '1rem'};
  font-size: ${props => (props.big && '1.2rem') || (props.small && '0.8rem') || '1rem'};
  color: white;
  padding: ${props => (props.big && '0.35rem 1.6rem') || (props.small && '0.15rem 1.25rem') || '0.25rem 1.5rem'};
  transition: all ${props => props.theme.transitions.normal};
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  transform: translate3d(0, 0, 0);

  &:hover {
    background: ${props => (props.whatsapp ? darken(0.1, '#25d366') : lighten(0.05, props.theme.colors.primary))};
    cursor: pointer;
    transform: translate3d(0, -2px, 0);
    color: white;
  }

  &:focus {
    outline: none;
  }

  svg {
    width: 20px;
    height: 20px;
    margin-right: 0.75rem;
    fill: white;
  }
`;

export default Button;
