import React from 'react';
import  styled from 'styled-components';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ArrowDownward from '@material-ui/icons/ArrowDownward';

import Content from './common/Content';
import UserPerDay from './charts/UserPerDay';
import CostPerDay from './charts/CostPerDay';
import WastePerDay from './charts/WastePerDay';
import Card from './charts/Card';

const Row = styled.div`
  display: flex;
`;

const WidgetLabel = styled.span`
 font-size: 20px;
`;

const StaticsValue = styled.span`
  font-size: 14px;
`

const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const WidgetValue = styled.span`
  font-weight: bold;
  font-size: 38px;
`;

const Widget = ({ label, value, statistics }) => {
  return (
    <Card width={380} height={100}>
      <Column>
        <Row style={{
          justifyContent: 'space-evenly',
          width: '100%'
        }}>
          <WidgetValue>
            { value }
          </WidgetValue>
          <Column>
            { statistics > 0 ? <ArrowUpward style={{ color: '#07b326' }}/> : <ArrowDownward style={{ color: '#d60404' }}/> }
              <StaticsValue style={{ color: statistics > 0 ? '#07b326' : '#d60404', fontWeight: 'bold' }}>
              {statistics}%
            </StaticsValue>
          </Column>
        </Row>
        <WidgetLabel>
          { label }
        </WidgetLabel>
      </Column>
    </Card>
  )
}

const widgetData = [
  {
    label: 'Refeições Servidas',
    value: 968,
    statistics: 15.5
  },
  {
    label: 'Expectativa de Usuários',
    value: 1254,
    statistics: 10.3
  },
  {
    label: 'Média de Permanência',
    value: '23 min',
    statistics: -9.3
  },
  {
    label: 'Expectativa de Permanência',
    value: '22 min',
    statistics: -8.3
  },
]

const Dashboard = () => {
  return (
    <Content headerLabel={'Estatísticas'}>
      <Row>
        {widgetData.map(data => <Widget {...data}/>)}
      </Row>
      <UserPerDay width={1540} height={600}/>
      <Row>
        <CostPerDay />
        <WastePerDay />
      </Row>
    </Content>
  )
}

export default Dashboard;
