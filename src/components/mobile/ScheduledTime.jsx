import * as React from 'react';
import styled from 'styled-components';
import { navigate } from '@reach/router'

import Content from './common/Content';
import Button from './common/Button';
import { clearData, getData } from './utils'

const TimeWrapper = styled.div`
  border-radius: 50%;
  width: 220px;
  height: 220px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  span {
    font-size: 55px;
    font-weight: bold;
    color: #283761;
  }
  span:first-child {
    font-weight: normal;
    font-size: 18px;
  }
  span:last-child {
    font-weight: normal;
    font-size: 16px;
  }
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: calc(100vh - 75px);
  flex-direction: column;
  justify-content: space-evenly;
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  > button {
    margin: 10px 0;
  }
`;

const NotScheduled = styled.div`
  color: #ffffff;
  font-size: 40px;
  text-align: center;
`;

const formatDate = (date) => date ? `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}` : '';


const ScheduledTime = () => {
  const [scheduled, setScheduled] = React.useState(false);
  const data = getData();
  React.useEffect(() => {
    if (data) setScheduled(true);
  }, [data]);

  return (
    <Content headerLabel={'Horário Agendado'}>
      <Wrapper>
        { scheduled ? (
          <>
            <TimeWrapper>
          <span>
            Você agendou:
          </span>
              <span>
            {data.time}h
          </span>
              <span>
            {formatDate(new Date())}
          </span>
            </TimeWrapper>
            <ButtonWrapper>
              <Button variant={'contained'} color={'primary'} onClick={() => navigate('/mobile/schedule')}>
                Marcar outro horário
              </Button>
              <Button variant={'contained'} color={'secondary'} onClick={() => {
                clearData();
                setScheduled(false);
              }}>
                Desmarcar
              </Button>
            </ButtonWrapper>
          </>
        ) : (
          <>
            <NotScheduled>
              Você ainda não agendou seu horário
            </NotScheduled>
            <ButtonWrapper>
              <Button variant={'contained'} color={'primary'} onClick={() => navigate('/mobile/schedule')}>
                Agendar um horário
              </Button>
            </ButtonWrapper>
          </>
        )}

      </Wrapper>
    </Content>
  )
}

export default ScheduledTime
