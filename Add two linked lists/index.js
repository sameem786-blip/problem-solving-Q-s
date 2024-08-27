//https://leetcode.com/problems/add-two-numbers/description/

class ListNode {
  constructor(val = null, next = null) {
    this.val = val;
    this.next = next;
  }
}

const main = (A, B) => {
  let carry = 0;
  let dummyHead = new ListNode(0);
  let current = dummyHead;

  while (A !== null || B !== null) {
    let valA = A ? A.val : 0;
    let valB = B ? B.val : 0;

    let sum = valA + valB + carry;
    carry = Math.floor(sum / 10);
    let newVal = sum % 10;

    current.next = new ListNode(newVal);
    current = current.next;

    if (A) A = A.next;
    if (B) B = B.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return dummyHead.next;
};

const l1 = new ListNode(2, new ListNode(4, new ListNode(3))); // Represents 342
const l2 = new ListNode(5, new ListNode(6, new ListNode(4))); // Represents 465
const result = main(l1, l2);

console.log("Result :", result);
