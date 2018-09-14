'use strict'
let draw = (n) => {
    let k = (2*n)-1
    let m = n
    for (let i = 1; i <= n; i++) {
        let str = ''
        let cnt = 1
        for (let j = 1; j <= (2*n)-1; j++) {
            (j >= m && cnt <= (2*i)-1) ?(str += '*', cnt++):(str += '-')
        }
        console.log(str)
        m--
    }
}

draw(4)