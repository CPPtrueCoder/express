const {Router} = require('express'),
	router=Router();
router.get('/',(req,res)=>{
	res.render('add',{
		title:"Add Your Course",
		isAdd: true
	})
});

router.post('/',(req,res)=>{
	console.log(req.body);
	res.redirect('/courses');
});


module.exports=router;