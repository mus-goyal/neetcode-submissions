class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let sortedNums: [number, number][] = [];

        for(let i = 0; i< nums.length; i++){
            sortedNums.push([nums[i], i]);
        }

        sortedNums = sortedNums.sort((a, b) => a[0] - b[0]);

        let left = 0;
        let right = sortedNums.length - 1;

        while(left < right)
        {
            const sum = sortedNums[left][0] + sortedNums[right][0];

            if(sum === target){
                return [sortedNums[left][1],sortedNums[right][1]];
            }

            if(sum > target){
                right--;
            }else{
                left++;
            }
            
        }

        return [];
    }
}
