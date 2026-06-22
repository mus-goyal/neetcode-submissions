class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const resultMap: Map<string, string[]> = new Map();

        for(const str of strs){
            let countArr: number[] = new Array(26).fill(0);

            for(const char of str){
                countArr[char.charCodeAt(0) - "a".charCodeAt(0)]++;
            }

            const key = countArr.join("|");

            if(resultMap.get(key)){
                resultMap.get(key).push(str);
            }else{
                resultMap.set(key, [str]);
            }
        }

        return [...resultMap.values()];
    }
}
