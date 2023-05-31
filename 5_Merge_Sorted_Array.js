
// 💡 You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// **Example 1:**
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

// **Explanation:** The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.


function mergearray(nums1,nums2){
    let num=[]
    for(let i=0;i<nums1.length;i++){
        if(nums1[i]!==0){
            num.push(nums1[i])
        }
    }
    for(let j=0;j<nums2.length;j++){
        if(nums2[j]!==0){
            num.push(nums2[j])
        }
    }
    return num

}

const result= mergearray([1,2,3,0,0,0],[2,5,6])
console.log(result)