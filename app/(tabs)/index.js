import React from 'react';
import { Dimensions, ScrollView, Text } from 'react-native';
import {
  BarChart,
  ContributionGraph,
  LineChart,
  PieChart,
  ProgressChart,
} from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width - 32;

export default function AllChartsScreen() {
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [{ data: [500, 750, 300, 900] }],
  };

  const barData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [{ data: [20, 45, 28, 80, 99] }],
  };

  const pieData = [
    { name: 'Food', population: 500, color: '#f00', legendFontColor: '#7F7F7F', legendFontSize: 12 },
    { name: 'Rent', population: 1000, color: '#0f0', legendFontColor: '#7F7F7F', legendFontSize: 12 },
    { name: 'Utilities', population: 200, color: '#00f', legendFontColor: '#7F7F7F', legendFontSize: 12 },
  ];

  const progressData = {
    labels: ['Groceries', 'Savings', 'Fuel'],
    data: [0.4, 0.6, 0.8],
  };

  const contributionData = [
    { date: '2025-05-01', count: 1 },
    { date: '2025-05-02', count: 2 },
    { date: '2025-05-03', count: 3 },
    { date: '2025-05-04', count: 4 },
    { date: '2025-05-05', count: 5 },
    { date: '2025-05-06', count: 2 },
  ];

  const chartConfig = {
    backgroundGradientFrom: '#f1f5f9',
    backgroundGradientTo: '#e0f2fe',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
    labelColor: () => '#333',
    style: { borderRadius: 16 },
    propsForDots: { r: '4', strokeWidth: '2', stroke: '#007AFF' },
  };

  return (
    <ScrollView style={{ padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 12 }}>📈 Line Chart</Text>
      <LineChart data={lineData} width={screenWidth} height={220} chartConfig={chartConfig} />

      <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 12 }}>📊 Bar Chart</Text>
      <BarChart data={barData} width={screenWidth} height={220} chartConfig={chartConfig} />

      <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 12 }}>🥧 Pie Chart</Text>
      <PieChart
        data={pieData}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />

      <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 12 }}>📤 Progress Ring</Text>
      <ProgressChart data={progressData} width={screenWidth} height={220} chartConfig={chartConfig} />

      <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 12 }}>💻 Contribution Graph</Text>
      <ContributionGraph
        values={contributionData}
        endDate={new Date('2025-05-18')}
        numDays={30}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
      />
    </ScrollView>
  );
}
