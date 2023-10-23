package JavaPlayGround;

import java.util.*;
import java.util.stream.Collectors;

public class IsPowerOfTwo {

    public boolean isPowerOfTwo(int n) {
        if (n == 1)
            return true;
        if (n % 2 != 0 || n == 0)
            return false;
        return isPowerOfTwo(n / 2);
    }

    public String defangIPaddr(String address) {
        List<Character> chars = new ArrayList<>();

        for (char c : address.toCharArray()) {
            if (c == '.') {
                chars.add('[');
                chars.add('.');
                chars.add(']');
            } else {
                chars.add(c);
            }
        }

        return chars.stream()
                .map(String::valueOf)
                .collect(Collectors.joining());

    }

    public static void main(String[] args) {

        System.out.println(new IsPowerOfTwo().isPowerOfTwo(20));
    }

}
