const db = require('../model/index')





const populateThemes = async () => {
  const themes = [
    {name: 'Adventure'},
    {name: 'Art'},
    {name: 'Family'},
    {name: 'Food'},
    {name: 'Friends'},
    {name: 'Home'},
    {name: 'Learning'},
    {name: 'Nature'},
    {name: 'Social'},
    {name: 'Spiritual'},
    {name: 'Sports'},
    {name: 'Travel'},
    {name: 'Work'},
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