let router=require('express').Router();
let controller= require('./MovieContoller');

router.get('/',function(req,res){
    res.json({
        status:' API is working',
        message: 'MoviesApp Rest API'
    })
})

router.route('/movies').get(controller.findAll).post(controller.create);
router.route('/movies/:_id').get(controller.getById).delete(controller.delete);
module.exports=router;