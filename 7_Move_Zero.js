
// 💡 Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the nonzero elements.

// Note that you must do this in-place without making a copy of the array.

// **Example 1:**
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]



// function movezero(nums){
//     let count=0
//     let newarr=[]

//     for(let i=0;i<nums.length;i++){
//         if(nums[i] !=0){
//             newarr.push(nums[i])
//         }
//         if(nums[i]==0){
//             count++
//         }
//     }return newarr

// }


// const result= movezero([0,1,0,3,12])
// console.log(result)



function movezero1(nums){
    if(nums.length==0 || nums.length==1){
        return ("length should be more than 2")
    }
    let left=0
    let right=0
    while(right<nums.length){
        if(nums[right]==0){
            right++
        }
        else{
            temp=nums[left]
            nums[left]=nums[right]
            nums[right]=temp
            left++
            right++

        }
    }return nums

}
const result1= movezero1([0,1,0,3,12])
console.log(result1)