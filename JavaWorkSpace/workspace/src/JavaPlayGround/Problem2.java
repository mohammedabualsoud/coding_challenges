package JavaPlayGround;

public class Problem2 {

    public int binaryStringToInt(String s) {
        int result = 0;

        for (int i = 0; i < s.length(); i++) {
            int currentBit = s.charAt(i) - '0';
            result = result * 2 + currentBit;
        }

        return result;
    }

    public int solution(String s) {
        int value = binaryStringToInt(s);
        int operations = 0;

        while (value > 0) {
            if (value % 2 == 1) {
                // If the value is odd, subtract 1
                value--;
                operations++;
            } else {
                // If the value is even, divide by 2
                value /= 2;
                operations++;
            }
        }

        return operations;
    }

    public int numSteps(String s) {
        int step = 0;
        int carry = 0;
        StringBuilder sb = new StringBuilder(s);
        for (int i = sb.length() - 1; i > 0; --i) {
            // if it is odd, add 1 with it and update step by 2
            // what makes it odd, when last digit is 1
            if (sb.charAt(i) - '0' + carry == 1) {
                carry = 1;
                step += 2;
            } else {
                step += 1;
            }
        }
        return step + carry;
    }

    // 6 -> 3 -> 2 -> 1 -> 0
    public static void main(String[] args) {
        // System.out.println(new Problem2().binaryStringToInt("1101")); // Expected: 6
        System.out.println(new Problem2().binaryStringToInt("111")); // Expected: 6

        System.out.println(new Problem2().numSteps("111")); // Expected: 6

        // System.out.println(minOperations("111")); // Expected: 5
        // System.out.println(minOperations("1111010101111")); // Expected: 22
        // System.out.println(minOperations("")); // Expected: 0
    }
}
