package JavaPlayGround;

public class ReorderList {
    public void reorderList(ListNode head) {
        // first split the list into 2 parts, 1th part and 2nd part(reversed)
        // Then start the merge operation between the two parts.

        // start splitting by slow and fast pointers to reach half of the list
        ListNode fast = head, slow = head;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        ListNode part1 = head;
        ListNode part2 = slow.next;

        // start reversing the 2nd part of the list
        ListNode prev = slow.next = null, next = part2;

        while (next != null) {
            ListNode temp = next.next;
            next.next = prev;
            prev = next;
            next = temp;
        }

        // merge 2 parts now
        part2 = prev; // prev is the head of of reversed list
        while (part2 != null) {
            ListNode temp1 = part1.next;
            ListNode temp2 = part2.next;

            part1.next = part2;
            part2.next = temp1;

            part1 = temp1;
            part2 = temp2;
        }

    }
}
