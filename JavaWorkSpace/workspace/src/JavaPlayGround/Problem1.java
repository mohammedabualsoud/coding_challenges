package JavaPlayGround;

import java.util.Arrays;

public class Problem1 {
    public String solution(String S, int K) {
        String[] weeks = new String[] { "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" };

        int weekIndex = Arrays.asList(weeks).indexOf(S);

        String answer = weeks[(weekIndex + (K % weeks.length)) % weeks.length];

        return answer;
    }
}
