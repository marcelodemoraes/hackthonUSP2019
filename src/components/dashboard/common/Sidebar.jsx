import React from 'react';
import { SwipeableDrawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ChevronRight from '@material-ui/icons/ChevronRight';
import styled from 'styled-components';
import { navigate } from '@reach/router'
import CalendarToday from '@material-ui/icons/CalendarToday'
import Alarm from '@material-ui/icons/Alarm';

const logoUsp = require('../../../assets/uspBranco.png');

const items = [
  {
    label: 'Horário Agendado',
    onClick: () => navigate('/mobile/scheduled'),
    icon: <Alarm/>
  },
  {
    label: 'Agendar Horário',
    onClick: () => navigate('/mobile/schedule'),
    icon: <CalendarToday/>
  },
]

const Logo = styled.div`
  margin: 30px 0;
  text-align: center;
  img {
    width: 200px;
  }
`

const StyledSidebar = styled(SwipeableDrawer)`
  .MuiListItemIcon-root:last-child {
    margin-left: auto;
  }
  .MuiListItemIcon-root {
    min-width: 30px;
  }
  .MuiDrawer-paper {
    background-color: #381654 !important;
  }
  @supports (backdrop-filter: none) {
    .MuiDrawer-paper {
      background-color: transparent !important;
      backdrop-filter: blur(10px);
      background: linear-gradient(0deg, transparent, transparent);
    }
  }
  .MuiDrawer-paperAnchorLeft {
    width: 260px;  
  }
`;

const Sidebar = ({ isOpen, onOpen, onClose }) => {
  return (
    <StyledSidebar
      open={isOpen}
      onClose={onClose}
      onOpen={onOpen}
    >
      <List>
        <Logo>
          <img src={logoUsp} alt={'logo'} />
        </Logo>
        {items.map(item => (
          <ListItem key={item.label} onClick={item.onClick}>
            <ListItemIcon  style={{ color: '#FFFFFF'}}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} style={{ color: '#FFFFFF', fontWeight: 'bold'}}/>
            <ListItemIcon  style={{ color: '#FFFFFF'}}>{<ChevronRight />}</ListItemIcon>
          </ListItem>
        ))}
      </List>
    </StyledSidebar>
  )
}

export default Sidebar
