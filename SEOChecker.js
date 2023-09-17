import React, { useState } from 'react';
import axios from 'axios';

const SEOChecker = () => {
  const [url, setUrl] = useState('');
  const [seoResult, setSeoResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCheckSEO = async () => {
    try {
      setSeoResult(null); // Clear previous results
      setLoading(true); // Set loading to true while waiting for the response
      // Send a request to the DataForSEO On-Page API
      console.log('URL to be sent to API:', url);
      const response = await axios.post('https://api.dataforseo.com/v3/keywords_data/google_ads/keywords_for_keywords/live', {
        url,
        browser_render: true,
      });
      console.log('API Response:', response);
      // Handle the API response and set the result in state
      if (response.data && response.data.success) {
        setSeoResult(response.data.data);
      } else {
        console.error('DataForSEO API Error:', response.data.error_message);
      }
    } catch (error) {
      setLoading(false); // Make sure to set loading to false in case of an error
      console.error('An error occurred:', error);
    } finally {
      setLoading(false); // Set loading to false after the request is completed (success or error)
    }
  };

  return (
    <div>
      <h1>SEO Checker</h1>
      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={handleCheckSEO}>Check SEO</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {seoResult && (
            <div>
              <h2>SEO Analysis Result</h2>
              <pre>{JSON.stringify(seoResult, null, 2)}</pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SEOChecker;
