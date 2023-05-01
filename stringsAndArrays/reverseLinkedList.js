/**
 * Definition for singly-linked list.
*/
class ListNode {
    constructor(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function reverseList(head) {
    // create a queue of all the values in the list
    // when the node.next value equals null, set the curr.next to queue.shift
    
    let queue = []
    let curr = head

    while (curr.val) {
        queue.push(curr.val)
        curr = curr.next
    }

    let reversedCurr = head
    reversedCurr.val = queue.shift()

    while (queue.length) {
        let val = queue.shift()
        while (reversedCurr.val) {
            reversedCurr = reversedCurr.next
        }
        reversedCurr.val = val
    }

    return reversedCurr
};