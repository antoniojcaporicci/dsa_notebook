/*
    const LinkedListNode = class {
        constructor(value) {
            this.value = value;
            this.next = null;
        }
    };
*/

function merge_k_lists(lists) {
    // lists is an array of n linked lists
    // linked lists are sorted

    // continue onto next list, start at top of lists[0]
    if (!lists.length) return lists

    let primaryList = lists[0]
    // iterate through lists
    for (let i = 1; i < lists.length; i++) {
        let mergeList = lists[i]
        while (mergeList !== null || primaryList !== null) {
            // while lists[i] is not null
            // if the primary value is greater
            // 
            if (primaryList.value > mergeList.value) {
                let temp = primaryList
                primaryList = mergeList
                primaryList.next = temp
                mergeList = mergeList.next
            } else {
                console.log('condition: ', primaryList, mergeList)
                let temp = primaryList.next
                primaryList.next = mergeList
                mergeList = temp
            }
        }
    }

    return primaryList
}


class ListNode {
    constructor(value, next) {
        this.value = (value === undefined ? 0 : value)
        this.next = (next === undefined ? null : next)
    }
}

const first = new ListNode(1)
first.next = new ListNode(2)
first.next.next = new ListNode(3)

const second = new ListNode(3)
second.next = new ListNode(4)
second.next.next = new ListNode(5)

console.log(merge_k_lists([first, second]))