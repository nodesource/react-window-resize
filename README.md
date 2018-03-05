# react-window-resize

Resize the browser window, as a React component.

## Installation

```bash
$ npm install react-window-resize
```

## Usage

```jsx
import React from 'react'
import WindowResize from 'react-window-resize'

const Example = () => (
  <WindowResize width=800 height=600>
    When I'm mounted, the window size will be set to 800x600px.
  </WindowResize>
)
```

## API

### `<WindowResize [width] [height]>`

`width` and `height` default to the current window dimenions, so you can omit one if you only want to set the other.

## License

MIT

Copyright 2018 NodeSource

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.