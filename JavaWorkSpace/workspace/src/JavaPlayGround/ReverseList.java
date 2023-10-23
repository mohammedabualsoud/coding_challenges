package JavaPlayGround;

public class ReverseList {
    public ListNode reverseList(ListNode head) {
        ListNode prev = null, current = head;

        while (current != null) {
            ListNode next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        return prev;
    }

    public ListNode reverseListRec(ListNode head) {
        return rev(head, null);
    }

    public ListNode rev(ListNode node, ListNode pre) {
        if (node == null)
            return pre;
        ListNode temp = node.next;
        node.next = pre;
        return rev(temp, node);
    }

}
