import _ from 'lodash';

// Пересечение массивов
_.intersection([2, 1], [2, 3]); // => [2]

// capitalize делает первую букву заглавной
_.capitalize('hello'); // Hello

const a = (arr) => {
  const b = _.last(arr);
  return b;
};

console.log(a(['one', 'two']));
console.log('Hello, Hexlet!');
