const db = require('../model')



// retrieve moments and all associated values, send them in body
exports.getAllMoments = async ctx => {
  try {
    const moments = await db.Moment.findAll(
      { include: [db.Emotion, db.Activity] }
    );
    ctx.body = moments

  } catch (err) {
    console.log(err)
    ctx.status = 500;
  }
};




// seperate the req elements, user inputs go in new moment, selected inputs
// are added to the association tables
exports.postMoment = async ctx => {
  const {title, description, emotions, activities} = ctx.request.body;
  
  try {
    // create a new moment with title and description
    const newMoment = await db.Moment.create({
      title: title, 
      description: description
    });

    // add associated emotions to the Moment_Emotion Table
    for (emotion of emotions) {
      await newMoment.addEmotion(emotion)
    }

    // add associated activities to the Moment_Activity Table
    console.log(activities)
    for (activity of activities) {
      await newMoment.addActivity(activity)
    }

    // send back the complete moment
    ctx.body = await db.Moment.findOne(
      { where: {title: newMoment.title},
        include: [db.Emotion, db.Activity] 
      }
    );

  }
  catch (err) {
    console.log(err)
    ctx.status = 500;
  }

};




