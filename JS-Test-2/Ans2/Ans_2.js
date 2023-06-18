function ListNode(val, next) {
  this.val = val || 0;
  this.next = next || null;
}

function addTwoNumbers(l1, l2) {
  const dummy = new ListNode();
  let curr = dummy;
  let carry = 0;

  while (l1 || l2 || carry) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;
    const sum = val1 + val2 + carry;

    carry = Math.floor(sum / 10);
    const remainder = sum % 10;

    curr.next = new ListNode(remainder);
    curr = curr.next;

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return dummy.next;
}

// Example 1
const l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);
console.log("Example 1: ");
let result = addTwoNumbers(l1, l2);
while (result) {
  console.log(result.val);
  result = result.next;
}

// Example 2
const l3 = new ListNode(0);
const l4 = new ListNode(0);
console.log("Example 2:");
result = addTwoNumbers(l3, l4);
while (result) {
  console.log(result.val);
  result = result.next;
}

// Example 3
const l5 = new ListNode(9);
l5.next = new ListNode(9);
l5.next.next = new ListNode(9);
l5.next.next.next = new ListNode(9);
l5.next.next.next.next = new ListNode(9);
l5.next.next.next.next.next = new ListNode(9);
l5.next.next.next.next.next.next = new ListNode(9);

const l6 = new ListNode(9);
l6.next = new ListNode(9);
l6.next.next = new ListNode(9);
l6.next.next.next = new ListNode(9);
console.log("Example 3:");
result = addTwoNumbers(l5, l6);
while (result) {
  console.log(result.val);
  result = result.next;
}
