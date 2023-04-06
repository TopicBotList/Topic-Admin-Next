import React, { useState, useEffect } from 'react';
import { FaGlobe } from 'react-icons/fa';
import ReactGA from 'react-ga';
import CountryFlag from 'react-country-flag';
import { Pie } from 'react-chartjs-2';

export default function Analytics() {
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    ReactGA.initialize('G-LJNPH82GKE');
    ReactGA.pageview(window.location.pathname + window.location.search);
    ReactGA.event({
      category: 'Visitor',
      action: 'Visit',
    });
    ReactGA.ga((tracker) => {
      const { clientId } = tracker.get('clientTracker');
      const { ipAddress } = tracker.get('visitor');
      const visitor = {
        id: clientId,
        country: null,
      };
      fetch(`https://api.countryflag.io/v1/ip?ip=${ipAddress}`)
        .then((response) => response.json())
        .then((data) => {
          visitor.country = data.country_code;
          setVisitors((prevVisitors) => [...prevVisitors, visitor]);
        });
    });
  }, []);

  // Transform the visitors data into an object that counts the number of visitors per country
  const countries = {};
  visitors.forEach((visitor) => {
    if (visitor.country in countries) {
      countries[visitor.country] += 1;
    } else {
      countries[visitor.country] = 1;
    }
  });

  // Create the data object for the pie chart
  const data = {
    labels: Object.keys(countries).map((country) =>
      country ? (
        <CountryFlag countryCode={country} svg className="mr-1" style={{ width: '24px', height: '16px' }} />
      ) : (
        'Unknown'
      )
    ),
    datasets: [
      {
        data: Object.values(countries),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#16A085',
          '#E74C3C',
          '#3498DB',
          '#F1C40F',
          '#8E44AD',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#16A085',
          '#E74C3C',
          '#3498DB',
          '#F1C40F',
          '#8E44AD',
        ],
      },
    ],
  };

  return (
    <div className="bg-blue-800 p-3">
      <div className="flex items-center">
        <FaGlobe className="text-3xl text-white mr-3" />
        <p className="font-semibold text-lg text-white">Visitors from around the world:</p>
      </div>
      <div className="mt-3">
        <Pie data={data} />
      </div>
    </div>
  );
}
