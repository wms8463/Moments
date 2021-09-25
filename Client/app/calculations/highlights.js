




// choose a selector --> moment includes tag friends
// filter momenets that include that\

const themeFilter = 'Friends'

const getHighlights = (moments) => {
  let output = []
  moments.forEach(moment => {
    let themes = moment.Themes
    themes.forEach(theme => {
      if (theme.name === themeFilter) {
        output.push(moment)
      }
    })
  })  

  // add layer for selecting at most 5 moments later

  return output
}


module.exports = { getHighlights }