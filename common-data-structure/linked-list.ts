interface ListNode {
    value: number;
    next: ListNode | null;
    pre?: ListNode | null;
}


function createListNode( value: number, next?: ListNode | null, pre?: ListNode | null ): ListNode {
    let n: ListNode = { value: 0, next: null}
    n.value = value;
    if(next ){
        n.next = next;    
    }
    if(pre) {
        n.pre = pre;
    }
    return n;
}

class LinkedList {
    value: number;
    constructor(value: number) {
        this.value = value;
    }
    insert(list: ListNode, node: ListNode):void {
        if(!list){
            return;
        }
        let curr: ListNode | null = list;
        while(curr.next) {
            curr = curr.next;
        }
        curr.next = node;
    }
    search(value: number, list: ListNode | null): ListNode | null {
        if(!list) {
            console.log('List is empty, no elements was found...');
        }
        let curr: ListNode | null = list;
        while(curr) {
            if(curr.value === value){
                return curr;
            }
            curr = curr.next;
        }
        return null;
    }
    reverse(list: ListNode) {
    }
}
 
const l = new LinkedList(3);
