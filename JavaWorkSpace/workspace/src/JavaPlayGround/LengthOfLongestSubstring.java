package JavaPlayGround;

import java.util.*;

public class LengthOfLongestSubstring {
    public int lengthOfLongestSubstring(String s) {
        if (s.isEmpty())
            return 0;

        int longest = 1;
        int left = 0, right = 1;
        Map<Character, Integer> alphabetOccurrences = new HashMap<Character, Integer>();

        alphabetOccurrences.put(s.charAt(left), 1);
        while (right < s.length()) {

            alphabetOccurrences.put(
                    s.charAt(right),
                    alphabetOccurrences.getOrDefault(s.charAt(right), 0) + 1);

            if (alphabetOccurrences.get(s.charAt(right)) == 1) {
                alphabetOccurrences.put(s.charAt(right), 1);
                longest = Math.max(longest, (right - left) + 1);
            }

            // shift left until one occurrences exists.
            while (left < right && alphabetOccurrences.get(s.charAt(right)) > 1) {
                alphabetOccurrences.put(
                        s.charAt(left),
                        alphabetOccurrences.get(s.charAt(left)) - 1);
                left++;
            }

            right++;

        }

        return longest;
    }

    // In the refactored code, I have optimized the algorithm by using a sliding
    // window approach. We are maintaining a Map that holds the characters of the
    // string as keys and their positions as values. The left pointer only moves
    // when we've found a repeating character. The right pointer moves every step.
    // The difference between the right and left pointers (+1) gives us the length
    // of the current non-repeating substring. We keep updating the longest length
    // at each step.
    public int lengthOfLongestSubstringV2(String s) {
        if (s.isEmpty())
            return 0;

        int longest = 0;
        Map<Character, Integer> charsMap = new HashMap<Character, Integer>();

        for (int right = 0, left = 0; right < s.length(); right++) {
            if (charsMap.containsKey(s.charAt(right))) {
                left = Math.max(charsMap.get(s.charAt(right)), left);
            }

            longest = Math.max(longest, right - left + 1);
            charsMap.put(s.charAt(right), right + 1);
        }

        return longest;
    }

    // abcdb
    public static void main(String[] args) {

        // pwwkew, 0 1 {p: 1, w: 1, k: 0, e: 0, } 2
        // pwwkew, 2 2 {p: 0, w: 1, k: 0, e: 0, } 2
        // pwwkew, 2 3 {p: 0, w: 1, k: 1, e: 0, } 2
        // pwwkew, 2 4 {p: 0, w: 1, k: 1, e: 1, } 3
        // pwwkew, 2 5 {p: 0, w: 1, k: 1, e: 1, } 3 -> 3 5 {p: 0, w: 1, k: 1, e: 1, } 3
        System.out.println(new LengthOfLongestSubstring().lengthOfLongestSubstring("tmmzuxt"));
    }
}
