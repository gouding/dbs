// let mongoose = require('./db'),
//   Schema = mongoose.Schema;


// let UserSchema = new Schema({
//   username: { type: String },
//   userpwd: { type: String },
//   userage: { type: Number },
//   logindate: { type: Date }
// })

// module.exports = mongoose.model('User', UserSchema);

var mongoose = require('./db.js'),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: { type: String },                    //用户账号
  age: { type: Number },                        //年龄
  content: { type: String }
});

module.exports = mongoose.model('User', UserSchema);