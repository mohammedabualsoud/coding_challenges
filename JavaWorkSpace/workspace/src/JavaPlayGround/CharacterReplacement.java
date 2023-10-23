package JavaPlayGround;

public class CharacterReplacement {
    public int characterReplacement(String s, int k) {
        int answer = 0;
        int[] charCounts = new int[26];
        int maxFreq = 0;

        for (int right = 0, left = 0; right < s.length(); right++) {
            charCounts[s.charAt(right) - 'A']++;
            maxFreq = Math.max(maxFreq, charCounts[s.charAt(right) - 'A']);

            while (right - left + 1 - maxFreq > k) {
                charCounts[s.charAt(left) - 'A']--;
                left++;
            }

            answer = Math.max(answer, right - left + 1);
        }

        return answer;
    }
}
