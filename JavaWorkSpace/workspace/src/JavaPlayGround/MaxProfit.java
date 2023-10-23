package JavaPlayGround;

public class MaxProfit {
    public int maxProfit(int[] prices) {
        int max = 0;
        int buy = 0, sell = 1;

        while (sell < prices.length) {

            // check if profitable
            if (prices[buy] < prices[sell]) {
                max = Math.max(max, prices[sell] - prices[buy]);
            } else {
                // found a lower price, pick this lower and try find a higher price
                buy = sell;
            }
            sell++;
        }

        return max < 0 ? 0 : max;
    }

    public static void main(String[] args) {

        System.out.println(new MaxProfit().maxProfit(new int[] { 7, 1, 5, 3, 6, 4 }));

        System.out.println(new MaxProfit().maxProfit(new int[] { 2, 1, 4 }));
    }
}
