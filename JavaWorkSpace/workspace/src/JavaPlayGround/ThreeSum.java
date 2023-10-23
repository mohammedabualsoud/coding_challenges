package JavaPlayGround;

import java.util.*;

public class ThreeSum {
    public List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> output = new LinkedList<List<Integer>>();
        Arrays.sort(nums);

        // Start from a, and look for 2 number b, c
        for (int i = 0; i < nums.length; i++) {
            int a = nums[i];

            if (i > 0 && nums[i - 1] == a)
                continue;

            int left = i + 1, right = nums.length - 1;

            while (left < right) {
                int threeSum = a + nums[left] + nums[right];

                if (threeSum > 0) {
                    right--;
                } else if (threeSum < 0) {
                    left++;
                } else {
                    // 0, pick 3 numbers
                    output.add(List.of(a, nums[left], nums[right]));
                    left++;

                    while (left < right && nums[left] == nums[left - 1])
                        left++;
                }
            }
        }

        return output;
    }
}
