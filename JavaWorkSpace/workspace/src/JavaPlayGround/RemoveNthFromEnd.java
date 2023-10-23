package JavaPlayGround;

public class RemoveNthFromEnd {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode slow = head, fast = head;
        int move = 0;

        while (fast.next != null) {
            fast = fast.next;
            if (move == n) {
                slow = slow.next;
                move = 0;
            }
            move++;
        }

        if (slow != null && slow.next != null)
            slow.next = slow.next.next;

        return head;
    }
}
