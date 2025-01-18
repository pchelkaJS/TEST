const getDataFunction = async url => {
	const getData = async url => {
		const res = await fetch(url)
		const json = await res.json()
		return json
	}

	try {
		const data = await getData(url)
		return data
	} catch (error) {
		console.log(`Произошла ошибка в getData, ${error.message}`)
	}
}
(async () => {
	let arr = await getDataFunction('https://jsonplaceholder.typicode.com/posts/')
	arr.forEach(element => {
		if (element.title.length < 22){
			document.querySelector('ul').insertAdjacentHTML(
				'beforeend',
				`<li class="user">${element.title}</li>
				`
			)
		}
	});
})()