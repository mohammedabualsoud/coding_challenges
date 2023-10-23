package JavaPlayGround;

import java.util.HashMap;
import java.util.Stack;

public class NextGreaterElement {
    public int[] nextGreaterElement(int[] nums1, int[] nums2) {
        int[] output = new int[nums1.length];
        HashMap<Integer, Integer> num1Indexes = new HashMap<Integer, Integer>();

        for (int i = 0; i < nums1.length; i++) {
            num1Indexes.put(nums1[i], i);
        }

        Stack<Integer> stack = new Stack<Integer>();
        for (int num : nums2) {
            while (!stack.isEmpty() && num > stack.peek()) {
                int target = stack.pop();
                output[num1Indexes.get(target)] = num;
            }

            if (num1Indexes.containsKey(num)) {
                stack.push(num);
            }
        }

        return output;
    }
}
