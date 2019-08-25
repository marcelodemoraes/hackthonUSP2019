import React from 'react'
import {
  LineChart, Line, XAxis, YAxis, Tooltip, Legend,
} from 'recharts';

import Card from './Card';
import data from './data';

const UserPerDay = ({ width }) => {
  return (
    <Card width={width - 20} height={300}>
      <LineChart
        width={width - 120}
        height={300}
        data={data.map(item => ({ name: item.name, ['Usuários por dia']: parseInt(item['Usuários por dia'], 10) + Math.floor(Math.random() * 200) + 10  }))}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis type="number" domain={[0, 'dataMax + 700']} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Usuários por dia" label="Usuários por dia" stroke="#8884d8" activeDot={{ r: 4 }} />
      </LineChart>
    </Card>
  )
}

export default UserPerDay;
