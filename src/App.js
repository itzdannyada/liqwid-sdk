import './App.css';
// import LiqwidSDK from './widget/LiqwidSDK'; //local import for development
import { LiqwidSDK } from 'liqwid-sdk';
import { SiGithub , SiNpm } from 'react-icons/si';

function App() { 

  return (
    <div className="App app-container" style={{ 
      padding: '0', 
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
      minHeight: '100vh',
      color: 'white'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        <header className="header-section" style={{ textAlign: 'center', marginBottom: '40px', padding: '40px 20px' }}>
          <h1 className="header-title" style={{ 
            margin: '0 0 20px 0', 
            fontSize: '3rem', 
            fontWeight: '700', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #33CDBA, #2eb8a6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            <img src="logo192.png" alt="Liqwid Logo" style={{ height: '50px', verticalAlign: 'middle', marginRight: '15px' }} />
            Liqwid SDK
          </h1>
          <p className="header-subtitle" style={{ 
            fontSize: '1.3rem', 
            color: 'rgba(255, 255, 255, 0.8)', 
            marginBottom: '30px',
            maxWidth: '600px',
            margin: '0 auto 30px auto',
            lineHeight: '1.6'
          }}>
            SDK for Liqwid Finance integration - track yield and manage your positions.
          </p>
          
          <div className="action-buttons" style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
          <a 
            href="https://github.com/itzdannyada/liqwid-sdk/tree/master/src/widget" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px', 
            padding: '14px 28px', 
            background: 'rgba(36, 41, 46, 0.8)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            color: 'white', 
            textDecoration: 'none', 
            borderRadius: '10px',
            fontWeight: '600',
            fontSize: '0.95rem',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
            }}
          >
            <SiGithub size={20} />
            GitHub
          </a>
          <a 
            href="https://www.npmjs.com/package/liqwid-sdk" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px', 
            padding: '14px 28px', 
            background: 'rgba(203, 56, 55, 0.8)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            color: 'white', 
            textDecoration: 'none', 
            borderRadius: '10px',
            fontWeight: '600',
            fontSize: '0.95rem',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
            }}
          >
            <SiNpm size={20} />
            npm
          </a>
          </div>  
        </header>

        {/* Main Content Grid - Widget + Information */}
        <div className="main-content-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr minmax(400px, 400px)',
          gap: '40px',
          alignItems: 'start',
          marginBottom: '40px'
        }}>
          
          {/* Key Features - Single Column */}
          <div className="key-features-column" style={{ display: 'flex', flexDirection: 'column' }}>
            
            {/* Key Features */}
            <div className="section-padding key-features-scrollable" style={{ 
              background: 'rgba(255, 255, 255, 0.05)', 
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px', 
              padding: '30px',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
              height: 'fit-content',
              maxHeight: '600px',
              overflowY: 'auto'
            }}>
              <h2 style={{ 
                textAlign: 'left', 
                marginBottom: '25px', 
                color: '#33CDBA',
                fontSize: '1.8rem',
                fontWeight: '700'
              }}>🚀 Key Features</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
                <div style={{ 
                  padding: '20px', 
                  border: '1px solid rgba(51, 205, 186, 0.2)', 
                  borderRadius: '12px', 
                  background: 'rgba(51, 205, 186, 0.08)',
                  transition: 'all 0.3s ease'
                }}>
                  <h3 style={{ 
                    margin: '0 0 12px 0', 
                    color: 'white', 
                    display: 'flex', 
                    alignItems: 'center',
                    fontSize: '1.1rem'
                  }}>
                📊 <span style={{ marginLeft: '8px' }}>Yield Tracking</span>
                  </h3>
                  <p style={{ 
                    margin: 0, 
                    color: 'rgba(255, 255, 255, 0.8)', 
                    fontSize: '0.9rem', 
                    textAlign: 'left',
                    lineHeight: '1.5'
                  }}>
                Real-time yield earnings from Liqwid Finance with breakdown by market and currency conversion
                  </p>
                </div>
                
                <div style={{ 
                  padding: '20px', 
                  border: '1px solid rgba(51, 205, 186, 0.2)', 
                  borderRadius: '12px', 
                  background: 'rgba(51, 205, 186, 0.08)',
                  transition: 'all 0.3s ease'
                }}>
                  <h3 style={{ 
                    margin: '0 0 12px 0', 
                    color: 'white', 
                    display: 'flex', 
                    alignItems: 'center',
                    fontSize: '1.1rem'
                  }}>
                💼 <span style={{ marginLeft: '8px' }}>Position Management</span>
                  </h3>
                  <p style={{ 
                    margin: 0, 
                    color: 'rgba(255, 255, 255, 0.8)', 
                    fontSize: '0.9rem', 
                    textAlign: 'left',
                    lineHeight: '1.5'
                  }}>
                View and manage all Liqwid positions with supply/withdraw functionality
                  </p>
                </div>
                
                <div style={{ 
                  padding: '20px', 
                  border: '1px solid rgba(51, 205, 186, 0.2)', 
                  borderRadius: '12px', 
                  background: 'rgba(51, 205, 186, 0.08)',
                  transition: 'all 0.3s ease'
                }}>
                  <h3 style={{ 
                    margin: '0 0 12px 0', 
                    color: 'white', 
                    display: 'flex', 
                    alignItems: 'center',
                    fontSize: '1.1rem'
                  }}>
                🔗 <span style={{ marginLeft: '8px' }}>Wallet Integration</span>
                  </h3>
                  <p style={{ 
                    margin: 0, 
                    color: 'rgba(255, 255, 255, 0.8)', 
                    fontSize: '0.9rem', 
                    textAlign: 'left',
                    lineHeight: '1.5'
                  }}>
                Seamless Cardano wallet connection with transaction signing and submission
                  </p>
                </div>
                
                <div style={{ 
                  padding: '20px', 
                  border: '1px solid rgba(51, 205, 186, 0.2)', 
                  borderRadius: '12px', 
                  background: 'rgba(51, 205, 186, 0.08)',
                  transition: 'all 0.3s ease'
                }}>
                  <h3 style={{ 
                    margin: '0 0 12px 0', 
                    color: 'white', 
                    display: 'flex', 
                    alignItems: 'center',
                    fontSize: '1.1rem'
                  }}>
                🌍 <span style={{ marginLeft: '8px' }}>Multi-Currency</span>
                  </h3>
                  <p style={{ 
                    margin: 0, 
                    color: 'rgba(255, 255, 255, 0.8)', 
                    fontSize: '0.9rem', 
                    textAlign: 'left',
                    lineHeight: '1.5'
                  }}>
                Support for USD, GBP, and EUR with real-time conversion rates
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Widget Showcase */}
          <div className="widget-showcase" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'sticky',
            top: '20px'
          }}>
              <LiqwidSDK
                currency="USD"
              />
          </div>
        </div>

        {/* Quick Start Section - Moved Below */}
        <div className="section-padding" style={{ 
          background: 'rgba(255, 255, 255, 0.05)', 
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '16px', 
          padding: '30px',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
          marginBottom: '40px'
        }}>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '25px', 
            color: '#33CDBA',
            fontSize: '1.8rem',
            fontWeight: '700'
          }}>⚡ Quick Start</h2>
          
          <div style={{ 
            background: 'rgba(0, 0, 0, 0.3)', 
            borderRadius: '12px', 
            padding: '20px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            marginBottom: '20px'
          }}>
            <pre style={{ 
              background: 'transparent',
              color: '#68d391', 
              margin: 0,
              overflow: 'auto', 
              fontSize: '0.9rem',
              lineHeight: '1.4',
              textAlign: 'left'
            }}>
{`npm install liqwid-sdk

import { LiqwidSDK } from 'liqwid-sdk';

// Treasury/DAO display
<LiqwidSDK addresses={['addr1...']} currency="USD" />

// User wallet connection  
<LiqwidSDK currency="USD" />`}
            </pre>
          </div>
          
          <p style={{ 
            margin: 0, 
            color: 'rgba(255, 255, 255, 0.7)', 
            fontSize: '0.9rem',
            textAlign: 'center' 
          }}>
            Ready to use in React, Next.js, or vanilla JavaScript projects
          </p>
        </div>

        {/* Integration Examples */}
        <div className="section-padding" style={{ 
          padding: '30px', 
          background: 'rgba(255, 255, 255, 0.05)', 
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '16px',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
          marginBottom: '40px'
        }}>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '40px', 
            color: '#33CDBA',
            fontSize: '1.8rem',
            fontWeight: '700'
          }}>📚 Integration Guide</h2>
          
          <h3 style={{textAlign: 'left', color: 'white', fontSize: '1.3rem', marginBottom: '20px'}}>1. React/Next.js Integration</h3>
          <pre style={{ 
            background: 'rgba(0, 0, 0, 0.5)', 
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#68d391', 
            padding: '20px', 
            borderRadius: '12px', 
            overflow: 'auto', 
            textAlign: 'left',
            fontSize: '0.9rem',
            marginBottom: '30px',
            backdropFilter: 'blur(5px)'
          }}>
{`npm install liqwid-sdk

import { LiqwidSDK } from 'liqwid-sdk';

// Treasury/DAO wallet display
<LiqwidSDK
  addresses={['addr1q86q7ntzwr...']}
  currency="USD"
/>

// User wallet connection
<LiqwidSDK 
  currency="USD" 
/>`}
          </pre>

          <h3 style={{textAlign: 'left', color: 'white', fontSize: '1.3rem', marginBottom: '20px'}}>2. HTML + Script Tag Integration</h3>
          <pre style={{ 
            background: 'rgba(0, 0, 0, 0.5)', 
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#68d391',  
            padding: '20px', 
            borderRadius: '12px', 
            overflow: 'auto', 
            textAlign: 'left',
            fontSize: '0.9rem',
            marginBottom: '30px',
            backdropFilter: 'blur(5px)'
          }}>
{`<!-- Include React and the SDK -->
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/liqwid-sdk/dist/liqwid-sdk.umd.js"></script>

<!-- Create containers -->
<div id="liqwid-sdk">

  <script>
    // Treasury/DAO wallet display
    LiqwidSDK.create({
      elementId: 'liqwid-sdk',
      addresses: ['addr1q86q7ntzwr...'],
      currency: 'USD'
    });
    
    // User wallet connection
    LiqwidSDK.create({
      elementId: 'liqwid-sdk',
      currency: 'USD'
    });
  </script>

</div>`}
          </pre>

          <h3 style={{ color: 'white', textAlign: 'left', fontSize: '1.3rem', marginBottom: '20px' }}>3. Configuration Options</h3>
          <div className="grid-responsive" style={{ 
            display: 'grid', 
            gap: '15px', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            marginTop: '15px',
            marginBottom: '30px'
          }}>
            <div style={{ 
              background: 'rgba(51, 205, 186, 0.1)', 
              padding: '20px', 
              borderRadius: '12px',
              border: '1px solid rgba(51, 205, 186, 0.3)',
              textAlign: 'left'
            }}>
              <h4 style={{ margin: '0 0 8px 0', color: 'white' }}>Addresses</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                Array of Cardano addresses to display. Empty array enables wallet connection mode.
              </p>
            </div>
            <div style={{ 
              background: 'rgba(51, 205, 186, 0.1)', 
              padding: '20px', 
              borderRadius: '12px',
              border: '1px solid rgba(51, 205, 186, 0.3)',
              textAlign: 'left'
            }}>
              <h4 style={{ margin: '0 0 8px 0', color: 'white' }}>Currency</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                Default display currency: 'USD', 'GBP', or 'EUR'
              </p>
            </div>
          </div>

          <h3 style={{ color: 'white', textAlign: 'left', fontSize: '1.3rem', marginBottom: '20px' }}>4. Use Cases & Examples</h3>
          <div className="grid-responsive" style={{ 
            display: 'grid', 
            gap: '20px', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            marginTop: '15px'
          }}>
            <div style={{ 
              background: 'rgba(255, 59, 48, 0.1)', 
              padding: '20px', 
              borderRadius: '12px',
              border: '1px solid rgba(255, 59, 48, 0.3)',
              textAlign: 'left'
            }}>
              <h4 style={{ margin: '0 0 15px 0', color: '#ff6b6b', fontSize: '1.1rem' }}>📊 DAO Treasury Dashboard</h4>
              <p style={{ margin: '0 0 15px 0', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                Display your DAO's Liqwid positions and yield earnings publicly
              </p>
              <code style={{ 
                fontSize: '0.8rem', 
                background: 'rgba(255, 59, 48, 0.2)', 
                padding: '8px 12px', 
                borderRadius: '8px', 
                display: 'block',
                color: '#ff9999'
              }}>
                addresses={`{['dao_addr1', 'dao_addr2']}`}
              </code>
            </div>
            
            <div style={{ 
              background: 'rgba(51, 205, 186, 0.1)', 
              padding: '20px', 
              borderRadius: '12px',
              border: '1px solid rgba(51, 205, 186, 0.3)',
              textAlign: 'left'
            }}>
              <h4 style={{ margin: '0 0 15px 0', color: '#33CDBA', fontSize: '1.1rem' }}>🔗 User Portfolio Tracker</h4>
              <p style={{ margin: '0 0 15px 0', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                Let users connect wallets to view and manage their Liqwid positions
              </p>
              <code style={{ 
                fontSize: '0.8rem', 
                background: 'rgba(51, 205, 186, 0.2)', 
                padding: '8px 12px', 
                borderRadius: '8px', 
                display: 'block',
                color: '#66e6d3'
              }}>
                {`// Empty for wallet connection`}
              </code>
            </div>
          </div>
          
          {/* Installation command */}
          <div style={{ 
            marginTop: '40px', 
            padding: '25px', 
            background: 'rgba(51, 205, 186, 0.1)', 
            borderRadius: '12px',
            border: '1px solid rgba(51, 205, 186, 0.3)',
            textAlign: 'center'
          }}>
            <h4 style={{ margin: '0 0 15px 0', color: 'white', fontSize: '1.2rem' }}>🚀 Get Started</h4>
            <code style={{ 
              background: 'rgba(0, 0, 0, 0.4)', 
              color: '#68d391', 
              padding: '12px 20px', 
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              npm install liqwid-sdk
            </code> 
          </div>
        </div> 
      </div>
      
      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .main-content-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          
          .widget-showcase {
            position: static !important;
          }
          
          .widget-container {
            width: 100% !important;
            max-width: 400px !important;
            margin: 0 auto !important;
          }
          
          .key-features-column {
            order: 1;
          }
          
          .widget-showcase {
            order: 2;
          }
        }
        
        @media (max-width: 480px) {
          .app-container {
            padding: 10px !important;
          }
          
          .header-section {
            padding: 20px 10px !important;
          }
          
          .header-title {
            font-size: 2rem !important;
          }
          
          .header-subtitle {
            font-size: 1.1rem !important;
          }
          
          .action-buttons {
            flex-direction: column !important;
            gap: 15px !important;
          }
          
          .section-padding {
            padding: 20px !important;
          }
          
          .grid-responsive {
            grid-template-columns: 1fr !important;
          }
        }
        
        /* Custom scrollbar for key features matching widget style */
        .key-features-scrollable::-webkit-scrollbar {
          width: 4px;
        }

        .key-features-scrollable::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }

        .key-features-scrollable::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 2px;
        }

        .key-features-scrollable::-webkit-scrollbar-thumb:hover {
          background: #33CDBA;
        }

        /* Key features column styling */
        .key-features-column {
          display: flex;
          flex-direction: column;
        }

        /* Info scrollable area matches widget height on desktop */
        .info-scrollable {
          max-height: 600px;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        @media (max-width: 768px) {
          .main-content-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          
          .widget-showcase {
            position: static !important;
            order: 1 !important;
          }
          
          .widget-container {
            width: 100% !important;
            max-width: 400px !important;
            margin: 0 auto !important;
          }
          
          .key-features-column {
            order: 2 !important;
          }

          .key-features-scrollable {
            max-height: none !important;
            overflow: visible !important;
          }

          .info-scrollable {
            max-height: none !important;
            overflow: visible !important;
          }
        }
      `}</style> 
    </div>
  );
}

export default App;
