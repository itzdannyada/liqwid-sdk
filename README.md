# 🚀 Liqwid Yield Widget

A plug-and-play React widget for displaying [Liqwid Finance](https://v2.liqwid.finance) yield earnings data. Easily embed yield tracking functionality into any website or React application.

## ✨ Features

- 🎨 **Multiple Themes**: Light and dark themes with Liqwid Finance styling
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile
- 🔌 **Easy Integration**: Use as React component or standalone HTML widget
- 💰 **Multi-Currency**: Support for GBP, USD, EUR, and ADA
- ⚡ **Real-time Data**: Fetches live yield data from Liqwid Finance API
- 🎯 **Configurable**: Extensive customization options
- 📦 **Lightweight**: Minimal dependencies and optimized bundle size

## 🏗️ Installation

### NPM/Yarn (React Projects)

```bash
npm install liqwid-yield-sdk
# or
yarn add liqwid-yield-sdk
```

### CDN (HTML/Vanilla JS)

```html
<!-- React Dependencies -->
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>

<!-- Liqwid Yield Widget -->
<script src="https://unpkg.com/liqwid-yield-sdk/dist/liqwid-yield-widget.umd.js"></script>
```

## 🚀 Quick Start

### React Component

```jsx
import { YieldWidget } from 'liqwid-yield-sdk';

function App() {
  return (
    <YieldWidget
      addresses={['addr1q86q7ntzwrzx7j7rynwmaque5rlyvw6e3e4tmas8dw87qwh3k9scpg9uzp5k2w67ug04vwt8qqj74ehmlp65ry2m4xcszztsps']}
      currency="GBP"
      theme="light"
    />
  );
}
```

### HTML/JavaScript

```html
<div id="yield-widget"></div>

<script>
  LiqwidYieldWidget.create({
    elementId: 'yield-widget',
    addresses: ['addr1q86q7ntzwr...'],
    currency: 'GBP',
    theme: 'light'
  });
</script>
```

## ⚙️ Configuration Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `addresses` | `string[]` | `[]` | Array of Cardano addresses to fetch yield data for |
| `currency` | `'GBP' \| 'USD' \| 'EUR' \| 'ADA'` | `'GBP'` | Display currency for yield amounts |
| `theme` | `'light' \| 'dark'` | `'light'` | Widget color scheme |
| `compact` | `boolean` | `false` | Enable compact layout mode |
| `showHeader` | `boolean` | `true` | Show/hide widget header with title and currency selector |
| `onThemeChange` | `function` | `null` | Callback function called when theme is toggled (receives new theme as parameter) |
| `apiUrl` | `string` | `'https://v2.api.liqwid.finance/graphql'` | Custom API endpoint |

## 🎨 Styling

The widget comes with built-in responsive styling that matches Liqwid Finance's design system. You can customize the appearance by:

1. **Using built-in themes**: `light` or `dark`
2. **CSS custom properties**: Override specific colors and spacing
3. **CSS classes**: Target specific elements with custom styles

### CSS Custom Properties

```css
.liqwid-yield-widget {
  --primary-color: #667eea;
  --background-color: #ffffff;
  --text-color: #2d3748;
  --border-radius: 12px;
}
```

## 📖 Examples

### Basic Widget (User Input)

```jsx
<YieldWidget />
```

### Pre-configured Widget with Theme Toggle

```jsx
const [currentTheme, setCurrentTheme] = useState('light');

<YieldWidget
  addresses={['addr1q86q7ntzwr...']}
  currency="USD"
  theme={currentTheme}
  compact={true}
  onThemeChange={setCurrentTheme}
/>
```

### Multiple Widgets

```jsx
<div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
  <YieldWidget currency="GBP" theme="light" />
  <YieldWidget currency="USD" theme="dark" />
</div>
```

## 🌐 API Integration

The widget integrates with the Liqwid Finance GraphQL API:

**Endpoint**: `https://v2.api.liqwid.finance/graphql`

**Query**: `GetYieldEarned`

```graphql
query GetYieldEarned($input: YieldEarnedInput!, $currencyInput: InCurrencyInput) {
  historical {
    yieldEarned(input: $input) {
      totalYieldEarned(input: $currencyInput)
      markets {
        id
        amount
        amountInCurrency(input: $currencyInput)
      }
    }
  }
}
```

## 🛠️ Development

### Setup

```bash
# Clone repository
git clone <repository-url>
cd liqwid-yield-sdk

# Install dependencies
npm install

# Start development server
npm start
```

### Building

```bash
# Build widget for distribution
npm run build

# Build demo app
npm run build:demo
```

### Scripts

- `npm start` - Start development server with demo
- `npm run build` - Build widget for distribution
- `npm run build:demo` - Build demo application
- `npm test` - Run tests

## 📁 Project Structure

```
src/
├── widget/
│   ├── YieldWidget.js      # Main widget component
│   ├── YieldWidget.css     # Widget styles
│   └── index.js           # Widget exports
├── App.js                 # Demo application
└── index.js              # Demo entry point
```

## 🔧 Integration Patterns

### WordPress

```html
<!-- Add to theme's functions.php or use a code injection plugin -->
<div id="liqwid-yield-widget"></div>

<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/liqwid-yield-sdk/dist/liqwid-yield-widget.umd.js"></script>

<script>
  LiqwidYieldWidget.create({
    elementId: 'liqwid-yield-widget',
    theme: 'light'
  });
</script>
```

### Next.js

```jsx
import dynamic from 'next/dynamic';

const YieldWidget = dynamic(() => import('liqwid-yield-sdk'), {
  ssr: false
});

export default function HomePage() {
  return <YieldWidget currency="GBP" />;
}
```

### Vue.js

```vue
<template>
  <div ref="widgetContainer"></div>
</template>

<script>
export default {
  mounted() {
    // Load widget script dynamically
    import('liqwid-yield-sdk/dist/liqwid-yield-widget.umd.js').then(() => {
      window.LiqwidYieldWidget.create({
        elementId: this.$refs.widgetContainer.id,
        currency: 'EUR'
      });
    });
  }
}
</script>
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

- 📚 [Documentation](https://github.com/your-repo/liqwid-yield-sdk)
- 🐛 [Bug Reports](https://github.com/your-repo/liqwid-yield-sdk/issues)
- 💬 [Community Discord](https://discord.gg/liqwid)
- 🌐 [Liqwid Finance](https://v2.liqwid.finance)

---

Built with ❤️ for the Cardano ecosystem

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
