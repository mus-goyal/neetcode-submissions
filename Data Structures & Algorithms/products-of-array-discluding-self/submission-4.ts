class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const res = new Array(nums.length).fill(0);

        let zeroCount = 0;
        let defaultProduct = 1;

        for (const num of nums) {
            if (num == 0) {
                zeroCount++;
            } else {
                defaultProduct = defaultProduct * num;
            }
        }

        if (zeroCount > 1) {
            return res;
        }

        if (zeroCount == 1) {
            for (let i = 0; i < nums.length; i++) {
                if (nums[i] == 0) {
                    res[i] = defaultProduct;
                    continue;
                }
                res[i] = 0;
            }
        }

        if (!zeroCount) {
            for (let i = 0; i < nums.length; i++) {
                res[i] = defaultProduct / nums[i];
            }
        }
        return res;
    }
}
