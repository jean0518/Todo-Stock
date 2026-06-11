import styled from "styled-components";
import { Icono } from "../../index"
export function Btnsave({ funcion, titulo, bgcolor, icono, url }) {
  return (
    <Container type="submit" $bgcolor={bgcolor}>
      {icono && <Icono>{icono}</Icono>}
      <span className="btn" onClick={funcion}>
        {url ? <a href={url} target="_blank" rel="noreferrer">{titulo}</a> : titulo}
      </span>
    </Container>
  );
}
const Container = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: none;
  background: none;
  cursor: pointer;

  .btn {
    background: ${(props) => props.$bgcolor || props.theme.primary};
    color: #fff;
    padding: 10px 20px;
    font-weight: 600;
    font-size: 0.85rem;
    border-radius: 10px;
    transition: all 0.2s;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    white-space: nowrap;
    a {
      text-decoration: none;
      color: inherit;
    }
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    }
    &:active {
      transform: translateY(0);
    }
  }
`;
