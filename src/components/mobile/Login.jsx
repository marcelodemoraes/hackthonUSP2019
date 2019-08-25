import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core'
import { navigate } from '@reach/router'

import Card from '../dashboard/charts/Card';
import { login } from './utils'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 300px;
  padding: 20px;
  > div {
    margin: 15px 0;
  }
  fieldset {
    border-radius: 30px;
  }
`

const Login = () => {
  return (
    <Wrapper>
      <Card>
        <InputWrapper>
          <TextField label={'Número USP'} variant={'outlined'}/>
          <TextField label={'Senha'} variant={'outlined'}/>
          <Button
            variant={'contained'}
            color={'primary'}
            style={{
              margin: 'auto',
              width: '100%'
            }}
            onClick={() => {
              login();
              navigate('/mobile/scheduled')
            }}
          >
            Entrar
          </Button>
        </InputWrapper>
      </Card>
    </Wrapper>
  )
}

export default Login;
