const starWarsUrl = "https://starwars.egghead.training/"

const output = document.getElementById('output')
const spinner = document.getElementById('spinner')

const queryAPI = query => fetch(starWarsUrl + query)
   .then(res => {
      return res.ok ? res.json() :
         Promise.reject(Error('Unsuccessful response'))
   })


queryAPI('films').then(films =>
      queryAPI('planets').then(planets =>
         output.innerHTML = `${films.length} films and ${planets.length} planets`
      )
   )
   .finally(_ => spinner.remove())