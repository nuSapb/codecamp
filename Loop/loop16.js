'use strict'
let draw = (n) => {
    let k = n - 1 //4
    let cntDown = n-1
    let cntUp = 1
    for (let i = 0; i < n + n - 1; i++) {
        let str = ''
        for (let j = 0; j < n; j++) {
            if (i < n) {
                (j<=i) ? str += cntUp: str += '-'
            } else {
                (j<k) ? str += cntDown: str += '-'
            }

        }
        (i>=n) ? (k--, cntDown--): cntUp++
        console.log(str)
    }
}

draw(3)