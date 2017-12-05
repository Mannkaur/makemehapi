module.exports = function(context) {
        let query = context.data.root.query;
        let a = query.name;
        let b = query.suffix;
        return a + b;
    }
    
