package JavaPlayGround;

public class MinPartitions {
    public int minPartitions(String n) {
        return n.chars()
                .filter(Character::isDigit)
                .map(Character::getNumericValue)
                .max()
                .orElseThrow(() -> new IllegalArgumentException("No digits found in the input string."));
    }
}
