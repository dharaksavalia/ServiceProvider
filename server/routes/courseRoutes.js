

module.exports =(app) =>{
    app.get('/api/course',(req,res)=>{
        res.send('request sucessffull');
    });
    app.post('/api/course/createnew',(req,res)=>{
        res.send(req.body.courseName+' '+req.body.courseId);
    })
}