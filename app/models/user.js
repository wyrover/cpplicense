// app/models/user.js

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
	//,
    //bcrypt = require('bcryptjs'),
    //SALT_WORK_FACTOR = 10;

var UserSchema   = new Schema({
	google_id    : Number,
	google_token : String,
	name  : String,
	email : String,
	picture : String,
	//email: { type: String, required: true, index: { unique: true } },
	//password: { type: String },
	id: { type: String, required: true, index: { unique: true } },
	//oauthtoken: String,
	//oauthtokenexpires: Date,
	//forgottoken: String,
	//forgottokenexpires: Date,
	datecreated: Date,
	active: Boolean
});

/*
UserSchema.pre('save', function(next) {
    var user = this;
	 
	// only hash the password if it has been modified (or is new)
	if (!user.isModified('password')) return next();
	 
	// generate a salt
	bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
		if (err) return next(err);
	 
		// hash the password using our new salt
		bcrypt.hash(user.password, salt, function(err, hash) {
			if (err) return next(err);
	 
			// override the cleartext password with the hashed one
			user.password = hash;
			next();
		});
	});
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};*/

UserSchema.methods.toJSON = function() {
  var obj = this.toObject()
  delete obj.google_token;
  return obj;
}

module.exports = mongoose.model('User', UserSchema);
