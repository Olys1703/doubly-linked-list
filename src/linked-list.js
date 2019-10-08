const Node = require('./node');

class LinkedList {
    constructor() {
        this.myList = []
    }

    append(data) {
        this.myList.push(new Node(data))
        return this
    }

    head() {
        if (this.myList.length != 0) {return this.myList[0].data}
        else {return null}
    }

    tail() {
        if (this.myList.length != 0) {return this.myList[this.myList.length - 1].data}
        else {return null}
    }

    at(index) {
        if (this.myList.length != 0 && index>=0 && index<this.myList.length) {return this.myList[index].data}
        else {return null}
    }

    insertAt(index, data) {
        this.myList.splice(index, 0, new Node(data))
    }

    isEmpty() {
        return this.myList.length == 0
    }

    clear() {
        this.myList.length = 0
        return this
    }

    deleteAt(index) {
        this.myList.splice(index, 1)
        return this
    }

    reverse() {
        this.myList.reverse()
        return this
    }

    indexOf(data) {
        for (let index = 0; index < this.myList.length; index++) {
            if(this.myList[index].data == data) return index
        }
        return -1
    }
    //bc myList get underfined vice 0
    get length() {
        return this.myList.length
    }
    // like any
    get _tail() {
        return this.myList[this.myList.length - 1];
    }
    get _head() {
        return this.myList[0];
    }

}

module.exports = LinkedList;
