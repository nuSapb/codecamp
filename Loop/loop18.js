'use strict'
let draw = (n) => {
    for (let i = n; i > 0; i--) { //3
        
        let str = ''
        for (let j = n; j > 0; j--) {   //
            j <= i ? (str += '*') : (str += '-')
        }
        console.log(str)
    }
    
}

draw(3)