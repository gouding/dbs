let User = require('./user')

const insert = () => {
  let user = new User({
    username: '娃哈哈',
    userpwd: '123456',
    userage: 20,
    logindate: new Date()
  })
  user.save((err, res) => {
    if (err) {
      console.error(`Error:${err}`)
    } else {
      console.log(`Res:${res}`)
    }
  })
}


// insert()
User.find((err, res) => {
  if (err) {
    console.error(err)
  } else {
    res.map(item => {
      console.log(item.name)
    })
  }

})

