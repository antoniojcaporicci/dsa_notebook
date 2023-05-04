// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
function threeSum(nums) {
    const triplet = 3
    const res = [];
    
    function helper(currComb, start, end, size) {
        if (size === 0) {
            if (currComb.reduce((acc, curr) => acc + curr) === 0) {
                res.push([...currComb]);
            }
            return;
        }
        
        for (let i = start; i <= end - size + 1; i++) {
            currComb.push(nums[i]);
            helper(currComb, i+1, end, size-1);
            currComb.pop();
        }
    }
    
    helper([], 0, nums.length-1, triplet);
    return res;
}

console.log(threeSum([-1,0,1,2,-1,-4]))