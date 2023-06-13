class Stack {
    constructor(val, stack) {
        this.top =
            this.collection = []
    }

    push = (val) => {
        setMin(val)

        return new Stack(val, this)
    }

    setMin = (val) => {
        if (val < this.min) {
            this.min = val
        }
    }

    getMin = () => {
        return this.min
    }

    pop = () => {
        this.top = this.next.top
        this.setMin(this.top())
        this.next = this.next.next
    }
}