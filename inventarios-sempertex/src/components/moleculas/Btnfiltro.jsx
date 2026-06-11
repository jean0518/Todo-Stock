import styled from "styled-components";
export function Btnfiltro({ bgcolor, textcolor, icono, funcion }) {
  return (
    <Container $textcolor={textcolor} $bgcolor={bgcolor} onClick={funcion}>
      <span>{icono}</span>
    </Container>
  )
}
const Container = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: ${(props) => props.$bgcolor || props.theme.primary};
  color: ${(props) => props.$textcolor || "#fff"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 12px rgba(79, 140, 255, 0.25);
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(79, 140, 255, 0.35);
  }
  &:active {
    transform: scale(0.95);
  }
`
