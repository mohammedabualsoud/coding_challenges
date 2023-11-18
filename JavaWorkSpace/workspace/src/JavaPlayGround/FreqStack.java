package JavaPlayGround;

import java.util.HashMap;
import java.util.Stack;

class FreqStack {

    private HashMap<Integer, Integer> counts;
    private int maxFreq;
    private HashMap<Integer, Stack<Integer>> stacks;

    public FreqStack() {
        this.counts = new HashMap<>();
        this.maxFreq = 0;
        this.stacks = new HashMap<Integer, Stack<Integer>>();
    }

    public void push(int val) {
        this.counts.put(val, 1 + this.counts.getOrDefault(val, 0));
        int valCount = this.counts.get(val);

        if (valCount > this.maxFreq) {
            this.maxFreq = valCount;
            this.stacks.put(valCount, new Stack<>());
        }

        this.stacks.get(valCount).push(val);
    }

    public int pop() {
        int item = this.stacks.get(this.maxFreq).pop();

        this.counts.put(item, this.counts.get(item) - 1);

        if (this.stacks.get(this.maxFreq).isEmpty()) {
            this.maxFreq--;
        }

        return item;

    }
}