package JavaPlayGround;

class MaxProductDifference {
    public int maxProductDifference(int[] nums) {
        int max1 = Integer.MIN_VALUE; // Largest element
        int max2 = Integer.MIN_VALUE; // Second largest element
        int min1 = Integer.MAX_VALUE; // Smallest element
        int min2 = Integer.MAX_VALUE; // Second smallest element

        for (int num : nums) {
            max2 = Math.max(max2, Math.min(max1, num));
            max1 = Math.max(max1, num);

            min2 = Math.min(min2, Math.max(min1, num));
            min1 = Math.min(min1, num);
        }

        // Calculate the maximum product difference
        int maxProductDiff = (max1 * max2) - (min1 * min2);

        return maxProductDiff;
    }

    public static void main(String[] args) {
        MaxProductDifference instance = new MaxProductDifference();
        System.out.println(instance.maxProductDifference(new int[] { 5, 6, 2, 7, 4 }));

    }
}