class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let numsMap: Map<number, number> = new Map();

        for(let i = 0; i < nums.length; i++)
        {
            const targetDiff = target - nums[i];
           
            if(numsMap.has(targetDiff)){
                return [numsMap.get(targetDiff), i]
            }
            numsMap.set(nums[i], i);
        }
        return []
    }
}
