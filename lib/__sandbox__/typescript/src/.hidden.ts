import { a } from './a';

namespace foo {}

function hidden(): void {
    a();
}

export { hidden };
