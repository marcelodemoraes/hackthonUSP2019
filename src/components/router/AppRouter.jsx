import React from 'react';
import { Router } from '@reach/router';
import { navigate } from '@reach/router';
import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core'

import ScheduledTime from '../mobile/ScheduledTime';
import ScheduleTime from '../mobile/ScheduleTime';
import Dashboard from '../dashboard/Dashboard';
import Login from '../mobile/Login';
import {isLoggedIn} from '../mobile/utils';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;

const AppRouter = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    const { pathname } = window.location;
    if(pathname !== '/login' && !isLoggedIn()) {
      setIsLoading(false);
      navigate('/login')
    } else setIsLoading(false);
  }, []);

  if (isLoading) return (
    <Wrapper>
      <CircularProgress color={'secondary'}/>
    </Wrapper>
  )
  return (
    <Router>
      <ScheduleTime path={'/mobile/schedule'}/>
      <ScheduledTime path={'/mobile/scheduled'} default/>
      <Dashboard path={'/dashboard'}/>
      <Login path={'/login'}/>
    </Router>
  )
}

export default AppRouter;
