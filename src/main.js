const starWarsUrl = "https://starwars.egghead.training/"

const output = document.getElementById('output')
const spinner = document.getElementById('spinner')

const queryAPI = query => fetch(starWarsUrl + query)
   .then(res => {
      return res.ok ? res.json() :
         Promise.reject(Error('Unsuccessful response'))
   })


const promise = Promise.all([
   queryAPI('films'),
   queryAPI('planets'),
])

promise.then(results =>
      output.innerHTML = `${results[0].length} films and ${results[1].length} planets`
   )
   .finally(_ => spinner.remove())