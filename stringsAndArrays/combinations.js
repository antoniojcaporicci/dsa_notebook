// todo: figure this out
function find_combinations(n, k) {
    const res = [];
    
    function backtrack(currComb, start, end, k) {
        if (k === 0) {
            res.push([...currComb]);
            return;
        }
        
        for (let i = start; i <= end - k + 1; i++) {
            currComb.push(i);
            backtrack(currComb, i+1, end, k-1);
            currComb.pop();
        }
    }
    
    backtrack([], 1, n, k);
    return res;
}

console.log(find_combinations(4, 2))