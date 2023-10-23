package JavaPlayGround;

import java.util.*;
import java.util.Map.Entry;

public class TopKFrequent {
    @SuppressWarnings("unchecked")
    public int[] topKFrequent(int[] nums, int k) {
        ArrayList<Integer> answer = new ArrayList<Integer>();
        ArrayList<Integer>[] frequencyList = new ArrayList[nums.length + 1];

        for (int i = 0; i < frequencyList.length; i++) {
            frequencyList[i] = new ArrayList<>();
        }

        Map<Integer, Integer> frequencyMap = new HashMap<Integer, Integer>();

        for (int num : nums) {
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }

        for (Entry<Integer, Integer> entry : frequencyMap.entrySet()) {
            frequencyList[entry.getValue()].add(entry.getKey());
        }

        for (int i = frequencyList.length - 1; i >= 0; i--) {
            if (frequencyList[i].size() > 0) {
                List<Integer> subset = frequencyList[i].subList(0, Math.min(k, frequencyList[i].size()));
                answer.addAll(subset);

                if (answer.size() >= k)
                    break;
            }
        }

        return answer.stream().mapToInt(Integer::intValue).toArray();
    }

}
