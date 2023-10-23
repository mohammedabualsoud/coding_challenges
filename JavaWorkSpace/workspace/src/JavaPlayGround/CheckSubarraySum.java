package JavaPlayGround;

import java.util.*;

public class CheckSubarraySum {
    public boolean checkSubarraySum(int[] nums, int k) {
        Map<Integer, Integer> remainders = new HashMap<Integer, Integer>();

        remainders.put(0, 0);

        int total = 0;
        for (int i = 0; i < nums.length; i++) {
            total += nums[i];
            int remainder = total % k;
            if (!remainders.containsKey(remainder)) {
                remainders.put(remainder, i);
            } else if (i - remainders.get(remainder) > 1) {
                return true;
            }
        }
        return false;
    }
}
