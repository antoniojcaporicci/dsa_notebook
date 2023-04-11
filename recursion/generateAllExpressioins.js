// function generate_all_expressions(s, target) {
//     const operationResult = (string) => {
//         // todo, follow rules of string and return output
//         // ex: "2+0+2" return 4
//         let answer
//         let newExpression

//         if (!string.length) return 0

//         if (Number(string[0]) && !Number(string[1])) {
//             answer = Number(string[0])
//             newExpression = s.slice(1, s.length)
//         } else if (Number(string[0]) && Number(string[1])) {
//             answer = Number(string[0] + string[1])
//             newExpression = s.slice(2, s.length)
//         }

//         for (let i = 0; i <= newExpression.length - 1; i++) {
//             if (string[i] === '+') {
//                 if (Number(string[i + 1]) && !Number(string[i + 2])) {
//                     answer += Number(string[i])
//                     i++
//                 } else if (Number(string[i + 1]) && Number(string[i + 2])) {
//                     answer += Number(string[i + 1] + string[i + 2])
//                     i++
//                     i++
//                 }
//             } else if (string[i] === '*') {
//                 if (Number(string[i + 1]) && !Number(string[i + 2])) {
//                     answer *= Number(string[i])
//                     i++
//                 } else if (Number(string[i + 1]) && Number(string[i + 2])) {
//                     answer *= Number(string[i + 1] + string[i + 2])
//                     i++
//                     i++
//                 }
//             }
//         }
//         return answer
//     }

//     const helper = (string, target, i, slate, arr = []) => {
//         // prune case
//         if (operationResult(slate) > target) {
//             return arr
//             // base case
//         } else if (operationResult(slate) === target) {
//             arr.push(slate)
//             return arr
//         }

//         // recursive combinations
//         let plus = '+'
//         let times = '*'

//         let joinString = slate + string[i]
//         let plusString
//         let timesString 
//         if (slate.length) {
//             plusString = `${slate}${plus}${string[i]}`
//             timesString = `${slate}${times}${string[i]}`
//         } else {
//             plusString = `${string[i]}${plus}`
//             timesString = `${string[i]}${times}`
//         }

//         helper(string, i + 1, target, joinString, slate, arr)
//         helper(string, i + 1, target, plusString, slate, arr)
//         helper(string, i + 1, target, timesString, slate, arr)
//         return arr
//     }

//     return helper(s, target, 0, '')
// }

// chatgpt
function generate_all_expressions(s, target) {
    const operationResult = (string) => {
        let result = 0;
        let cur_num = "";
        let last_op = "+";

        for (let i = 0; i < string.length; i++) {
            let ch = string[i];

            if (ch >= "0" && ch <= "9") {
                cur_num += ch;
            } else {
                let num = parseInt(cur_num);

                if (last_op === "+") {
                    result += num;
                } else if (last_op === "*") {
                    result *= num;
                }

                last_op = ch;
                cur_num = "";
            }
        }

        let num = parseInt(cur_num);

        if (last_op === "+") {
            result += num;
        } else if (last_op === "*") {
            result *= num;
        } else {
            result = num;
        }

        return result;
    };

    const helper = (string, target, i, slate, arr = []) => {
        if (i === string.length) {
            if (operationResult(slate) === target) {
                arr.push(slate);
            }
            return arr;
        }

        helper(string, target, i + 1, slate + string[i], arr);
        helper(string, target, i + 1, slate + "+" + string[i], arr);
        helper(string, target, i + 1, slate + "*" + string[i], arr);

        return arr;
    };

    return helper(s, target, 1, s[0], []);
}

console.log(generate_all_expressions('202', 4))