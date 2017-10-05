const html_routing = (app, __dirname)=>{
    app.get('/', (req,res)=>{
        res.render('index.handlebars');
    })
}

module.exports= html_routing;