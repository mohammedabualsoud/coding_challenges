package JavaPlayGround;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class DefangIPaddr {
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
}
