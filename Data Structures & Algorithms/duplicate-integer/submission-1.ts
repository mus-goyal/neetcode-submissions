class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        //  const sortedArray = nums.sort();

        // for(let i = 0; i< sortedArray.length - 1; i++){
        //     if(sortedArray[i] == sortedArray[i+1]){
        //         return true;
        //     }
        // }
        // return false;
         const x: Set<number> = new Set();

        for(const a of nums){
            const existingCount = x.has(a);

            if(existingCount){
                return true;
            }
            x.add(a);
            
        }
        return false;

      
    }

}


   

        

