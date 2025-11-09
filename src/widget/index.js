import React from 'react';
import ReactDOM from 'react-dom/client';
import YieldWidget from './YieldWidget';

// Named export for direct import
export { YieldWidget };

// Default export
export default YieldWidget;

// Global function for embedding via script tag
if (typeof window !== 'undefined') {
  window.LiqwidYieldWidget = {
    render: (elementId, props = {}) => {
      const element = document.getElementById(elementId);
      if (element) {
        const root = ReactDOM.createRoot(element);
        root.render(React.createElement(YieldWidget, props));
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
      
      return window.LiqwidYieldWidget.render(elementId, {
        addresses,
        currency,
        showHeader,
        ...otherProps
      });
    }
  };
}