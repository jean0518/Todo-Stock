import styled from "styled-components";
import { Title, BannerEmpresa } from "../../index";
export function HomeTemplate() {
  return (
    <Container>
      <section className="area1">
        <Title>Tu empresa</Title>
      </section>
      <section className="main">
        <BannerEmpresa />
      </section>
    </Container>
  );
}
const Container = styled.div`
  padding: 24px 0;
  .area1 {
    margin-bottom: 24px;
  }
  .main {
    width: 100%;
  }
`;
