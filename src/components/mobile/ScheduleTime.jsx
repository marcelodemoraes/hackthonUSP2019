import * as React from 'react';
import styled from 'styled-components';

import Content from './common/Content';
import ScheduleCard from './ScheduleCard'

export const MAX_SLOTS = 100;

const Wrapper = styled.div`
  min-height: calc(100vh - 105px);
  margin-top: 30px;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media(min-width: 800px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
  }
`

const periods = [
  {
    time: '11:15',
    slots: 100,
  },
  {
    time: '11:30',
    slots: 100,
  },
  {
    time: '11:45',
    slots: 100,
  },
  {
    time: '12:00',
    slots: 74,
  },
  {
    time: '12:15',
    slots: 53,
  },
  {
    time: '12:30',
    slots: 22,
  },
  {
    time: '12:45',
    slots: 0,
  },
  {
    time: '13:00',
    slots: 0,
  },
]

const ScheduleTime = () => {

  const fullSlots = periods.filter(period => MAX_SLOTS - period.slots === 0)
  const freeSlots = periods.filter(period => MAX_SLOTS - period.slots > 0)
  return (
    <Content headerLabel={'Agendar Horário'}>
      <Wrapper>
        <CardWrapper>
          {freeSlots.map(({ time, slots }) => <ScheduleCard key={time} time={time} slots={slots}/>)}
          {fullSlots.map(({ time, slots }) => <ScheduleCard key={time} time={time} slots={slots}/>)}
        </CardWrapper>
      </Wrapper>
    </Content>
  )
}

export default ScheduleTime
