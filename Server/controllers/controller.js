const db = require('../model')



// retrieve moments and all associated values, send them in body
exports.getAllMoments = async ctx => {
  try {
    const moments = await db.Moment.findAll(
      { include: [db.Emotion, db.Theme, db.Photo] }
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
  const {title, description, Emotions, Themes, photos} = ctx.request.body;
  console.log(typeof Emotions)
  console.log(Emotions)
  console.log(ctx.request.body.Emotions)
  
  try {
    // create a new moment with title and description
    const newMoment = await db.Moment.create({
      title: title, 
      description: description,
    });

    console.log('new moment id: ', newMoment.id)
    // add associated emotions to the Moment_Emotion Table
    for (let emotion of Emotions) {
      await newMoment.addEmotion(emotion)
    }

    // add associated themes to the Theme Table
    for (let theme of Themes) {
      await newMoment.addTheme(theme)
    }

     // add associated photos to the Photo Table
    //  for (let photo of photos) {
    //    await db.Photo.create(
    //      {
    //       name: photo.source,
    //       MomentId: newMoment.id
    //     })
      // await newMoment.addPhoto(photo)
    // }

    // send back the complete moment
    ctx.body = await db.Moment.findOne(
      { where: {title: newMoment.title},
        include: [db.Emotion, db.Theme, db.Photo] 
      }
    );

  }


  catch (err) {
    console.log(err)
    ctx.status = 500;
  }

};




