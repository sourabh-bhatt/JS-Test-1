const l3 = new ListNode(0);
const l4 = new ListNode(0);

result = addTwoNumbers(l3, l4);
while (result) {
  console.log(result.val);
  result = result.next;
}