package JavaPlayGround;

public class FindMiddleIndex {
    public int findMiddleIndex(int[] nums) {
        int answer = -1;
        int[] prefix = new int[nums.length + 1];
        int[] postfix = new int[nums.length + 1];

        for (int i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
            prefix[i + 1] = nums[i] + prefix[i];
            postfix[j] = nums[j] + postfix[j + 1];
        }

        for (int i = 0; i < nums.length; i++) {
            if (prefix[i] == postfix[i + 1])
                return i;
        }

        return answer;

    }
}
