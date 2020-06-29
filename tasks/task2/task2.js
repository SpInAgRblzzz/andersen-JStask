/**
 У нас есть набор билетов вида:

 [
   { from: 'London', to: 'Moscow' },
   { from: 'NY', to: 'London' },
   { from: 'Moscow', to: 'SPb' },
   ...
 ]

 Из этих билетов можно построить единственный, неразрывный маршрут.
 Петель и повторов в маршруте нет.

 Нужно написать функцию, которая возвращает билеты
 в порядке следования по маршруту.
 **/

function getRoute(tickets = []) {
	const result = [];
	let len = result.lenght;

	let current = tickets.find(
		(findElement) =>
			!tickets.some((someElement) => someElement.to === findElement.from)
	);

	while (tickets.length !== len) {
		result.push(current);
		len = result.length;

		current = tickets.find(
			(findElement) => findElement.from === current.to
		);
	}

	return result;
}

/*------------------*/
/*    Test cases    */
/*------------------*/

const testcases = [
	{
		args: [
			[
				{ from: "London", to: "Moscow" },
				{ from: "New-York", to: "London" },
				{ from: "Moscow", to: "SPb" },
				{ from: "San-Francisco", to: "New-York" },
			],
		],
		result: [
			{ from: "San-Francisco", to: "New-York" },
			{ from: "New-York", to: "London" },
			{ from: "London", to: "Moscow" },
			{ from: "Moscow", to: "SPb" },
		],
	},
];

module.exports["testcases"] = testcases;
module.exports["solution"] = getRoute;
