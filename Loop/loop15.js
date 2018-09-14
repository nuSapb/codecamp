'use strict'
let draw = (n) => {
    let k = n-1
    for (let i = 0; i <= 2*(n-1); i++) {
        let str = ''
        for (let j = 0; j < n; j++) {
            (i < n) ? ((j <= i) ? str += '*' : str += '-') : ((j < k) ? str += '*' : str += '-')
            // if( i < n) {
            //     (j <= i) ? str += '*': str += '-'
            // } else {
            //     (j < k) ? str += '*': str += '-'
            // } 
        }
        (i >= n) ? k--: k
        console.log(str)
    }
}

draw(4)