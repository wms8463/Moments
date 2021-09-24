




const fetchMoments = () => {
  return fetch('http://192.168.1.152:3051/moments')
  .then(res => res.json())
}

const fetchEmotions = () => {
  return fetch('http://192.168.1.152:3051/emotions')
  .then(res => res.json())
}

const fetchThemes = () => {
  return fetch('http://192.168.1.152:3051/themes')
  .then(res => res.json())
}

module.exports = {fetchEmotions, fetchMoments, fetchThemes}