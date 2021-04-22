# Name That Color

A Node.js Module based on [Name That Color](https://chir.ag/projects/ntc/).

### Installation:

```sh
# With NPM
npm i @cosmicice/namethatcolor

# With Yarn
yarn add @cosmicice/namethatcolor
```

### Usage:

```js
const { ntc } = require('@cosmicice/namethatcolor');
// or ES6 Import
import { ntc } from '@cosmicice/namethatcolor';

const color = ntc.name('#eeeeee');
const rgb = color[0]; // Closest RGB Value
const name = color[1]; // Color Name
const exactMatch = color[2]; // True if exact color match

console.log(color);
```

Feel free to contribute (:

&copy; cosmicice 2021. This project is licensed under the [AGPL-3.0 License](LICENSE).