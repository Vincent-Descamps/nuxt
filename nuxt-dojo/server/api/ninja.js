export default defineEventHandler(async(event) => {

	//handle query params
	//const { name } = getQuery(event)

	//handle post data
	//const { age } = await readBody(event)

	//api call with private key
	const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_xXfZtmkk7tMlD20DKmwgL7Uo3W3MU1ODOwDgsZtV')

	return data

})
