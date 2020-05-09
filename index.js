const express = require ('express'),
	path = require ('path'),
	mongoose = require ('mongoose'),
	exphbs = require ('express-handlebars'),
	homeRouter = require ('./routes/home'),
	addRouter = require ('./routes/add'),
	cardRoutes = require ('./routes/card'),
	courseRouter = require ('./routes/courses'),
	User=require('models/user');

const app = express ();
const password = '2WhID0dZ6zLldkgQ';
const url = `mongodb+srv://andrew:${password}@cluster1-gswon.mongodb.net/test?retryWrites=true&w=majority`;
const hbs = exphbs.create ({
	defaultLayout: 'main',
	extname: 'hbs'
});

app.engine ('hbs', hbs.engine);
app.set ('view engine', 'hbs');
app.set ('views', 'views');
app.use (express.static (path.join (__dirname, 'public')));
app.use (express.urlencoded ({extended: true}));
app.use ('/', homeRouter);
app.use ('/add', addRouter);
app.use ('/courses', courseRouter);
app.use ('/card', cardRoutes);

const PORT = process.env.PORT || 3000;

async function start() {
	try {
		const url = `mongodb+srv://andrew:${password}@cluster1-gswon.mongodb.net/shop`;
		await mongoose.connect (url, {
				useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify:false
			}
		);
		const candidate = await User.findOne();
		if(!candidate) {
			const user = new User ({
				email: 'andierodin@gmail.com',
				name: 'Andrey',
				cart: {items: []}
			});
			await user.save ();
		}
		app.listen (PORT, () => {
			console.log (`Server is running on port ${PORT}`)
		});
	} catch (e) {
		console.log(e);
	}
	
}

start ();
