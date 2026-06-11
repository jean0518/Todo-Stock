import styled from "styled-components";
import { FaSearch } from "react-icons/fa"
export function Buscador({ setBuscador, onFocus, funcion }) {
  const buscar = (e) => {
    setBuscador(e.target.value)
  }
  function ejecutarfuncion() {
    if (funcion) {
      funcion();
    }
  }
  return (
    <Container onClick={ejecutarfuncion}>
      <article className="content">
        <FaSearch className="icono" />
        <input onFocus={onFocus} onChange={buscar} placeholder="Buscar...">
        </input>
      </article>
    </Container>
  )
}
const Container = styled.div`
  background: ${({ theme }) => theme.bg};
  border-radius: 12px;
  height: 48px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colorSubtitle};
  border: 1px solid ${({ theme }) => theme.bg4};
  transition: border-color 0.2s, box-shadow 0.2s;
  max-width: 320px;
  width: 100%;
  &:focus-within {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.bgAlpha};
  }
  .content {
    display: flex;
    padding: 0 14px;
    gap: 10px;
    align-items: center;
    width: 100%;
    .icono {
      font-size: 0.9rem;
      opacity: 0.5;
    }
    input {
      font-size: 0.9rem;
      width: 100%;
      outline: none;
      background: none;
      border: 0;
      color: ${({ theme }) => theme.text};
      &::placeholder {
        color: ${({ theme }) => theme.colorSubtitle};
        opacity: 0.6;
      }
    }
  }
`
