package JavaPlayGround;

import java.util.*;
import java.util.PriorityQueue;

public class FindKthLargest {
    public int findKthLargest(int[] nums, int k) {
        int answer = 0;
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> b - a);

        for (int num : nums) {
            maxHeap.add(num);
        }

        for (int i = 0; i < k; i++) {
            answer = maxHeap.poll();
        }
        return answer;
    }

    public int findKthLargestN(int[] nums, int k) {
        int answer = 0;
        int maxVal = Integer.MIN_VALUE;

        for (int num : nums) {
            if (num > maxVal) {
                maxVal = num;
            }
        }

        Map<Integer, Integer> occurrences = new HashMap<Integer, Integer>();

        for (int num : nums) {
            int diff = maxVal - num;
            occurrences.put(diff, occurrences.getOrDefault(diff, 0) + 1);
        }

        int count = 0;
        int diff = 0;

        while (count < k) {
            count += occurrences.getOrDefault(diff, 0);
            diff++;
        }

        return maxVal - diff + 1;
    }
}
