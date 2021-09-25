const db = require('../model/index')


const populateEmotions = async () => {

  const emotions = [
    { name: 'Awe'},
    { name: 'Confidence'},
    { name: 'Contentment'},
    { name: 'Empathy'},
    { name: 'Euphoria'},
    { name: 'Excitement'},
    { name: 'Focus'},
    { name: 'Grateful'},
    { name: 'Happy'},
    { name: 'Hopeful'},
    { name: 'Humor'},
    { name: 'Inspired'},
    { name: 'Joy'},
    { name: 'Love'},
    { name: 'Optimism'},
    { name: 'Proud'},
    { name: 'Wonder'},
  ]

  // add the emotions to the Emotion database by creating new entries
  try {
    for (let emotion of emotions) {
      await db.Emotion.create(emotion)
    }
  }
  catch (err) {
    console.log(err)
  }
}

populateEmotions();