function handler(err, req, res, next) {
        if (!err) {
                next();
        }
        const errMsg = err.message || err.toString();
        console.log(`Something Went Wrong: ${errMsg} `, err);
        res.status(err.status || 500).send({
                message: errMsg || 'Something went wrong'
        })
}

module.exports = {
        handler
}