package JavaPlayGround;

import java.util.HashMap;
import java.util.Map;
import java.util.PriorityQueue;

public class ReorganizeString {
    public String reorganizeString(String s) {
        char[] charsArray = new char[s.length()];
        HashMap<Character, Integer> charsCount = new HashMap<Character, Integer>();

        for (char ch : s.toCharArray()) {
            charsCount.put(ch, charsCount.getOrDefault(ch, 0) + 1);
        }

        PriorityQueue<Map.Entry<Character, Integer>> pq = new PriorityQueue<>(
                (a, b) -> b.getValue() - a.getValue());
        pq.addAll(charsCount.entrySet());

        Map.Entry<Character, Integer> previous = null;
        int charIndex = 0;

        while (pq.size() > 0 || previous != null) {

            if (previous != null && pq.size() == 0)
                return "";

            Map.Entry<Character, Integer> currentEntry = pq.poll();
            charsArray[charIndex++] = currentEntry.getKey();
            currentEntry.setValue(currentEntry.getValue() - 1);

            if (previous != null) {
                // push it back to the queue, and clean the previous.
                pq.add(previous);
                previous = null;
            }

            if (currentEntry.getValue() > 0) {
                // put that character on hold.
                previous = currentEntry;
            }

        }

        return new String(charsArray);
    }

    public static void main(String[] args) {
        new ReorganizeString().reorganizeString("ABCADAD");
    }
}
