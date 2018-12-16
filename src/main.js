const starWarsUrl = "https://starwars.egghead.training/"

const output = document.getElementById('output')
const spinner = document.getElementById('spinner')

const queryAPI = async (query) => {
   const response = await fetch(starWarsUrl + query)
   if (response.ok) {
      return response.json()
   } else {
      throw Error('Unsuccessful response')
   }
}

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const main = async () => {
   try {
      const [films, planets, species] = await Promise.all([
         queryAPI('films'),
         queryAPI('planets'),
         queryAPI('species'),
         // sleep(2000)
      ])
      output.innerHTML =
         `${films.length} films, ` +
         `${planets.length} planets, ` +
         `${species.length} species`
   } catch (error) {
      console.log(error)
      output.innerHTML = ":("
   } finally {
      spinner.remove()
   }
}

main()