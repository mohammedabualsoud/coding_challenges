package JavaPlayGround;

public class ProductExceptSelf {
    public int[] productExceptSelf(int[] nums) {
        int[] output = new int[nums.length];
        int[] prefix = new int[nums.length + 1];
        int[] suffix = new int[nums.length + 1];
        // Initialize with 1 since there's 2 prefix / suffix for first items.
        prefix[0] = 1;
        suffix[nums.length] = 1;

        for (int i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
            prefix[i + 1] = prefix[i] * nums[i];
            suffix[j] = suffix[j + 1] * nums[j];
        }

        for (int i = 1; i <= nums.length; i++) {
            output[i - 1] = prefix[i - 1] * suffix[i];
        }

        return output;
    }

    public int[] productExceptSelfNoMem(int[] nums) {
        int[] output = new int[nums.length];
        int prefix = 1;
        int postfix = 1;

        for (int i = 0; i < nums.length; i++) {
            output[i] = prefix;
            prefix *= nums[i];
        }
        for (int i = nums.length - 2; i >= 0; i--) {
            postfix *= nums[i + 1];
            output[i] *= postfix;
        }

        return output;
    }

    public static void main(String[] args) {
        new ProductExceptSelf().productExceptSelf(new int[] { 1, 2, 3, 4 });
    }
}
