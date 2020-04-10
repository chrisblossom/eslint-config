import { a } from './a';

type B = {
	one: string;
};

export interface E {
	one: string;
}

function b() {
	a();
}

const c = d;

export default b;
export { c };
