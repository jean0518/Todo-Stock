import styled from "styled-components";
import { UserAuth, _v } from "../../index";

export function Header() {
  const { user } = UserAuth();

  return (
    <Container>
      <div className="header-brand">
        <img src={_v.logo} alt="logo" />
        <div className="brand-info">
          <strong>Inventario TI</strong>
          <span>{user?.email || "Usuario"}</span>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .header-brand {
    display: flex;
    align-items: center;
    gap: 12px;
    img {
      width: 32px;
      height: auto;
    }
    .brand-info {
      display: flex;
      flex-direction: column;
      strong {
        font-size: 1rem;
        color: ${({ theme }) => theme.text};
      }
      span {
        font-size: 0.75rem;
        color: ${({ theme }) => theme.colorSubtitle};
        max-width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
`;
