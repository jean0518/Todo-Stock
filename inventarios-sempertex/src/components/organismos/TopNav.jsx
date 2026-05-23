import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { _v, ToggleTema, useAuthStore } from "../../index";
import { LinksArray, SecondarylinksArray, DesplegableUser } from "../../utils/dataEstatica";
import { useState } from "react";
import { UserAuth } from "../../index";

export function TopNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const { signOut } = useAuthStore();
  const navigate = useNavigate();
  const { user } = UserAuth();

  const handleLogout = async () => {
    const success = await signOut();
    if (success) navigate("/login", { replace: true });
  };

  return (
    <Nav>
      <div className="nav-inner">
        <div className="nav-left">
          <div className="logo" onClick={() => navigate("/")}>
            <img src={_v.logo} alt="logo" />
            <span className="logo-text">Inventario TI</span>
          </div>
        </div>

        <div className={`nav-center ${mobileOpen ? "open" : ""}`}>
          {LinksArray.map(({ icon, label, to }) => (
            <NavLink
              key={label}
              to={to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
            >
              <span className="nav-icon">{icon}</span>
              <span className="nav-label">{label}</span>
            </NavLink>
          ))}
          {SecondarylinksArray.map(({ icon, label, to }) => (
            <NavLink
              key={label}
              to={to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
            >
              <span className="nav-icon">{icon}</span>
              <span className="nav-label">{label}</span>
            </NavLink>
          ))}
        </div>

        <div className="nav-right">
          <ToggleTema />
          <div className="user-section" onClick={() => setUserOpen(!userOpen)}>
            <div className="user-avatar">
              <img src="https://i.ibb.co/kGYgRZ8/programador.png" alt="user" />
            </div>
            <span className="user-email">{user?.email || "Usuario"}</span>
            {userOpen && (
              <div className="user-dropdown">
                {DesplegableUser.map((item) => (
                  <div
                    key={item.tipo}
                    className="dropdown-item"
                    onClick={() => {
                      setUserOpen(false);
                      if (item.tipo === "cerrarsesion") handleLogout();
                    }}
                  >
                    <span className="dropdown-icon">{item.icono}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button
            className={`hamburger ${mobileOpen ? "active" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: ${({ theme }) => theme.bgtgderecha};
  border-bottom: 1px solid ${({ theme }) => theme.bg4};
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
  height: 64px;

  .nav-inner {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  .nav-left {
    display: flex;
    align-items: center;
    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      img {
        width: 36px;
        height: auto;
      }
      .logo-text {
        font-weight: 700;
        font-size: 1.15rem;
        color: ${({ theme }) => theme.primary};
        white-space: nowrap;
      }
    }
  }

  .nav-center {
    display: flex;
    align-items: center;
    gap: 4px;
    .nav-link {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      border-radius: 10px;
      text-decoration: none;
      color: ${({ theme }) => theme.colorSubtitle};
      font-weight: 500;
      font-size: 0.9rem;
      transition: all 0.2s;
      &:hover {
        background: ${({ theme }) => theme.bgAlpha};
        color: ${({ theme }) => theme.primary};
      }
      &.active {
        background: ${({ theme }) => theme.bgAlpha};
        color: ${({ theme }) => theme.primary};
        font-weight: 600;
      }
      .nav-icon {
        display: flex;
        font-size: 1.2rem;
      }
    }
  }

  .nav-right {
    display: flex;
    align-items: center;
    gap: 12px;
    position: relative;

    .user-section {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 6px 12px;
      border-radius: 30px;
      cursor: pointer;
      transition: background 0.2s;
      position: relative;
      &:hover {
        background: ${({ theme }) => theme.bgAlpha};
      }
      .user-avatar {
        width: 34px;
        height: 34px;
        border-radius: 50%;
        overflow: hidden;
        border: 2px solid ${({ theme }) => theme.primary};
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .user-email {
        font-size: 0.85rem;
        font-weight: 500;
        color: ${({ theme }) => theme.text};
        max-width: 140px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .user-dropdown {
        position: absolute;
        top: calc(100% + 8px);
        right: 0;
        min-width: 200px;
        background: ${({ theme }) => theme.bg};
        border: 1px solid ${({ theme }) => theme.bg4};
        border-radius: 12px;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        overflow: hidden;
        z-index: 100;
        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          cursor: pointer;
          transition: background 0.15s;
          color: ${({ theme }) => theme.text};
          font-size: 0.9rem;
          &:hover {
            background: ${({ theme }) => theme.bgAlpha};
          }
          .dropdown-icon {
            display: flex;
            font-size: 1.1rem;
            color: ${({ theme }) => theme.primary};
          }
        }
      }
    }

    .hamburger {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 4px;
      span {
        display: block;
        width: 24px;
        height: 2.5px;
        border-radius: 4px;
        background: ${({ theme }) => theme.text};
        transition: all 0.3s;
      }
      &.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }
      &.active span:nth-child(2) {
        opacity: 0;
      }
      &.active span:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
      }
    }
  }

  @media (max-width: 768px) {
    .nav-center {
      position: fixed;
      top: 64px;
      left: 0;
      right: 0;
      background: ${({ theme }) => theme.bgtgderecha};
      flex-direction: column;
      padding: 16px;
      gap: 4px;
      border-bottom: 1px solid ${({ theme }) => theme.bg4};
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
      transform: translateY(-120%);
      opacity: 0;
      transition: all 0.3s;
      &.open {
        transform: translateY(0);
        opacity: 1;
      }
      .nav-link {
        width: 100%;
        padding: 12px 16px;
      }
    }
    .nav-right {
      .user-email {
        display: none;
      }
      .hamburger {
        display: flex;
      }
    }
  }
`;
