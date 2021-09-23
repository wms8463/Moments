const db = require('../model/index')





const populateActivities = async () => {
  const activities = [
    {name: 'Sports'},
    {name: 'Home'},
    {name: 'Art'},
    {name: 'Nature'},
    {name: 'Social'},
    {name: 'Learning'},
    {name: 'Work'},
    {name: 'Travel'}
  ]

  // add the activities to the Activities database by creating new entries
  try {
    for (let activity of activities) {
      await db.Activity.create(activity)
    }
  }
  catch (err) {
    console.log(err)
  }

}

populateActivities();