import React from 'react';
import { SwipeableDrawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ChevronRight from '@material-ui/icons/ChevronRight';
import styled from 'styled-components';
import { navigate } from '@reach/router'
import CalendarToday from '@material-ui/icons/CalendarToday'
import Alarm from '@material-ui/icons/Alarm';
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew';
import {logout} from '../utils'
import { Link } from '@reach/router';

const logoUsp = require('../../../assets/uspBranco.png');

const items = [
  {
    label: 'Horário Agendado',
    to: '/mobile/scheduled',
    icon: <Alarm/>
  },
  {
    label: 'Agendar Horário',
    to: '/mobile/schedule',
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
  .active {
    * {
      color: #a272ca;
    }
  }
  a {
    text-decoration: none;
  }
  @supports (backdrop-filter: none) {
    .MuiDrawer-paper {
      background-color: transparent !important;
      backdrop-filter: blur(10px);
      background: linear-gradient(45deg, transparent, transparent);
    }
  }
  .MuiDrawer-paperAnchorLeft {
    width: 260px;  
  }
`;

const Item = ({ label, onClick, icon, to }) => {
  if (to) {
    return (
      <Link
        to={to}
        getProps={({ isCurrent }) => isCurrent ? { className: "active" } : null}
      >
        <ListItem key={label} style={{ cursor: 'pointer' }}>
          <ListItemIcon  style={{ color: '#FFFFFF'}}>{icon}</ListItemIcon>
          <ListItemText primary={label} style={{ color: '#FFFFFF', fontWeight: 'bold'}}/>
          <ListItemIcon  style={{ color: '#FFFFFF'}}>{<ChevronRight />}</ListItemIcon>
        </ListItem>
      </Link>
    )
  }
  return (
    <ListItem key={label} onClick={onClick} style={{ cursor: 'pointer' }}>
      <ListItemIcon  style={{ color: '#FFFFFF'}}>{icon}</ListItemIcon>
      <ListItemText primary={label} style={{ color: '#FFFFFF', fontWeight: 'bold'}}/>
    </ListItem>
  )
}

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
          <Item {...item} key={item.label}/>
        ))}
        <Item
          onClick={() => {
            logout()
            navigate('/login')
          }}
          label={'Sair'}
          icon={<PowerSettingsNew/>}
        />
      </List>
    </StyledSidebar>
  )
}

export default Sidebar
