const superagent = require('superagent')

function getTatooineResidents() {
    return superagent
    .get('https://swapi.co/api/planets/1/')
    .then(response => { 
        return response.body.residents;})
    .catch(error => console.log(error))
}

function promiseMeAString(givenString) {
    let promise1 = new Promise( (resolve, reject) => {
        if (typeof givenString === 'string'){
            resolve("You kept the Promise!");
        } else {
            reject("You have failed me!");
        }
} );
return promise1;
}



module.exports = {
    getTatooineResidents,
    promiseMeAString
}