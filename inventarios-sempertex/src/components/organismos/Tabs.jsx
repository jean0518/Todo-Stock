/* import { useState } from 'react'; */
import styled from 'styled-components';
import { _v } from '../../styles/variables';
import { Device } from '../../styles/breakpoints';
import { TablaKardex } from '../../index';
export function Tabs({ data }) {
  /* const [activeTab, setActiveTab] = useState(0);
  const handleClick = (index) => {
    setActiveTab(index);
  } */
  return (
    <Container className="container" /* activeTab={`${activeTab}00%`} */>
      {/* <ul className='tabs'>
        <li className={activeTab === 0 ? "active" : ""} onClick={() => handleClick(0)}>
          {<_v.iconopie />}
          Kardex
        </li>
        <span className='glider'></span>
      </ul> */}
      <div className='tab-content'>
        <TablaKardex data={data} />
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
  }

  .tab-content {
    margin-top: 16px;
    width: 100%;
  }
`
