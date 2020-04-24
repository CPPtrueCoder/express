const express = require ('express'),
	path = require ('path'),
	exphbs = require ('express-handlebars'),
	homeRouter = require ('./routes/home'),
	addRouter = require ('./routes/add'),
	cardRoutes=require('./routes/card'),
	courseRouter = require ('./routes/courses');

const app = express ();

const hbs = exphbs.create ({
	defaultLayout: 'main',
	extname: 'hbs'
});

app.engine ('hbs', hbs.engine);
app.set ('view engine', 'hbs');
app.set ('views', 'views');
app.use (express.static (path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use ('/',homeRouter);
app.use('/add',addRouter);
app.use('/courses', courseRouter);
app.use('/card',cardRoutes);



const PORT = process.env.PORT || 3000;

app.listen (PORT, () => {
	console.log (`Server is running on port ${PORT}`)
});