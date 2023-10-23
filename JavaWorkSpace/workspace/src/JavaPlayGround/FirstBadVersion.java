package JavaPlayGround;

class VersionControl {
    public boolean isBadVersion(int n) {
        return true;
    }
};

/*
 * The isBadVersion API is defined in the parent class VersionControl.
 * boolean isBadVersion(int version);
 */

public class FirstBadVersion extends VersionControl {
    public int firstBadVersion(int n) {
        // need to apply binary search to find the first bad version
        int l = 1;
        int r = n;
        int badVersion = n;
        while (l <= r) {
            int mid = l + (r - l) / 2;
            if (this.isBadVersion(mid)) {
                // badVersion = Math.min(badVersion, mid);
                badVersion = mid; // Update the first bad version found

                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return badVersion;
    }
}