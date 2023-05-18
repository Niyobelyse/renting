import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Label } from 'recharts';

const data = [
  { name: 'House', value: 12},
  { name: 'Apartment', value: 8 },
  { name: 'Offices', value: 9 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default class Chart1 extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

  render() {
    return (
        <>
        <Label
        value={`Rentals: ${data.reduce((sum, entry) => sum + entry.value, 0)}`}
        position="center"
        fill="#000"
        fontSize={16}
      />
      <PieChart width={1000} height={600} onMouseEnter={this.onPieEnter}>

        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          <Label
            value={`Rentals: ${data.reduce((sum, entry) => sum + entry.value, 0)}`}
            position="center"
            fill="#000"
            fontSize={16}
          />
        </Pie>
      </PieChart>
        
        </>
    );
  }
}
