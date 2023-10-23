package JavaPlayGround;

import java.util.*;

public class MinWindow {
    public String minWindow(String s, String t) {
        if (s.equals(t))
            return s;

        int[] minWin = { 0, Integer.MAX_VALUE - 1 };
        Map<Character, Integer> tCount = new HashMap<>();
        Map<Character, Integer> windowCount = new HashMap<>();

        for (char c : t.toCharArray()) {
            tCount.put(c, tCount.getOrDefault(c, 0) + 1);
        }

        int requiredChars = tCount.size();
        int windowChars = 0;

        int left = 0;
        int right = 0;

        while (right < s.length()) {
            char charRight = s.charAt(right);

            if (tCount.containsKey(charRight)) {
                windowCount.put(charRight, windowCount.getOrDefault(charRight, 0) + 1);
                if (windowCount.get(charRight).equals(tCount.get(charRight))) {
                    windowChars++;
                }
            }

            while (windowChars >= requiredChars) {
                if (right - left + 1 < minWin[1] - minWin[0] + 1) {
                    minWin[0] = left;
                    minWin[1] = right;
                }

                char charLeft = s.charAt(left);

                if (windowCount.containsKey(charLeft)) {
                    windowCount.put(charLeft, windowCount.get(charLeft) - 1);
                    if (windowCount.get(charLeft) < tCount.get(charLeft)) {
                        windowChars--;
                    }
                }

                left++;
            }

            right++;
        }

        return minWin[1] == Integer.MAX_VALUE - 1
                ? ""
                : s.substring(minWin[0], minWin[1] + 1);
    }

    public static void main(String[] args) {
        System.out.println(new MinWindow().minWindow("ADOBECODEBANC", "ABC"));
        System.out.println(new MinWindow().minWindow("aa", "aa"));

    }
}
