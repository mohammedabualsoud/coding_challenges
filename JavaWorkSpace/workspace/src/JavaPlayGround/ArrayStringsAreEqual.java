package JavaPlayGround;

import java.util.*;

public class ArrayStringsAreEqual {

    public boolean arrayStringsAreEqual(String[] word1, String[] word2) {
        String s1;
        String s2;
        boolean isEqual = false;

        StringJoiner joiner = new StringJoiner("");

        for (String word : word1) {
            joiner.add(word);

        }
        s1 = joiner.toString();

        joiner = new StringJoiner("");

        for (String word : word2) {
            joiner.add(word);

        }

        s2 = joiner.toString();

        isEqual = s1.equals(s2);
        return isEqual;
    }

    public boolean arrayStringsAreEqualV2(String[] word1, String[] word2) {
        int word1Idx = 0, char1Idx = 0, word2Idx = 0, char2Idx = 0;

        while (true) {

            if (word1[word1Idx].charAt(char1Idx) != word2[word2Idx].charAt(char2Idx))
                return false;

            // Note: both chars are equal
            char1Idx++;
            char2Idx++;

            // Note: change the word index if needed.
            if (char1Idx == word1[word1Idx].length()) {
                char1Idx = 0;
                word1Idx++;
            }

            if (char2Idx == word2[word2Idx].length()) {
                char2Idx = 0;
                word2Idx++;
            }

            if (word1Idx == word1.length && word2Idx == word2.length)
                break;

            // Note: one the the list finished traversing.
            if (word1Idx == word1.length || word2Idx == word2.length)
                return false;
        }
        return true;
    }

}
