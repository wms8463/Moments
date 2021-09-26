const db = require('../model/index')





const populateThemes = async () => {
  const themes = [
    // 1
    {name: 'Adventure'},
    // 2
    {name: 'Art'},
    // 3
    {name: 'Family'},
    // 4
    {name: 'Food'},
    // 5
    {name: 'Friends'},
    // 6
    {name: 'Home'},
    // 7
    {name: 'Learning'},
    // 8
    {name: 'Nature'},
    // 9
    {name: 'Social'},
    // 10
    {name: 'Spiritual'},
    // 11
    {name: 'Sports'},
    // 12
    {name: 'Travel'},
    // 13
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