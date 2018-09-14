'use strict'
let draw = (n) => {
    let m = n
    let last = 0
    for (let i = 1; i <= n; i++) {
        let str = ''
        let cnt = 1
        for (let j = 1; j <= (2 * n) - 1; j++) {
            (j >= m && cnt <= (2 * i) - 1) ? (str += '*', cnt++) : (str += '-')
        }
        console.log(str)
        m--
    }
    let s = 1
    let k = (2 * n) - 3
    for (let i = n; i < (2*n)-1; i++) {
        let str = ''
        let cnt = 1
        for (let j = 1; j <= s; j++) {
            str += '-'
        }
        for (let j=1; j <= k; j++) {
            str += '*'
        }
        for(let j = 1; j <=s; j++){
            str += '-'
        }
        console.log(str)
        k -= 2
        s++
    }
}

draw(9)