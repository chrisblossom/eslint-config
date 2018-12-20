/* @flow */

import { a } from './a';

type B = {
    one: string,
    one: boolean,
}

function b() {
    a();
}

export default b;
