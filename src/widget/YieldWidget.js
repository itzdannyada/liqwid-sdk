import React, { useState, useEffect, useCallback } from 'react';
import './YieldWidget.css';
import bgImage from './bg.avif';
import logoImage from './logowithtext.png';

const YieldWidget = ({ 
  addresses = [], 
  currency = 'USD', 
  apiUrl = 'https://v2.api.liqwid.finance/graphql',
  showHeader = true
}) => {
  const [yieldData, setYieldData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [inputAddress, setInputAddress] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState(currency);

  const fetchYieldData = useCallback(async (addressList) => {
    if (!addressList || addressList.length === 0) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "x-project": "itzdanny-liqwid-yield-widget"
        },
        body: JSON.stringify({
          operationName: 'GetYieldEarned',
          variables: {
            input: {
              addresses: addressList
            },
            currencyInput: {
              currency: selectedCurrency
            }
          },
          query: `query GetYieldEarned($input: YieldEarnedInput!, $currencyInput: InCurrencyInput) {
            historical {
              yieldEarned(input: $input) {
                totalYieldEarned(input: $currencyInput)
                markets {
                  id
                  amount
                  amountInCurrency(input: $currencyInput)
                  __typename
                }
                __typename
              }
              __typename
            }
          }`
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.errors) {
        throw new Error(data.errors[0].message);
      }

      setYieldData(data.data.historical.yieldEarned);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching yield data:', err);
    } finally {
      setLoading(false);
    }
  }, [apiUrl, selectedCurrency]);

  useEffect(() => {
    if (addresses.length > 0) {
      fetchYieldData(addresses);
    }
  }, [addresses, selectedCurrency, fetchYieldData]);

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    if (inputAddress.trim()) {
      fetchYieldData([inputAddress.trim()]);
    }
  };

  const formatCurrency = (amount, currency) => {
    if (!amount) return '0';
    
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 6
    });
    
    return formatter.format(amount);
  };

  return (
    <div 
      className="liqwid-yield-widget"
      style={{ 
        backgroundImage: `url(${bgImage}), linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,
        backgroundSize: 'cover, cover',
        backgroundPosition: 'center, center',
        backgroundRepeat: 'no-repeat, no-repeat'
      }}
    >
      {showHeader && (
        <div className="widget-header">
          <img src={logoImage} alt="Liqwid Finance" className="powered-by-logo" width={160} height={60}/>
          <div className="header-controls">
            <select 
              value={selectedCurrency} 
              onChange={(e) => setSelectedCurrency(e.target.value)}
              className="currency-select"
            >
              <option value="GBP">GBP (£)</option>
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
            </select>
          </div>
        </div>
      )}

      {addresses.length === 0 && (
        <form onSubmit={handleAddressSubmit} className="address-form">
          <div className="input-group">
            <input
              type="text"
              placeholder="Enter Cardano address..."
              value={inputAddress}
              onChange={(e) => setInputAddress(e.target.value)}
              className="address-input"
            />
            <button type="submit" disabled={loading} className="submit-button">
              {loading ? 'Loading...' : 'Check Yield'}
            </button>
          </div>
        </form>
      )}

      {loading && (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Fetching yield data...</p>
        </div>
      )}

      {error && (
        <div className="error-container">
          <p className="error-message">Error: {error}</p>
        </div>
      )}

      {yieldData && !loading && (
        <div className="yield-results">
          <div className="total-yield">
            <h4>Total Yield Earned</h4>
            <div className="yield-amount">
              {formatCurrency(yieldData.totalYieldEarned, selectedCurrency)}
            </div>
          </div>

          {yieldData.markets && yieldData.markets.length > 0 && (
            <div className="markets-breakdown">
              <h5>Market Breakdown</h5>
              <div className="markets-list">
                {yieldData.markets.map((market, index) => (
                  <div key={market.id || index} className="market-item">
                    <span className="market-id">{market.id}</span>
                    <span className="market-amount">
                      {formatCurrency(market.amountInCurrency, selectedCurrency)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <div className="widget-footer">
        <a 
          href="https://x.com/itzdannyada" 
          target="_blank" 
          rel="noopener noreferrer"
          className="powered-by"
        >
          Built by $itzdanny
        </a>
      </div>
    </div>
  );
};

export default YieldWidget;