function groupAdultsByAgeRange(givenArray) {
    if(givenArray.length == 0){
        return {};
    }

    //without 17 and younger

    givenArray = givenArray.filter(c => c.age >= 18);

    givenArray = givenArray.reduce(function (accumulator, object) {
        let foundAge = object['age'];
        let key = '';
        switch(true){
            case (foundAge < 21):
                key = '20 and younger';
                break;

            case (foundAge > 20 && foundAge <31):
                key = '21-30';
                break;
            
            case (foundAge > 30 && foundAge <41):
                key = '31-40';
                break;
            
            case (foundAge > 40 && foundAge <51):
                key = '41-50';
                break;
            
            case (foundAge >= 51):
                key = '51 and older';
                break;
            
                default:
                    break;

        }
        if(!accumulator[key]){
            accumulator[key] = [];
        }
        accumulator[key].push(object);
        return accumulator;
    }, {});

    return givenArray;
    
}

module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange