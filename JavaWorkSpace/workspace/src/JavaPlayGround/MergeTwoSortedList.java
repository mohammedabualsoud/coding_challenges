package JavaPlayGround;

public class MergeTwoSortedList {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        // a b
        ListNode dummy = new ListNode();
        ListNode first = list1, second = list2;
        ListNode head = dummy;
        while (first != null && second != null) {
            if (first.val <= second.val) {
                head.next = first;
                head = first;
                first = first.next;

            } else {
                head.next = second;
                head = second;
                second = second.next;
            }
        }

        if (first != null) {
            head.next = first;
        } else if (second != null) {
            head.next = second;
        }

        return dummy.next;
    }
}
