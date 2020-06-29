/**
 Необходимо написать функцию создающую пространство имен.
 На вход подается строка вида: "a.b.c.d.e",
 на выходе ожидаем получить вложенные друг в друга объекты.

 namespace('a.b.c.d.e') -> "{"a":{"b":{"c":{"d":{"e":{}}}}}}"

 **/

function namespace(str) {
	const result = {};

	str.split(".").reduce((acc, key) => {
		acc[key] = {};
		return acc[key];
	}, result);

	return result;
}

/*------------------*/
/*    Test cases    */
/*------------------*/

const testcases = [
	{
		args: ["a.b.c.d.e"],
		result: { a: { b: { c: { d: { e: {} } } } } },
	},
	{
		args: ["ab.cd.e"],
		result: { ab: { cd: { e: {} } } },
	},
];

module.exports["testcases"] = testcases;
module.exports["solution"] = namespace;
