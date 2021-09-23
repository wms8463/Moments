const db = require('../model/index')





const populateThemes = async () => {
  const themes = [
    {name: 'Sports'},
    {name: 'Home'},
    {name: 'Art'},
    {name: 'Nature'},
    {name: 'Social'},
    {name: 'Learning'},
    {name: 'Work'},
    {name: 'Travel'}
  ]

  // add the themes to the Themes database by creating new entries
  try {
    for (let theme of themes) {
      await db.Theme.create(theme)
    }
  }
  catch (err) {
    console.log(err)
  }

}

populateThemes();