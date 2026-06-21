class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const numsMap: Map<number, number> = new Map();
        nums.forEach((num) => {
            numsMap.set(num, (numsMap.get(num) ?? 0) + 1);
        });


        const sortedNums = nums.sort((a, b) => numsMap.get(b) - numsMap.get(a));

        const y: number[] = [];
        for (let x = 0; x < nums.length; x++) {
            if (y.includes(sortedNums[x])) {
                continue;
            }
            y.push(sortedNums[x]);

            if (y.length == k) {
                return y;
            }
        }
        return y;
    }
}
