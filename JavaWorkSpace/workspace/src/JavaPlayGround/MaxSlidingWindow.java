package JavaPlayGround;

import java.util.Deque;
import java.util.LinkedList;

public class MaxSlidingWindow {

    public int[] maxSlidingWindow(int[] nums, int k) {
        int[] ans = new int[nums.length - k + 1];
        int l = 0;
        Deque<Integer> q = new LinkedList();

        for (int r = 0; r < nums.length; r++) {

            while (!q.isEmpty() && nums[r] > nums[q.peekLast()])
                q.pollLast();
            q.offer(r);

            if (l > q.peekFirst())
                q.pollFirst();

            if (r + 1 >= k)
                ans[l++] = nums[q.peekFirst()];
        }
        return ans;
    }
}
