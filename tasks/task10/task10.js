/**
 Необходимо написать функцию, которая на вход принимает API call (вызов fetch),
 и вызывает его.
 Если во время запроса произошла ошибка, то пробовать запросить ещё 5 раз.
 Если в итоге выполнить API call не удалось, бросить ошибку.
 **/

function get(callback, called = 1) {
	return callback().catch(() => {
		debugger;
		if (called !== 5) {
			return get(callback, called + 1);
		}

		return new Error(`i was created on ${called} tick`);
	});
}

module.exports["solution"] = get;
