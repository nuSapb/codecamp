'use strict'
let draw = (n) => {
    let k = (2 * n) - 1
    let cnt = 1
    for (let i = 1; i <= (2 * n) - 1; i++) { // 0
        
        let str = ''
        for (let j = n; j > 0; j--) { // 3
            // j > i ? (str += '-') : (str += '*')
            if (i <= n) {
                (j - 1 >= i) ? (str += '-'): (str += cnt, cnt++)
            } else {
                (j <= k) ? (str += cnt, cnt++) : (str += '-')
            }
        }
        console.log(str)
        k--
    }
}
draw(4)