import styled from "styled-components";
import { Link } from "react-router-dom";
import { DataModulosConfiguracion } from "../../utils/dataEstatica";
import { Mensaje } from "../moleculas/Mensaje";

export function ConfiguracionTemplate() {
  return (
    <Container>
      <Grid>
        {DataModulosConfiguracion.map((item, index) => (
          <Card to={item.state ? item.link : ""} className={item.state ? "" : "disabled"} key={index}>
            <Mensaje state={item.state} />
            <CardContent>
              <CardImage>
                <img src={item.icono} />
              </CardImage>
              <CardInfo>
                <Title>{item.title}</Title>
                <Subtitle>{item.subtitle}</Subtitle>
              </CardInfo>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Container>
  );
}

const Container = styled.div`
  padding: 24px 0;
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 112px);
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  max-width: 1024px;
  width: 100%;
  align-content: center;
`;

const Card = styled(Link)`
  flex: 0 0 320px;
  height: 280px;
  background: ${({ theme }) => theme.bgcards};
  border-radius: 16px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  position: relative;
  border: 1px solid ${({ theme }) => theme.bg4};
  overflow: hidden;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(79, 140, 255, 0.15);
    img { filter: grayscale(0); transform: scale(1.1); }
  }

  &.disabled {
    &:hover {
      border-color: #FF6B6B;
      box-shadow: 0 12px 40px rgba(255, 107, 107, 0.15);
    }
  }
`;

const CardContent = styled.div`
  background: ${({ theme }) => theme.bgcards};
  border-radius: inherit;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 16px;
  position: relative;
  z-index: 2;
`;

const CardImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45%;
  img {
    height: 100%;
    transition: all 0.3s;
    filter: grayscale(60%);
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  padding: 0 12px;
  text-align: center;
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.colorsubtitlecard};
  font-size: 1.05rem;
  margin: 0;
  font-weight: 600;
`;

const Subtitle = styled.h4`
  color: ${({ theme }) => theme.colorSubtitle};
  font-size: 0.8rem;
  margin: 4px 0 0;
  font-weight: 400;
`;
