
/ Core
import { random, lorem } from 'faker';

export const log = (message, color) => {
    console.log(`%c ${message}`, `background: #222; color: ${color}`);
};

export const delay = (duration = 1000) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};

export class Post {
    constructor(comment = `🐓 ${lorem.sentence(3)}`) {
        this.id = random.uuid();
        this.comment = comment;
    }
}

export const sum = (array) => array.reduce((a, b) => a + b);

export const memoize = (fn) => {
    let previousArgument = null;
    let previousResult = null;

    return (argument) => {
        if (argument === previousArgument) {
            return previousResult;
        }
        const result = fn.call(this, argument);
        previousArgument = argument;
        previousResult = result;

        return result;
    };
};

export const memoizeBad = (fn) => {
    const cache = {};

    return (argument) => {
        const hash = JSON.stringify(argument);
        if (hash in cache) {
            return cache[ hash ];
        }

        cache[ hash ] = fn.call(this, argument);

        return cache[ hash ];
    };
};

export const getDisplayName = (WrappedComponent) => {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

export const sum = (operand1, operand2) => {
    if (typeof operand1 !== 'number') {
        throw new Error('Operand 1 should be a number.');
    } else if (typeof operand2 !== 'number') {
        throw new Error('Operand 2 should be a number.');
    }

    return operand1 + operand2;
};

export const getUniqueID = (length = 15) => {
    if (typeof length !== 'number') {
        throw new Error('The function argument should be a number!');
    }

    let text = '';
    const possible
        = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
};

export const getFullApiUrl = (api, GROUP_ID) => {
    if (typeof api !== 'string' || typeof GROUP_ID !== 'string') {
        throw new Error(
            '\'api\' and \'GROUP_ID\' arguments passed should be a string!',
        );
    }

    return `${api}/${GROUP_ID}`;
};

// Add a stalin sort algorithm in any language you like ❣️ if you like give us a ⭐️
export function stalinSort(array) {
//   export function stalinSort<T>(arr: T[]): T[] {
    if (!Array.isArray(array)) throw new TypeError('Argument must be an Array!');
  
    return array.reduce((prev, next) =>
      !prev.length ||
        next >= prev[prev.length - 1] ?
          [...prev, next] :
          prev
    , []);
  }
  