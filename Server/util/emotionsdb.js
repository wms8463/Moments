const db = require('../model/index')





const populateEmotions = async () => {

  const emotions = [
    { name: 'Joy'},
    { name: 'Excitement'},
    { name: 'Amazement'},
    { name: 'Grateful'},
    { name: 'Content'},
    { name: 'Peaceful'},
    { name: 'Hope'},
    { name: 'Pride'},
    { name: 'Awe'},
    { name: 'Wonder'},
    { name: 'Euphoria'},
    { name: 'Love'},
    { name: 'Optimism'},
    { name: 'Confidence'},
    { name: 'Inspiration'},
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