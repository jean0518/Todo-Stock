import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import { FiSun, FiMoon } from "react-icons/fi";
export function ToggleTema() {
  const { theme, setTheme } = useContext(ThemeContext);
  const isDark = theme === "dark";
  return (
    <Button onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))} title={isDark ? "Modo claro" : "Modo oscuro"}>
      {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
    </Button>
  );
}
const Button = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: ${({ theme }) => theme.bgAlpha};
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: #fff;
    transform: scale(1.05);
  }
`;
