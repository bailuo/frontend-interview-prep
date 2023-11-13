class UF {
    private treeParent: Array<number>;
    private treeCount: Array<number>;
    constructor(n) {
        //  initialize the forest
        this.treeParent = Array.from({ length: n }, (_, i) => i);
        // before we do anything to the forest, the depth of every tree is 1
        this.treeCount = new Array(n).fill(1);
    }

    get parent(): Array<number> {
        return this.treeParent;
    }

    get count(): Array<number> {
        return this.treeCount;
    }
    // find and path comparsion
    find(x): any {
        if (this.treeParent[x] !== x) this.treeParent[x] = this.find(this.treeParent[x]);
        return this.treeParent[x];
    }

    union(x, y): void {
        const xRoot = this.find(x);
        const yRoot = this.find(y);

        const xCount = this.treeCount[xRoot];
        const yCount = this.treeCount[yRoot];

        if (xRoot === yRoot) return; // tree root
        // merge the smaller tree the the root of the higher tree

        if (xCount < yCount) {
            this.treeParent[xRoot] = yRoot;
            this.treeCount[yRoot] += this.treeCount[xRoot];
        } else {
            this.treeParent[yRoot] = xRoot;
            this.treeCount[xRoot] += this.treeCount[yRoot];
        }
    }
}
