package JavaPlayGround;

import java.util.LinkedList;
import java.util.Map;
import java.util.PriorityQueue;
import java.util.Queue;

public class LeastInterval {
    public int leastInterval(char[] tasks, int n) {
        if (n == 0)
            return tasks.length;
        PriorityQueue<Integer> maxHeap = new PriorityQueue<Integer>((a, b) -> b - a);
        Queue<Map.Entry<Integer, Integer>> q = new LinkedList<>();
        int[] tasksOccurences = new int[26];

        for (char task : tasks)
            tasksOccurences[task - 'A']++;
        for (int taskOccurnces : tasksOccurences) {
            if (taskOccurnces > 0)
                maxHeap.add(taskOccurnces);
        }

        int time = 0;
        while (!maxHeap.isEmpty() || !q.isEmpty()) {
            time++;

            if (!maxHeap.isEmpty()) {
                int taskCount = maxHeap.poll();
                taskCount--;
                if (taskCount > 0) {

                    q.add(new java.util.AbstractMap.SimpleEntry<>(taskCount, time + n));
                }
            }

            if (!q.isEmpty() && q.peek().getValue() == time) {
                maxHeap.add(q.poll().getKey());

            }

        }
        return time;
    }
}
