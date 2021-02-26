var express = require('express');
var router = express.Router();

const ctrlLogin=require("../controllers/login");
const ctrlMain=require("../controllers/main");


/* GET home page. */
router.post('/login', ctrlLogin.login);
router.post('/register', ctrlMain.register);
// // function verifyToken(req,res,next)
// // {
// //     const bearerheader=req.headers['authorization'];
// //     if(typeof bearerheader!=='undefined')
// //     {
// //        const bearer=bearerheader.split(' ');
// //        const btoken=bearer[1];
   
// //        req.token=btoken;
// //        jwt.verify(req.token,'12345',(err,authdata)=>{
// //            if(err)
// //            {
// //                res.sendStatus(403);
   
// //            }
// //            else{
// //                 res.json({data:authdata});
               
                
// //            }
// //        });
// //     }else
// //     {
// //         res.sendStatus(403);
// //     }
       
     
// }
module.exports = router;
