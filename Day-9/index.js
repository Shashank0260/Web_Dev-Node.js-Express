// Middlewware
const checkAge = (req, res, next) => {
    const age = 18;
    if ( age < 18) {
        return res.status(403).json({message: "Access Denied"})
    }
    next();
}

app.use(checkAge);
app.use(middleware);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
