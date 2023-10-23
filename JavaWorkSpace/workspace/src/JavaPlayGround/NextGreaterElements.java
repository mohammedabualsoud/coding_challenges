package JavaPlayGround;

import java.util.Arrays;
import java.util.Stack;

public class NextGreaterElements {
    public int[] nextGreaterElements(int[] nums) {
        int n = nums.length;
        int[] output = new int[n];
        Arrays.fill(output, -1);
        Stack<Integer> stack = new Stack<Integer>();

        for (int i = 0; i < 2 * n; i++) {
            while (!stack.isEmpty() && nums[stack.peek()] < nums[i % n]) {
                output[stack.pop()] = nums[i % n];
            }
            if (i < n)
                stack.push(i);
        }
        return output;
    }
}
