const person = {
    firstName:'Pedro',
    lastName:'Pihueva',
    isStudent:true,
    geolocation:{
        lat:23.34,
        lng:12.11,
    },
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

function showData(parametro)
{
    console.log( parametro.firstName)
    console.log( parametro.lastName)
}
showData(person)