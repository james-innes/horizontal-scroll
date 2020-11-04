# horizontal-scroll

> Translate vertical scroll to horizontal for the web

## NPM

```bash
npm i @james-innes/horizontal-scroll
```

```jsx
import HorizontalScroll from "@james-innes/horizontal-scroll";

HorizontalScroll.start();
HorizontalScroll.stop();
```

## UNPKG

No need to `start()` here, it does it by default.

```html
<script src="https://unpkg.com/@james-innes/horizontal-scroll/horizontal-scroll.js"></script>

<script>HorizontalScroll.stop()</script>
```

## Example

```html
  <div class="container">
    <div class="page" style="background-color: skyblue"></div>
    <div class="page" style="background-color: thistle"></div>
    <div class="page" style="background-color: aquamarine"></div>
  </div>
```

```css
  /* Full viewport pages */
  .container {
    display: flex;
  }

  .page {
    flex: 0 0 auto;
    height: 100vh;
    width: 100vw;
  }

  /* Hide those scrollbars */
  html {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  html::-webkit-scrollbar {
    display: none;
  }


  body {
    margin: 0;
    padding: 0;
  }
```
