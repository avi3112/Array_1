
// 💡 **Q1.** Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// **Example:**
// Input: nums = [2,7,11,15], target = 9
// Output0 [0,1]

// **Explanation:** Because nums[0] + nums[1] == 9, we return [0, 1]
//====================================================================

//Approch >> 1 >> brute force solution



function twosum(nums,target){
    for(let i=0;i<nums.length;i++){
        for(let j=1;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
                return [i,j]
            }
        }
    }
}

const result= twosum([2,7,11,15],18)
console.log(result)


//Approch >> 2 >> optimize solution


function twosum1(nums,target){
    const map={}
    for(let i=0;i<nums.length;i++){
        let val=nums[i]
        map[val]=i
    }
    for(let i=0;i<nums.length;i++){
        let check= target-nums[i]
        if(map[check]&&map[check] !=i){
            return [i,map[check]]
        }
    }
}

const result1=twosum1([2,7,11,15],9)
console.log(result1)


// space o(n)
// time o(n)