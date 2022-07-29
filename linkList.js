class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SingleList {
  constructor(head) {
    this.head = head;
  }

  add(value) {
    let ptr = this.head;
    while (ptr.next) {
      ptr = ptr.next;
    }
    ptr.next = new Node(value);
  }
  remove(value) {
    let ptr = this.head;
    let previous = ptr;
    let found = false;
    while (ptr) {
      if (ptr.value === value) {
        found = true;
        previous.next = ptr.next;
        delete ptr;
        break;
      }
      ptr = ptr.next;
      previous = ptr;
    }

    return true;
  }
}
