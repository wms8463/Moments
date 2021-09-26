


const urlNumber = '192.168.1.53'

const fetchMoments = () => {
  return fetch(`http://${urlNumber}:3051/moments`)
  .then(res => res.json())
}

const fetchEmotions = () => {
  return fetch(`http://${urlNumber}:3051/emotions`)
  .then(res => res.json())
}

const fetchThemes = () => {
  return fetch(`http://${urlNumber}:3051/themes`)
  .then(res => res.json())
}

const postForm = async (data) => {
  await fetch(`http://${urlNumber}:3051/moments`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: data.title,
    description: data.description,
    Emotions: [data.emotion],
    Themes: [data.theme]
  })
});
}



module.exports = {fetchEmotions, fetchMoments, fetchThemes, postForm}