package JavaPlayGround;

import java.util.*;

public class IntervalIntersection {
    static final int START_IDX = 0;
    static final int END_IDX = 1;

    public int[][] intervalIntersection(int[][] firstList, int[][] secondList) {
        List<int[]> output = new LinkedList<int[]>();

        int firstIdx = 0;
        int secondIdx = 0;

        while (firstIdx < firstList.length && secondIdx < secondList.length) {
            if (hasIntersection(firstList[firstIdx], secondList[secondIdx])) {

                int[] intersection = new int[] {
                        Math.max(firstList[firstIdx][START_IDX], secondList[secondIdx][START_IDX]),
                        Math.min(firstList[firstIdx][END_IDX], secondList[secondIdx][END_IDX])
                };

                output.add(intersection);
            }

            if (firstList[firstIdx][END_IDX] > secondList[secondIdx][END_IDX]) {
                secondIdx++;
            } else {
                firstIdx++;
            }

        }
        return output.toArray(new int[output.size()][]);
    }

    private boolean hasIntersection(int[] point1, int[] point2) {
        return point1[END_IDX] >= point2[START_IDX] && point1[START_IDX] <= point2[END_IDX];
    }

    public static void main(String args[]) {
        int[][] firstList = { { 0, 2 }, { 5, 10 }, { 13, 23 }, { 24, 25 } };
        int[][] secondList = { { 1, 5 }, { 8, 12 }, { 15, 24 }, { 25, 26 } };
        IntervalIntersection instance = new IntervalIntersection();

        int[][] intersectionList = instance.intervalIntersection(firstList, secondList);

        for (int[] intersection : intersectionList) {
            System.out.println(intersection[START_IDX] + ", " + intersection[END_IDX]);
        }

    }
}
