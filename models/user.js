const {Schema, model} = require ('mongoose');

const userSchema = new ({
	email: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	cart: {
		items:
			[{
				count: {
					type: Number,
					required: true,
					default: 1
				},
				courseId: {
					type: Schema.Types.ObjectID,
					ref: 'Course',
					required: true,
					
				}
			}]
	}
});

module.exports = model ('User', userSchema);