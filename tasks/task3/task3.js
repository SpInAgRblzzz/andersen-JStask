/**
 * Какой-то из бэкендов присылает нам данные в JSON в snake_case, мы на своем проекте
 * везде используем camelCase. Нужна функция, которая на вход будет принимать данные,
 * полученные через JSON.parse, там не может быть функций, циклических зависимостей и т.д.,
 * все объекты имеют ключи в snake_case. Функция должна вернуть новый анаглогичный объект
 * со всей вложенной структурой, в котором ключи объектов заменены на camelCase.
 **/

function toCamelCase(val) {}


/*------------------*/
/*    Test cases    */
/*------------------*/


const testcases = [
  {
    args: [
      {
        simple_prop: 'a',
        empty_prop: null,
        empty_obj_prop: {},
        object_prop: {
          inside_prop: 3
        },
        array_prop: [
          {
            inside_array_prop: 'b'
          },
          {
            inside_array_prop: {
              deep_inside_prop: 'c'
            }
          }
        ]
      }
    ],
    result:
      {
        simpleProp: 'a',
        emptyProp: null,
        emptyObjProp: {},
        objectProp: {
          insideProp: 3
        },
        arrayProp: [
          {
            insideArrayProp: 'b'
          },
          {
            insideArrayProp: {
              deepInsideProp: 'c'
            }
          }
        ]
      }
  },
  {
    args: [
      {}
    ],
    result: {}
  }
];

module.exports['testcases'] = testcases;
module.exports['solution'] = toCamelCase;
