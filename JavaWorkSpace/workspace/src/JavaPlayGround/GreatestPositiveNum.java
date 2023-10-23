package JavaPlayGround;

import java.util.*;

public class GreatestPositiveNum {
    public int solution(int[] A) {
        // Implement your solution here

        
        HashSet<Integer> positiveOccurrences = new HashSet<Integer>();
        for (int num: A)  {
            if (num >= 0) positiveOccurrences.add(num);
        }

        for (int i = 1; i < 100000; i++) {
            if (!positiveOccurrences.contains(i)) {
                return i;
            }
        }
        return 1;
    }
}
