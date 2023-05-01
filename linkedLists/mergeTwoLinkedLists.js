/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// [1,3,4]
// [2,3,5]

// 1st iteration
// curr1 = [1, 2, 3, 5]
// curr2 = [3,4]

// 2nd iteration
// curr1 = [1,2,3,4]
// curr2 = [3,5]

// 3rd iteration
// curr1 = [1,2,3,3,5]
// curr2 = [4]

// 4th iteration
// 


function mergeTwoLists(list1, list2) {
    let currOne = list1
    let currTwo = list2
    
    console.log({ list1, list2 })
    if (!currOne && !currTwo) {
        return list1
    } else if (!currOne && currTwo) {
        return list2
    }

    while (currOne && currTwo) {
        if (currOne.val > currTwo.val) {
            currOne = currTwo
            currTwo = currOne.next
        } else if (currOne.val <= currTwo.val) {
            let temp = currOne.next
            currOne.next = currTwo
            currTwo = temp
            currOne = currOne.next
        }
    }

    return list1
};