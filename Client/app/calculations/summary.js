


// COUNT NUMBER OF MOMENTS
const countMoments = (moments) => {
  return moments.length
}



// EMOTION SUMMARY
// return array of objects with {emotion: emotion, count: count} descending
const emotionSummary = (moments) => {
  let output = {}
  moments.forEach(moment => {
    let emotions = moment.Emotions;
    emotions.forEach(emotion => {
      if(output[emotion.name] === undefined) {
        output[emotion.name] = 1
      } else {
        output[emotion.name]++
      }
    })
  })
let array = []
for (let emotion in output) {
  array.push({
    name: emotion,
    count: output[emotion]
  })
}
array.sort((a,b) => {
  return b.count - a.count
})
return array
}



// EMOTION SUMMARY
// return array of objects with {theme: theme, count: count} descending
const themeSummary = (moments) => {
  let output = {}
  moments.forEach(moment => {
    let themes = moment.Themes;
    themes.forEach(theme => {
      if(output[theme.name] === undefined) {
        output[theme.name] = 1
      } else {
        output[theme.name]++
      }
    })
  })
let array = []
for (let theme in output) {
  array.push({
    name: theme,
    count: output[theme]
  })
}
array.sort((a,b) => {
  return b.count - a.count
})
return array
}

module.exports = {countMoments, emotionSummary, themeSummary}