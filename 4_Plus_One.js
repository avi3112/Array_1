
// 💡 You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// **Example 1:**
// Input: digits = [1,2,3]
// Output: [1,2,4]

// **Explanation:** The array represents the integer 123.

// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].


function plusone(nums){
    for(let i=nums.length-1;i>=0;i--){
        if(nums[i]!=9){
            nums[i]=nums[i]+1
            return nums
        }
        else{
            nums[i]=0
        }

    }
    return [1,...nums]
}

const result= plusone([1,2,3])
console.log(result)