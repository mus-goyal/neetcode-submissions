class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length != t.length) {
            return false;
        }

        const sStringMap: Map<string, number> = new Map();
        const tStringMap: Map<string, number> = new Map();

        s.split("").forEach((char) => {
            let keyExistsInMap = sStringMap.get(char);

            if (keyExistsInMap) {
                sStringMap.set(char, keyExistsInMap + 1)
            } else {
                sStringMap.set(char, 1);
            }
        });

        t.split("").forEach((char) => {
            let keyExistsInMap = tStringMap.get(char);

            if (keyExistsInMap) {
                tStringMap.set(char, keyExistsInMap + 1)
            } else {
                tStringMap.set(char, 1);
            }
        });

        let stringsMatch = true;

        const originKeys = Array.from(sStringMap.keys());

        for (let key = 0; key < originKeys.length; key++) {
            const originValue = sStringMap.get(originKeys[key]);
            const destValue = tStringMap.get(originKeys[key]);
            if (originValue != destValue) {
                stringsMatch = false;
                break;
            }
        }

        return stringsMatch;
    }
}
