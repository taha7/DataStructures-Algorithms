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

    dfsVisitRec(startingVertex) {
        const visited = {};

        function visit(vertex) {
            if (!vertex) {
                return null;
            }

            visited[vertex] = true;

            this.adjacencyList[vertex].forEach((adjacency) => {
                if (!visited[adjacency]) {
                    visit(adjacency);
                }
            });
        }
        visit = visit.bind(this);
        visit(startingVertex);

        return Object.keys(visited);
    }

    dfsVisitIterative(start) {
        let visited = {};
        let stack = [start];
        while (stack.length) {
            let vertex = stack.pop();

            if (!visited[vertex]) {
                visited[vertex] = true;
                this.adjacencyList[vertex].forEach((adjacency) => {
                    stack.push(adjacency);
                });
            }
        }

        return Object.keys(visited);
    }

    bfsVisitIterative(start) {
      
    }
}

const g = new Graph();

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.dfsVisitIterative("A"));
