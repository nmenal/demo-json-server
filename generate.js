module.exports = function(){
    var _ = require("lodash");
    var faker = require("faker");
    return{
        people:_.times(100, function(n){
            return{
                id:n,
                name:faker.name.findName(),
                avatar: faker.internet.avatar()
            }
        })
    }
}