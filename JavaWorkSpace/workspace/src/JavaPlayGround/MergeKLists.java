package JavaPlayGround;

import java.util.ArrayList;

public class MergeKLists {

    public ListNode mergeKLists1(ListNode[] lists) {
        if (lists.length == 0)
            return null;

        while (lists.length > 1) {
            ListNode[] mergedLists = new ListNode[(lists.length + 1) / 2];

            for (int i = 0; i < lists.length; i += 2) {
                ListNode list1 = lists[i];
                ListNode list2 = (i + 1 < lists.length) ? lists[i + 1] : null;
                mergedLists[i / 2] = mergeTwoLists(list1, list2);
            }

            lists = mergedLists;
        }

        return lists[0];
    }

    public ListNode mergeKLists(ListNode[] lists) {
        if (lists.length == 0)
            return null;
            
        while (lists.length > 1) {
            ArrayList<ListNode> mergedLists = new ArrayList<>();

            for (int i = 0; i < lists.length; i += 2) {
                ListNode list1 = lists[i];
                ListNode list2 = (i + 1 < lists.length) ? lists[i + 1] : null;
                mergedLists.add(mergeTwoLists(list1, list2));
            }
            lists = mergedLists.toArray(new ListNode[mergedLists.size()]);
        }

        return lists[0];
    }

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
