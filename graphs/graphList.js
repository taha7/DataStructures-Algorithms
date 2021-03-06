class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    removeVertex(vertex) {
        this.adjacencyList[vertex].forEach((adjacency) => {
            this.removeEdge(vertex, adjacency);
        });

        delete this.adjacencyList[vertex];
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1);
        }

        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }

        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
                (adjacency) => adjacency != vertex2
            );
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
                (adjacency) => adjacency != vertex1
            );
        }
    }
}
