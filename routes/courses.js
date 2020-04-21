const {Router} = require('express'),
	Course =require('../models/course'),
	router=Router();
router.get('/',async (req,res)=>{
	const courses= await Course.getAllData();
	
	res.render ('courses', {
		title: "Courses",
		isCourses: true,
		courses
	})
});
router.get('/:id',async(req,res)=>{
	const course = await Course.getCourse(req.params.id);
	res.render('course',{
		title:`Course ${course.title}`,
		course
	})
});


module.exports=router;