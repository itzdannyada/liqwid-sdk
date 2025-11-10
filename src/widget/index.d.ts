import React from 'react';

export interface LiqwidSDKProps {
  /**
   * Array of Cardano addresses to fetch yield data for
   */
  addresses?: string[];
  
  /**
   * Display currency for yield amounts
   * @default 'GBP'
   */
  currency?: 'GBP' | 'USD' | 'EUR' | 'ADA';
  
  /**
   * Custom API endpoint
   * @default 'https://v2.api.liqwid.finance/graphql'
   */
  apiUrl?: string;
  
  /**
   * Show/hide widget header with title and currency selector
   * @default true
   */
  showHeader?: boolean;
}

/**
 * Liqwid SDK Component
 * 
 * A React component that displays yield earnings data from Liqwid Finance.
 * Can be used with pre-filled addresses or as an input form for users.
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <LiqwidSDK />
 * 
 * // With pre-filled address
 * <LiqwidSDK 
 *   addresses={['addr1q86q7ntzwr...']}
 *   currency="USD"
 * />
 * ```
 */
export declare const LiqwidSDK: React.FC<LiqwidSDKProps>;

export default LiqwidSDK;

// Global window object for script tag usage
declare global {
  interface Window {
    LiqwidSDK?: {
      render: (elementId: string, props?: LiqwidSDKProps) => any;
      create: (config: {
        elementId: string;
        addresses?: string[];
        currency?: 'GBP' | 'USD' | 'EUR' | 'ADA';
        showHeader?: boolean;
        apiUrl?: string;
      }) => any;
    };
  }
}