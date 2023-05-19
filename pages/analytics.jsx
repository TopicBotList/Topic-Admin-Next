import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const AnalyticsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #000;
  color: #fff;
  font-family: 'Arial', sans-serif;
`;

const Heading = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const Image = styled.img`
  width: 200px;
  margin-bottom: 2rem;
`;

const DataContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const DataBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #0f088a;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
`;

const DataLabel = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const DataValue = styled.p`
  font-size: 2rem;
  font-weight: bold;
`;

const Analytics = () => {
  const [analyticsData] = useState({
    visitors: Math.floor(Math.random() * 10000),
    pageViews: Math.floor(Math.random() * 100000),
    conversions: Math.floor(Math.random() * 100),
  });

  useEffect(() => {
    const interval = setInterval(() => {}, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnalyticsContainer>
      <Image src="https://cdn.topiclist.xyz/images/png/TopicList5.png" alt="Analytics" />
      <Heading>Topic Analytics</Heading>
      <DataContainer>
        <DataBox>
          <DataLabel>Visitors</DataLabel>
          <DataValue>{analyticsData.visitors}</DataValue>
        </DataBox>
        <DataBox>
          <DataLabel>Page Views</DataLabel>
          <DataValue>{analyticsData.pageViews}</DataValue>
        </DataBox>
        <DataBox>
          <DataLabel>Conversions</DataLabel>
          <DataValue>{analyticsData.conversions}</DataValue>
        </DataBox>
      </DataContainer>
    </AnalyticsContainer>
  );
};

export default Analytics;
