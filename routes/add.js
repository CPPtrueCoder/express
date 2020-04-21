const {Router} = require('express'),
	Course=require('../models/course'),
	router=Router();
router.get('/',(req,res)=>{
	res.render('add',{
		title:"Add Your Course",
		isAdd: true
	})
});

router.post('/',async (req,res)=>{
	
	const course=new Course(req.body.title,req.body.price,req.body.img);
	await course.save();
	res.redirect('/courses');
});


module.exports=router;