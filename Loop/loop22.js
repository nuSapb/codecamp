'use strict'
let draw = (n) => {
    let k = (2 * n) - 1
    for (let i = 1; i <= n; i++) {
        let str = ''
        let cnt = 1
        for (let j = 1; j <= (2 * n) - 1; j++) {
            (j >= i && cnt <= k) ? (str += '*', cnt++): (str += '-')
        }
        console.log(str)
        k -= 2
    }

}

draw(3)