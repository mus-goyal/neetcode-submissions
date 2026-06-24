class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const products: number[] = [];
        const numsWithoutZero = nums.filter((n) => n != 0);
        if (!numsWithoutZero.length) {
            return nums;
        }
        const numsWithZero = nums.filter(n => n == 0).length;
        if(numsWithZero > 1){
            return new Array(nums.length).fill(0);
        }
        nums.forEach((num) => {
            const product = num
                ? nums.reduce((a, b) => a * b, 1)
                : numsWithoutZero.reduce((a, b) => a * b, 1);
            products.push(num ? product / num : product);
        });
        return products;
    }
}
