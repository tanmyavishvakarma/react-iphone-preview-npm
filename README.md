# React iPhone Preview Component

The React iPhone Preview is a simple component that lets you showcase content inside an iPhone X illustration.

## Installation

```bash
npm install react-iphone-preview --force
```

> **Note about `--force` flag**:  
> This package currently requires React 18. If you're using React 19+ in your project, you must install with `--force` to bypass version conflicts. A future update will add React 19 support.

```jsx
import { IphonePreview } from 'react-iphone-preview';
```

## Usage

To use the `IphonePreview` component, simply render it in your JSX:

```jsx
<IphonePreview content={<YourContent />} />
```

## Props

### 1. content (Optional)

The `content` prop allows you to insert any React nodes (components, images, text) inside the iPhone's screen area.

- Type: `PropTypes.node`
- Default: `null`

### 2. overlayStyle (Optional)

The `overlayStyle` prop is an object that lets you pass additional inline styles to the overlay (the content area inside the iPhone's screen). This provides an easy way to customize the appearance of the content being displayed.

- Type: `PropTypes.object`
- Default: `{}`

## Customizing Overlay Styles

To customize the styles of the overlay, you can leverage the `overlayStyle` prop:

```jsx
<IphonePreview 
    content={"This is an Example"} 
    overlayStyle={{
        backgroundColor: 'rgba(255, 0, 0, 0.3)',  // Example: Setting a red background with 30% opacity
        // ... any other valid inline styles
    }} 
/>
```