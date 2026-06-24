class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int[] ans = new int[n];
        ans[0] = nums[0];
        int num = 1;

        for (int i=1; i<nums.length; i++) {
            ans[i] = ans[i-1] * nums[i];
        }
        // System.out.println(Arrays.toString(ans));
        // ans[n-1] = ans[n-2];
        // num = nums[n-1];
        for (int i=nums.length-1; i>=0; i--) {

            num = (i+1 == nums.length ? 1 : num * nums[i+1]);
            // System.out.println(num);

            ans[i] = (i-1 < 0 ? 1 : ans[i-1]) * num;
            // System.out.println(num);
            // num *= nums[i+1];

        }
        return ans;
    }
}  

// 1,2,4,6

// 1,2,8,24
// 48,48,24,6