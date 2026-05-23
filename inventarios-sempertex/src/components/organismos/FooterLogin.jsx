import styled from "styled-components";
import { GiPadlock } from "react-icons/gi";
export function FooterLogin() {
  return (
    <Container>
      <section className="lock">
        <GiPadlock />
        <span>
          Esta es una página segura de codigo369. Si tienes dudas sobre la
          autenticidad de la web, comunícate con nosotros al 311-9898.
        </span>
      </section>
      <section className="derechos">
        <span>StockPRO S.A - RUC: 20100047218</span>
        <span className="separador">|</span>
        <span>Todos los derechos reservados</span>
        <span className="separador">|</span>
        <span>© 2023 codigo369.com</span>
      </section>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
  gap: 6px;
  text-align: center;
  width: 100%;

  .lock {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding-bottom: 6px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .derechos {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px;
    .separador {
      opacity: 0.4;
    }
  }
`;
