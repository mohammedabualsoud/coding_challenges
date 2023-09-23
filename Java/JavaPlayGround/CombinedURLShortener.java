package Java.JavaPlayGround;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

public class CombinedURLShortener {
    private static final String BASE_URL = "http://short.ly/";
    private static final int RANDOM_STRING_LENGTH = 2;
    private static final String HASH_ALGORITHM = "SHA-256";

    private Map<String, String> shortToOriginal = new HashMap<>();
    private Map<String, String> originalToShort = new HashMap<>();
    private Random random = new Random();

    public String shortenURL(String originalURL) {
        if (originalToShort.containsKey(originalURL)) {
            return BASE_URL + originalToShort.get(originalURL);
        }

        String randomString = generateRandomString();
        String hashedString = hash(originalURL);

        String shortURL = randomString + hashedString.substring(0, RANDOM_STRING_LENGTH);
        shortToOriginal.put(shortURL, originalURL);
        originalToShort.put(originalURL, shortURL);

        return BASE_URL + shortURL;
    }

    private String generateRandomString() {
        StringBuilder randomString = new StringBuilder();
        for (int i = 0; i < RANDOM_STRING_LENGTH; i++) {
            char randomChar = (char) (random.nextInt(26) + 'a');
            randomString.append(randomChar);
        }
        return randomString.toString();
    }

    private String hash(String originalURL) {
        try {
            MessageDigest digest = MessageDigest.getInstance(HASH_ALGORITHM);
            byte[] hashBytes = digest.digest(originalURL.getBytes());

            StringBuilder hashString = new StringBuilder();
            for (byte b : hashBytes) {
                hashString.append(String.format("%02x", b));
            }

            return hashString.toString();
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException("Hashing algorithm not available.");
        }
    }

    public static void main(String[] args) {
        CombinedURLShortener urlShortener = new CombinedURLShortener();

        String originalURL1 = "https://www.example.com";
        String shortURL1 = urlShortener.shortenURL(originalURL1);
        System.out.println("Shortened URL 1: " + shortURL1);

        // Simulate a collision by trying to shorten the same URL again
        String shortURL2 = urlShortener.shortenURL(originalURL1);
        System.out.println("Shortened URL 2: " + shortURL2);

        // Expand and check if both short URLs point to the same original URL
        System.out.println("Expanded URL 1: " + urlShortener.expandURL(shortURL1));
        System.out.println("Expanded URL 2: " + urlShortener.expandURL(shortURL2));
    }

    private String expandURL(String shortURL) {
        String shortKey = shortURL.replace(BASE_URL, "");
        return shortToOriginal.getOrDefault(shortKey, "URL not found");
    }
}
