package JavaPlayGround;

public class IsPalindrome {
    private boolean isNonAlphanumeric(char ch) {
        return !Character.isDigit(ch) && !Character.isLetter(ch);
    }

    public boolean isPalindrome(String s) {
        int left = 0, right = s.length() - 1;
        while (left < right) {

            while (isNonAlphanumeric(s.charAt(left)))
                left++;
            while (isNonAlphanumeric(s.charAt(right)))
                right--;

            if (Character.toLowerCase(s.charAt(left)) != Character.toLowerCase(s.charAt(right))) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }
}
