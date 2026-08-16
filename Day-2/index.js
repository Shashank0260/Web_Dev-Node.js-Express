// app.get method 

app.get("/", (req, res)=> {
    res.send ("Hello World!");
});

// app.post method

app.post('/user', (req, res) => {
    console.log(req.body)
    User.push(req.body)
    res.send({
        "message": "User added successfully",
        "newUser": req.body
    })
})