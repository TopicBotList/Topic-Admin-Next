import Head from 'next/head';
import LineChart from '../../components/LineChart';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Line Chart Example</title>
      </Head>
      <h1>Line Chart Example</h1>
      <LineChart />
    </div>
  );
};

export default Home;