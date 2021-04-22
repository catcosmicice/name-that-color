# Name That Color

A Node.js Module based on [Name That Color](https://chir.ag/projects/ntc/).

### Installation:

```sh
# With NPM
npm install @cosmicice/namethatcolor

# With Yarn
yarn add @cosmicice/namethatcolor
```

### Usage:

```js
const { ntc } = require('@cosmicice/namethatcolor');
// or ES6 Import
import { ntc } from '@cosmicice/namethatcolor';

const color = ntc.name('#eeeeee');

console.log(color.color); // Closest RGB Value
console.log(color.name); // Color Name
console.log(color.isExact); // True if exact color match
```

Feel free to contribute (:

&copy; cosmicice 2021. This project is licensed under the [AGPL-3.0 License](LICENSE).
