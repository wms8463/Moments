import {moments} from './dummyMoment'

// These are some ways to manipulate the data - examples and practice

// GET ID FROM ALL MOMENTS
const momentIDs = () => {
  moments.forEach(moment => {
    return moment.id
  })
}

// GET EMOTION NAMES FROM EACH MOMENTS
const momentEmotions = () => {
  moments.forEach(moment => {
    moment.Emotions.forEach(emotion => {
      return emotion.name
    })
    
  })
}

  const emotionSummary = (moments) => {
    let output = {}

    moments.forEach(moment => {
      let emotions = moment.Emotions;
      for (let i = 0; i < emotions.length; i++) {
        if (output[emotion] === undefined) {
          output[emotion] = 1
        }
        else output[emotion]++
      }
    }
    return output
  }
