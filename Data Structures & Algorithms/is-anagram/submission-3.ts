class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length == t.length){
            const asciiForS: number[] = new Array(26).fill(0);
            const asciiForT: number[] = new Array(26).fill(0);

            for(const char of s){
                asciiForS[char.charCodeAt(0) - "a".charCodeAt(0)]++;
            }

            const sKey = asciiForS.join("|");

            
            for(const char of t){
                asciiForT[char.charCodeAt(0) - "a".charCodeAt(0)]++;
            }
            const tKey = asciiForT.join("|");

            if(sKey == tKey){
                return true;
            }

            return false;
        }

        return false;
    }
}
