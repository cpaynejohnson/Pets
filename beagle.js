const Dog = require('./dog')

class Beagle extends Dog {
    constructor(name,color) {
        super(name, color,"Beagle")
    }

     howl(){
         return 'this dog goes aroooo'
    }

    b1= new Beagle("Lucy", "Spotted")


    //console.log(b1)
    //console.log
}