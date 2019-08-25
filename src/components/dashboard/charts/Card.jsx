import React from 'react';
import styled from 'styled-components';
import { Paper } from '@material-ui/core'

const StyledPaper = styled(Paper)`
  && {
    border-radius: 15px;
    box-shadow: 0 2px 13px 0 rgba(0,0,0,0.75);
  }
  width: ${props => props.width - 60}px;
  height: ${props => props.height + 60}px;
  margin: 15px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = ({ children, ...props }) => <StyledPaper {...props}>{children}</StyledPaper>

export default Card;
