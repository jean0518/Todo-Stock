import { useState } from 'react';
import styled from 'styled-components';
import { _v } from '../../styles/variables';
import { Device } from '../../styles/breakpoints';
import { TablaKardex } from '../../index';
export function Tabs({ data }) {
  const [activeTab, setActiveTab] = useState(0);
  const handleClick = (index) => {
    setActiveTab(index);
  }
  return (
    <Container className="container" activeTab={`${activeTab}00%`}>
      <ul className='tabs'>
        <li className={activeTab === 0 ? "active" : ""} onClick={() => handleClick(0)}>
          {<_v.iconopie />}
          Kardex
        </li>
        <span className='glider'></span>
      </ul>
      <div className='tab-content'>
        {activeTab === 0 && <TablaKardex data={data} />}
      </div>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .tabs {
    list-style: none;
    display: flex;
    position: relative;
    gap: 4px;
    padding: 4px;
    background: ${({ theme }) => theme.bg2};
    border-radius: 12px;
    width: fit-content;

    li {
      gap: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 42px;
      padding: 0 20px;
      font-size: 0.9rem;
      font-weight: 500;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.2s;
      color: ${({ theme }) => theme.colorSubtitle};
      position: relative;
      z-index: 2;

      &.active {
        background: ${({ theme }) => theme.bg};
        color: ${({ theme }) => theme.primary};
        font-weight: 600;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
      }
    }

    .glider {
      display: none;
    }
  }

  .tab-content {
    margin-top: 16px;
    width: 100%;
  }
`
