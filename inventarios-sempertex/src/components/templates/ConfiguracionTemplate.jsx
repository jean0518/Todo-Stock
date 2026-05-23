import styled from "styled-components";
import { Link } from "react-router-dom";
import { DataModulosConfiguracion } from "../../utils/dataEstatica";
import { Mensaje } from "../moleculas/Mensaje";

export function ConfiguracionTemplate() {
  return (
    <Container>
      <div id="cards">
        {DataModulosConfiguracion.map((item, index) => {
          return (
            <Link to={item.state ? item.link : ""} className={item.state ? "card" : "card false"} key={index}>
              <Mensaje state={item.state} />
              <div className="card-content">
                <div className="card-image">
                  <img src={item.icono} />
                </div>
                <div className="card-info-wrapper">
                  <div className="card-info">
                    <div className="card-info-title">
                      <h3>{item.title}</h3>
                      <h4>{item.subtitle}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </Container>
  );
}
const Container = styled.div`
  padding: 24px 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: calc(100vh - 112px);

  #cards {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    max-width: 916px;
    width: 100%;
    justify-content: center;
  }

  #cards:hover > .card::after {
    opacity: 1;
  }

  .card {
    background: ${({ theme }) => theme.bgcards};
    border-radius: 16px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 280px;
    height: 240px;
    transition: all 0.3s ease;
    border: 1px solid ${({ theme }) => theme.bg4};
    overflow: hidden;

    &:hover {
      border-color: ${({ theme }) => theme.primary};
      transform: translateY(-4px);
      box-shadow: 0 12px 40px rgba(79, 140, 255, 0.15);
      .card-image img {
        filter: grayscale(0);
        transform: scale(1.1);
      }
    }

    &.false {
      border-color: ${({ theme }) => theme.bg4};
      &:hover {
        border-color: #FF6B6B;
        box-shadow: 0 12px 40px rgba(255, 107, 107, 0.15);
      }
    }
  }

  .card::after {
    border-radius: inherit;
    content: "";
    height: 100%;
    left: 0px;
    opacity: 0;
    position: absolute;
    top: 0px;
    transition: opacity 500ms;
    width: 100%;
    background: radial-gradient(
      600px circle at var(--mouse-x) var(--mouse-y),
      rgba(79, 140, 255, 0.15),
      transparent 40%
    );
    z-index: 1;
    pointer-events: none;
  }

  .card > .card-content {
    background: ${({ theme }) => theme.bgcards};
    border-radius: inherit;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 16px;
    position: relative;
    z-index: 2;
  }

  h3, h4 {
    color: ${({ theme }) => theme.colorsubtitlecard};
    font-weight: 600;
    margin: 0;
  }

  .card-image {
    align-items: center;
    display: flex;
    height: 120px;
    justify-content: center;
    img {
      transition: all 0.3s;
      height: 70%;
      filter: grayscale(60%);
    }
  }

  .card-info-wrapper {
    align-items: center;
    display: flex;
    flex-grow: 1;
    justify-content: flex-start;
    padding: 0 12px;
  }

  .card-info-title > h3 {
    font-size: 1.05rem;
    line-height: 1.3;
  }

  .card-info-title > h4 {
    color: ${({ theme }) => theme.colorSubtitle};
    font-size: 0.8rem;
    margin-top: 4px;
    font-weight: 400;
  }

  @media (max-width: 600px) {
    .card {
      width: calc(50% - 6px);
      height: 200px;
    }
    .card-image {
      height: 80px;
    }
  }

  @media (max-width: 400px) {
    .card {
      width: 100%;
      height: 180px;
    }
  }
`;
