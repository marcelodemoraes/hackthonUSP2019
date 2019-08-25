import React from 'react'
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, Legend,
} from 'recharts';

import Card from './Card';
import data from './data';

const CostPerDay = () => {
  return (
    <Card height={240}>
      <AreaChart
        width={700}
        height={250}
        data={data.map(item => ({ name: item.name, ['Desperdício por dia']: parseInt(item['Desperdício por dia'], 10) + Math.floor(Math.random() * 200) + 10  }))}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis type="number" domain={[0, 'dataMax + 700']} />
        <Tooltip />
        <Legend />
        <Area dataKey="Desperdício por dia" label="Desperdício por dia" fill="#8884d8" />
      </AreaChart>
    </Card>
  )
}

export default CostPerDay;
