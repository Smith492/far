const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
	key:{
		type: String,
		default: 'chat'
	},
	isEnabled: {
		type: Boolean,
		default: true
	}
});

const Chat = mongoose.model('Chat', ChatSchema);

module.exports = Chat;