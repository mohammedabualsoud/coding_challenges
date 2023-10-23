package JavaPlayGround;

public class Shuffle {
    public int[] shuffle(int[] nums, int n) {
        int[] output = new int[nums.length];
        for (int i = 0; i < n; i++) {
            output[2 * i] = nums[i];
            output[2 * i + 1] = nums[n + i];
        }
        return output;
    }

}