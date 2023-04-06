import React, { useState, useEffect } from 'react';
import { FaGlobe } from 'react-icons/fa';
import ReactGA from 'react-ga';
import CountryFlag from 'react-country-flag';

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

  return (
    <div className="bg-blue-800 p-3">
      <div className="flex items-center">
        <FaGlobe className="text-3xl text-white mr-3" />
        <p className="font-semibold text-lg text-white">Visitors from around the world:</p>
      </div>
      <div className="flex flex-wrap mt-3">
        {visitors.map((visitor) => (
          <div className="flex items-center mr-3 mb-3" key={visitor.id}>
            <CountryFlag
              countryCode={visitor.country}
              svg
              className="mr-1"
              style={{ width: '24px', height: '16px' }}
            />
            <p className="text-white">{visitor.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}