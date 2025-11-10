import React from 'react';
import ReactDOM from 'react-dom/client';
import LiqwidSDK from './LiqwidSDK';

// Named export for direct import
export { LiqwidSDK };

// Default export
export default LiqwidSDK;

// Global function for embedding via script tag
if (typeof window !== 'undefined') {
  window.LiqwidSDK = {
    render: (elementId, props = {}) => {
      const element = document.getElementById(elementId);
      if (element) {
        const root = ReactDOM.createRoot(element);
        root.render(React.createElement(LiqwidSDK, props));
        return root;
      } else {
        console.error(`Element with id "${elementId}" not found`);
      }
    },
    
    // Helper function to create widget with minimal config
    create: (config = {}) => {
      const {
        elementId,
        addresses = [],
        currency = 'GBP',
        showHeader = true,
        ...otherProps
      } = config;
      
      if (!elementId) {
        console.error('elementId is required');
        return;
      }
      
      return window.LiqwidSDK.render(elementId, {
        addresses,
        currency,
        showHeader,
        ...otherProps
      });
    }
  };
}