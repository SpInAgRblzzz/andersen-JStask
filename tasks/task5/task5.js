/**
 Дан список целых чисел, повторяющихся элементов в списке нет.
 Нужно преобразовать это множество в строку,
 сворачивая соседние по числовому ряду числа в диапазоны.

 compress([1, 4, 5, 2, 3, 9, 8, 11, 0]) // '0-5,8-9,11'
 compress([1, 4, 3, 2]) // '1-4'
 compress([1, 4]) // '1,4'

 **/

function compress(list) {}


/*------------------*/
/*    Test cases    */
/*------------------*/


const testcases = [
  {
    args: [
      [1, 4, 5, 2, 3, 9, 8, 11, 0]
    ],
    result: '0-5,8-9,11'
  },
  {
    args: [
      [1, 4, 3, 2]
    ],
    result: '1-4'
  },
  {
    args: [
      [1, 4]
    ],
    result: '1,4'
  },
];

module.exports['testcases'] = testcases;
module.exports['solution'] = compress;
