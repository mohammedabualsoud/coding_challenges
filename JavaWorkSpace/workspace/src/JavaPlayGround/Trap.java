package JavaPlayGround;

public class Trap {
    public int trap(int[] height) {
        if (height.length == 0)
            return 0;

        int ans = 0;
        int left = 0, right = height.length - 1;
        int maxLeft = height[left], maxRight = height[right];

        while (left < right) {
            if (maxLeft <= maxRight) {
                left++;
                maxLeft = Math.max(maxLeft, height[left]);
                ans += maxLeft - height[left];
            } else {
                right--;
                maxRight = Math.max(maxRight, height[right]);
                ans += maxRight - height[right];
            }
        }

        return ans;
    }
}
