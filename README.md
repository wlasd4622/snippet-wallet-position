# Snippet: Wallet Position

This snippet demonstrates how to customize the positioning and appearance of a wallet interface using Particle Network's Auth Core Modal.

## Style Settings

To center the wallet iframe content, add the following CSS:

```css
.particle-pwe-iframe-content {
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
}
```

## Code Example

Here's how to use the openWallet function from the Auth Core Modal:


```jsx
import { useAuthCore } from "@particle-network/auth-core-modal";

const { openWallet } = useAuthCore();

openWallet({
  windowSize: "small",
  topMenuType: "close",
});
```