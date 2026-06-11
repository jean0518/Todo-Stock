import styled from "styled-components";
import { _v } from "../../styles/variables";
import { CardDatosEmpresa } from "../moleculas/CardDatosEmpresa";
import { useEmpresaStore } from "../..";
export function BannerEmpresa() {
  const { dataempresa, contadorusuarios } = useEmpresaStore();
  return (
    <Container>
      <div className="banner-bg" />
      <div className="content-wrapper-context">
        <span className="titulo">
          {<_v.iconoempresa />}
          {dataempresa?.nombre || "Mi empresa"}
        </span>
        <div className="context-text">
          Organiza y asegura todos tus productos en un solo lugar. Controla tu inventario de forma facil y eficiente.
        </div>
        <ContentCards>
          <CardDatosEmpresa
            titulo="Moneda"
            valor={dataempresa?.simbolomoneda || "—"}
          />
          <CardDatosEmpresa
            titulo="Usuarios"
            valor={contadorusuarios || 0}
          />
        </ContentCards>
      </div>
    </Container>
  )
}
const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 20px;
  overflow: hidden;
  padding: 32px;
  background: ${({ theme }) => theme.bg};
  border: 1px solid ${({ theme }) => theme.bg4};

  .banner-bg {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, ${({ theme }) => theme.bgAlpha}, transparent 60%);
    pointer-events: none;
  }

  .content-wrapper-context {
    position: relative;
    z-index: 1;
    width: 100%;
    gap: 8px;
    display: flex;
    flex-direction: column;

    .titulo {
      font-size: 1.5rem;
      font-weight: 700;
      gap: 10px;
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.text};
    }

    .context-text {
      font-weight: 400;
      font-size: 0.95rem;
      color: ${({ theme }) => theme.colorSubtitle};
    }
  }
`;
const ContentCards = styled.div`
  display: flex;
  gap: 12px;
  padding-top: 16px;
  flex-wrap: wrap;
  > * {
    flex: 0 1 auto;
  }
`;
