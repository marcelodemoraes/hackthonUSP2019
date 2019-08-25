import React from 'react';
import styled from 'styled-components';

import Menu from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core'

const StyledHeader = styled.header`
  position: fixed;
  height: 75px;
  color: #ffffff;
  font-size: 20px;
  display: flex;
  align-items: center;
  width: 100%;
  backdrop-filter: blur(10px);
  //background-color: #0c3e88fa;
  background: linear-gradient(45deg, #00000054, #00000054);
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`;

const HeaderPresence = styled.div`
  height: 75px;
`

const Divider = styled.hr`
  width: 80px;
  height: 2px;
  border: none;
  background-color: #ffffff;
  margin: 8px 0;
`

const Header = ({
  label,
  openSidebar
}) => {
  return (
    <>
      <StyledHeader>
        <IconButton onClick={openSidebar} style={{ marginBottom: 'auto', marginTop: 6 }}>
          <Menu style={{ color: '#ffffff' }} />
        </IconButton>
        <Column>
          <span>
            {label}
          </span>
          <Divider/>
        </Column>

      </StyledHeader>
      <HeaderPresence/>
    </>
  )
}

export default Header;
