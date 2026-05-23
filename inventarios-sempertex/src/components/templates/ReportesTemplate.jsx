import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
export function ReportesTemplate() {
  return (
    <Container>
      <PageContainer>
        <Content>
          <Outlet />
        </Content>
        <Sidebar>
          <SidebarSection>
            <SidebarTitle>Stock Actual:</SidebarTitle>
            <SidebarItem to="Stock-actual-por-producto">Por producto</SidebarItem>
            <SidebarItem to="Stock-actual-todos">Todos</SidebarItem>
          </SidebarSection>
        </Sidebar>
      </PageContainer>
    </Container>
  );
}

const Content = styled.div`
  flex: 1;
  min-width: 0;
`
const PageContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 16px;
  width: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`
const Container = styled.div`
  padding: 24px 0;
  width: 100%;
  color: ${({ theme }) => theme.text};
`;
const Sidebar = styled.div`
  @media (min-width: 768px) {
    width: 220px;
    flex-shrink: 0;
  }
`;
const SidebarSection = styled.div`
  background: ${({ theme }) => theme.bg};
  border: 1px solid ${({ theme }) => theme.bg4};
  border-radius: 16px;
  padding: 16px;
`;
const SidebarTitle = styled.h3`
  margin-bottom: 12px;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colortitlecard};
`;
const SidebarItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 10px 12px;
  border-radius: 10px;
  text-decoration: none;
  color: ${({ theme }) => theme.colorSubtitle};
  font-size: 0.9rem;
  transition: all 0.15s;
  margin: 2px 0;
  &:hover {
    background: ${({ theme }) => theme.bgAlpha};
    color: ${({ theme }) => theme.primary};
  }
  &.active {
    background: ${({ theme }) => theme.bgAlpha};
    color: ${({ theme }) => theme.primary};
    font-weight: 600;
  }
`
