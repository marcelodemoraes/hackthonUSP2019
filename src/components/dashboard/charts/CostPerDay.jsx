import React from 'react'
import {
  BarChart, Bar, XAxis, YAxis,Tooltip, Legend,
} from 'recharts';

import Card from './Card';
import data from './data';

const CostPerDay = () => {
  return (
    <Card height={240}>
      <BarChart
        width={700}
        height={250}
        data={data.map(item => ({ name: item.name, ['Custo por dia']: parseInt(item['Custo por dia'], 10) + Math.floor(Math.random() * 200) + 10  }))}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis type="number" domain={[0, 'dataMax + 700']} />
        <Tooltip />
        <Legend />
        <Bar dataKey="Custo por dia" label="Custo por dia" fill="#8884d8" />
      </BarChart>
    </Card>
  )
}

export default CostPerDay;
