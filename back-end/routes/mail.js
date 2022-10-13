const router = require("express").Router();
router.post('/mail',(req,res)=>{

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'zied_ch@outlook.fr',
            pass: '23220462ziedch12'
        }
    });
  
    var mailOptions = {
        from: 'zied_ch@outlook.fr',// sender address
        to: 'uchihazied@gmail.com', // list of receivers
        subject: req.body.subject, // Subject line
        text:req.body.description,
        email:req.body.email,
        html: `
        <div style="padding:10px;border-style: ridge">
        <p>You have a new contact request.</p>
        <h3>Contact Details</h3>
        <ul>
            <li>Subject: ${req.body.subject}</li>
            <li>Message: ${req.body.description}</li>
            <li>usermail: ${req.body.email}</li>
        </ul>`
        
    };
   router.use(
      cors({
        origin: ["http://localhost:3500/"],
        methods: ["GET", "POST" , "PATCH" , "DELETE"],
        credentials: true,
      })
    );
  
    transporter.sendMail(mailOptions, function(error, info){
        if (error)
        {
            res.json({status: true, respMesg: 'Email Sent Successfully'})
        }
        else
        {
            res.json({status: true, respMesg: 'Email Sent Successfully'})
        }
  
    });
  });
  
    const nodemailer = require('nodemailer');
    module.exports = router;