package JavaPlayGround;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Map;

public class DaysBetweenDates {

    private static final Map<Integer, Integer> MONTHS_DAYS_COUNT = Map.ofEntries(
            Map.entry(2, 28),
            Map.entry(4, 30),
            Map.entry(6, 30),
            Map.entry(9, 30),
            Map.entry(11, 30),
            Map.entry(1, 31),
            Map.entry(3, 31),
            Map.entry(5, 31),
            Map.entry(7, 31),
            Map.entry(8, 31),
            Map.entry(10, 31),
            Map.entry(12, 31));

    private static boolean isLeapYear(int year) {
        return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
    }

    private static int calculateDaysFrom1900(String date) {
        int daysInYear = 0;
        int daysInMonth = 0;

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate parsedDate = LocalDate.parse(date, formatter);

        int dateYear = parsedDate.getYear();
        int dateMonth = parsedDate.getMonthValue();

        for (int year = 1900; year < dateYear; year++) {
            daysInYear += isLeapYear(year) ? 366 : 365;
        }

        for (int month = 1; month < dateMonth; month++) {
            if (month == 2 && isLeapYear(dateYear)) {
                daysInMonth += 29; // February in a leap year
            } else {
                daysInMonth += MONTHS_DAYS_COUNT.get(month);
            }
        }

        return daysInYear + daysInMonth + parsedDate.getDayOfMonth();
    }

    public int daysBetweenDates(String date1, String date2) {
        return Math.abs(calculateDaysFrom1900(date1) - calculateDaysFrom1900(date2));
    }

    public static void main(String[] args) {
        System.out.println(new DaysBetweenDates().daysBetweenDates("2009-08-18", "2080-08-08"));
    }
}
