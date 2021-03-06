class SinglyLinkedList {
    head = null;
    tail = null;
    
    //FIXME:
    push = (node) => {
        if(head) {
            this.tail = this.tail.next = node;
        } 
        else {
            this.head = node;
            this.tail = node;
        }
    }
    
    //TODO:
    traverse = () => {
        
    }
    //TODO:
    pop = () => {
        
    }
    
}

class Node {
    next = null;
    constructor (val) {
        this.val = val;
    }
}