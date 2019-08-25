import React from 'react'
import styled from 'styled-components';

import Sidebar from './Sidebar';
import Header from './Header'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = ({ children, headerLabel }) => {
  const [ isSidebarOpen, setIsSidebarOpen ] = React.useState(false);
  return (
    <>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} onOpen={() => setIsSidebarOpen(true)}/>
      <Wrapper>
        <Header label={headerLabel} openSidebar={() => setIsSidebarOpen(true)}/>
        {children}
      </Wrapper>
    </>
  )
}

export default Content
