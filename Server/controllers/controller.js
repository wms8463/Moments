const db = require('../model')
const formatDate = require('moment')



// retrieve moments and all associated values, send them in body
exports.getAllMoments = async ctx => {
  try {
    const moments = await db.Moment.findAll(
      { include: [db.Emotion, db.Theme] }
    );
    // moments.forEach(moment => {
    //   moment.createdAt = formatDate(moment.createdAt).format('MMMM d, YYYY')
    // })

    ctx.body = moments

  } catch (err) {
    console.log(err)
    ctx.status = 500;
  }
};

exports.getEmotionsList = async ctx => {
  try {
    const emotions = await db.Emotion.findAll();
    ctx.body = emotions

  } catch (err) {
    console.log(err)
    ctx.status = 500;
  }
};

exports.getThemesList = async ctx => {
  try {
    const themes = await db.Theme.findAll();
    ctx.body = themes

  } catch (err) {
    console.log(err)
    ctx.status = 500;
  }
};




// seperate the req elements, user inputs go in new moment, selected inputs
// are added to the association tables
exports.postMoment = async ctx => {
  const {title, description, emotions, themes} = ctx.request.body;

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

    // add associated themes to the Theme Table
    for (theme of themes) {
      await newMoment.addTheme(theme)
    }

    // send back the complete moment
    ctx.body = await db.Moment.findOne(
      { where: {title: newMoment.title},
        include: [db.Emotion, db.Theme] 
      }
    );

  }
  catch (err) {
    console.log(err)
    ctx.status = 500;
  }

};




