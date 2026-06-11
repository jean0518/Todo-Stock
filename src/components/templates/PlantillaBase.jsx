import styled from "styled-components";
export function PlantillaBase() {
  return (
    <Container>
      <section className="area1" />
      <section className="area2" />
      <section className="main" />
    </Container>
  )
}
const Container = styled.div`
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  .area1 {
    height: 60px;
    background: ${({ theme }) => theme.bgAlpha};
    border-radius: 12px;
  }
  .area2 {
    height: 60px;
    background: ${({ theme }) => theme.bgAlpha};
    border-radius: 12px;
  }
  .main {
    min-height: 300px;
    background: ${({ theme }) => theme.bgAlpha};
    border-radius: 12px;
  }
`
