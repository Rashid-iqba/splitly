// components/EarningsGraph.tsx
import React from 'react';
import { Platform, View } from 'react-native';

const data = [
  { x: 'Jan', y: 500 },
  { x: 'Feb', y: 750 },
  { x: 'Mar', y: 300 },
  { x: 'Apr', y: 900 },
];

export default function EarningsGraph() {
  const isWeb = Platform.OS === 'web';

  const {
    VictoryChart,
    VictoryLine,
    VictoryTheme,
    VictoryTooltip,
  } = isWeb ? require('victory') : require('victory-native');

  return (
    <View style={{ padding: 20 }}>
      <VictoryChart theme={VictoryTheme?.material}>
        <VictoryLine
          data={data}
          labels={({ datum }) => `₹${datum.y}`}
          labelComponent={<VictoryTooltip />}
          animate={{
            duration: 1000,
            onLoad: { duration: 500 },
          }}
          style={{
            data: { stroke: '#00BFFF', strokeWidth: 3 },
            labels: { fill: '#007AFF', fontSize: 12 },
          }}
        />
      </VictoryChart>
    </View>
  );
}
