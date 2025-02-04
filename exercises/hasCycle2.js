function ListNode(val) {
  this.val = val;
  this.next = null;
}

function createLinkedList(arr, cyclePos) {
  let head = new ListNode(0);
  let current = head;
  let cycleNode = null;

  arr.forEach((val, index) => {
    current.next = new ListNode(val);
    current = current.next;
    if (index === cyclePos) {
      cycleNode = current;
    }
  });

  if (cycleNode) {
    current.next = cycleNode;
  }

  return head.next;
}

function hasCycle(head) {
  let tortoise = head;
  let hare = head.next;
  while(hare !== null) {
    if(hare === tortoise) return true;
    if(!hare.next || !hare.next.next) return false;
    hare = hare.next.next;
    tortoise = tortoise.next;
  }
  return false;
}

let list1 = createLinkedList([3, 2, 0, -4], 1);
let list2 = createLinkedList([1, 2], 0);
let list3 = createLinkedList([1], -1);
let list4 = createLinkedList([10, 20, 30, 40, 50, 60], 3);
let list5 = createLinkedList([5, 15, 25, 35, 45], -1);

console.log(hasCycle(list1)) // true
console.log(hasCycle(list2)) // true
console.log(hasCycle(list3)) // false
console.log(hasCycle(list4)) // true
console.log(hasCycle(list5)) // false
