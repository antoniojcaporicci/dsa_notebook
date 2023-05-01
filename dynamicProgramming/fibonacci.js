// function find_fibonacci(n) {
//     let hashTable = []

//     hashTable[0] = 0
//     hashTable[1] = 1

//     for (let i = 3; i <= n; i++) {
//         let mod = i % 3

//         switch (mod) {
//             case 0:
//                 hashTable[0] = hashTable[1] + hashTable[2]
//                 break
//             case 1:
//                 hashTable[1] = hashTable[2] + hashTable[0]
//                 break
//             case 2:
//                 hashTable[2] = hashTable[0] + hashTable[1]
//                 break
//         }
//     }

//     return hashTable[n % 3]
// }


function find_fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let prev = 1;
    let current = 1;

    for (let i = 2; i < n; i++) {
        let next = prev + current;
        prev = current;
        current = next;
    }

    return current;
}


console.log(find_fibonacci(4))