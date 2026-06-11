import styled from 'styled-components';
import { _v } from '../../../index';
export function Paginacion({ table, pagina, maximo, irinicio }) {
  return (
    <Container>
      <button onClick={() => irinicio()} disabled={!table.getCanPreviousPage()}>
        <span className='icono'>{<_v.iconotodos />}</span>
      </button>
      <button disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()}>
        <span className='icono izquierda'>{<_v.iconoflechaderecha />}</span>
      </button>
      <span className="page-num">{pagina}</span>
      <p className="page-total">de {maximo}</p>
      <button disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}>
        <span className='icono'>{<_v.iconoflechaderecha />}</span>
      </button>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  button {
    background: ${({ theme }) => theme.primary};
    border: none;
    padding: 6px;
    border-radius: 8px;
    height: 32px;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;
    &:hover:not([disabled]) {
      opacity: 0.85;
      transform: scale(1.05);
    }
    .icono {
      color: #fff;
      font-size: 0.9rem;
      display: flex;
      &.izquierda {
        transform: rotate(180deg);
      }
    }
  }
  button[disabled] {
    background: ${({ theme }) => theme.bg4};
    cursor: not-allowed;
    opacity: 0.5;
  }
  .page-num {
    font-weight: 600;
    color: ${({ theme }) => theme.text};
    font-size: 0.9rem;
  }
  .page-total {
    color: ${({ theme }) => theme.colorSubtitle};
    font-size: 0.85rem;
  }
`
