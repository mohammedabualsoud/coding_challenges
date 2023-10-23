package JavaPlayGround;

public class FirstMissingPositive {
    public int firstMissingPositive(int[] nums) {

        // mark all negative with 0
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] < 0) {
                nums[i] = 0;
            }
        }

        // mark number existence using a negative value.

        for (int i = 0; i < nums.length; i++) {
            int val = Math.abs(nums[i]);

            if (val >= 1 && val <= nums.length) {
                if (nums[val - 1] > 0) {
                    // mark it's existence by converting it to negative.
                    nums[val - 1] *= -1;
                } else if (nums[val - 1] == 0) {
                    // set out out bound value to ignore it.
                    nums[val - 1] = -1 * (nums.length + 1);
                }
            }

        }

        for (int i = 1; i <= nums.length; i++) {
            if (nums[i - 1] >= 0)
                return i;
        }
        return nums.length + 1;
    }

}
