const starWarsUrl = "https://starwars.egghead.training/"

const output = document.getElementById('output')
const spinner = document.getElementById('spinner')

const queryAPI = async(query) => {
   const response = await fetch(starWarsUrl + query)
   if(response.ok){
      return response.json()
   } else {
      throw Error('Unsuccessful response')
   }
}

const main = async() => {
   try {
      const [films, planets] = await Promise.all([
         queryAPI('films'),
         queryAPI('planets'),
      ])
      output.innerHTML = `${films.length} films and ${planets.length} planets`
   } catch (error) {
      console.log(error)
      output.innerHTML = ":("
   } finally {
      spinner.remove()
   }
}

main()
