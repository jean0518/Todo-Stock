import styled from "styled-components";
export function CardDatosEmpresa({ titulo, valor, img }) {
  return (
    <Container>
      <div className="card">
        <div className="pricing-block-content">
          <p className="pricing-plan">{titulo}</p>
          <div className="price-value">
            <p className="price-number">{valor}</p>
            {img && <img src={img} alt="" />}
          </div>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  .card {
    min-width: 150px;
    background: ${({ theme }) => theme.bgAlpha};
    padding: 16px 20px;
    border-radius: 14px;
    border: 1px solid ${({ theme }) => theme.bg4};
    color: ${({ theme }) => theme.text};

    .pricing-block-content {
      display: flex;
      flex-direction: column;
      gap: 4px;

      .pricing-plan {
        font-size: 0.8rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colorSubtitle};
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .price-value {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 1.5rem;
        font-weight: 700;
        color: ${({ theme }) => theme.primary};

        img {
          width: 32px;
          height: auto;
        }
      }
    }
  }
`;
