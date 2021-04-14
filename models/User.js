const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	date: {
		type: String,
		default: Date.now
	},
	isApproved: {
		type: Boolean,
		default: false
	},
	isAdmin: {
		type: Boolean,
		default: false
	},
	approvedBy: {
		type: String,
		default: ''
	}
});

const User = mongoose.model('User', UserSchema);

module.exports = User;