import axios from 'axios'

export const getStarWarsData = (url, data, resolve, reject) => {
  axios.get(url)
    .then(response => {
      const retrivedData = data.concat(response.data.results)
      if (response.data.next !== null) {
        getStarWarsData(response.data.next, retrivedData, resolve, reject)
      } else {
        resolve(retrivedData)
      }
    })
    .catch(error => {
      console.log(error)
      reject('Something wrong. Please refresh the page and try again.')
    })
}