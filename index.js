const express=require('express')

const app=express()

app.use('/',(req,res)=>{
    res.send("<h1>Express</h1></br><h2>Express is the most popular Node web framework, and is the underlying library for a number of other popular Node web frameworks. It provides mechanisms to:</br>Write handlers for requests with different HTTP verbs at different URL paths (routes).</br>Integrate with 'view' rendering engines in order to generate responses by inserting data into templates.</br>Set common web application settings like the port to use for connecting, and the location of templates that are used for rendering the response.</br>Add additional request processing 'middleware' at any point within the request handling pipeline.</h2>")
})
app.listen(2300,()=>{
    console.log('port 2300');
})