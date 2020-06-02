/**
 * @fileoverview Dijkstra's Algorithm
 * @author Colt_Steele Udemy
 **/

/**
 * Finds the shortest path between two vertices in a graph
 *
 * USES:
 * ✳ GPS - finding fastest route
 * ✳ Network Routing - find open shortest path for data
 * ✳ Biology - used to model spread of virus among humans
 * ✳ Airline Tickets - finding cheapest route to your destination
 */

//#region WEIGHTED GRAPH

class WeightedGraph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}

	addEdge(vertex1, vertex2, weight) {
		this.adjacencyList[vertex1].push({ node: vertex2, weight });
		this.adjacencyList[vertex2].push({ node: vertex1, weight });
	}

	/**
	 * DIJKSTRA'S ALGORITHM
	 * The Approach:
	 *
	 *      🔲 Every time we look o visit a new node,
	 *          we pick the node with smallest known distance to visit
	 *
	 *      🔲 Once we've moved to the node we're going to visit,
	 *          we look at each of its neighbours.
	 *
	 *      🔲 For each neighbouring node, we calculate the distance by summing total edges
	 *          that lead to that node we're checking from the starting node
	 *
	 *      🔲 If the new distance to a node is less than the previous total,
	 *          we store the new shorter distance for that node.
	 *
	 * @pseudocode
	 * The function shouldaccept a starting and ending vertex.
	 * Create an object (we'll call it distances) and set each key to be every vertex in
	 *   the adjacency list with a value of infinity except for the starting vertex,
	 *   which should have a value of 0.
	 * After setting the value in the distances object, add each vertex with a priority of Infinity
	 *   to the priority queue, except for the starting vertex, which should have a value of 0,
	 *   because thats where we begin.
	 * Create another object called previous and set each key to be every vertex in the adjacency list
	 *   with a value of null
	 * Start looping as long as there is anything in the priority queue:
	 *
	 *      🔲 Dequeue a vertex from the priority queue.
	 *      🔲 If that vertex is same as the ending vertex - we are done!
	 *      🔲 Otherwise loop through each value in the adjacency list at that vertex
	 *
	 *            🔳 Calculate distance to that vertex from the strating vertex
	 *            🔳 If the distance is less than what is currently being stored in our distances object
	 *                💠 update the distances object with new lower distance
	 *                💠 update the previous object to contain that vertex
	 *                💠 enqueue the vertex with total distance from the start node
	 */

	Dijkstra(start, finish) {
		const nodes = new PriorityQueue();
		const distances = {};
		const previous = {};
		let path = []; // to return at the end
		let smallest;

		// build up initial state
		for (let vertex in this.adjacencyList) {
			if (vertex === start) {
				distances[vertex] = 0;
				nodes.enqueue(vertex, 0);
			} else {
				distances[vertex] = Infinity;
				nodes.enqueue(vertex, Infinity);
			}
			previous[vertex] = null;
		}

		// As long as there is something to visit
		while (nodes.values.length) {
			smallest = nodes.dequeue().val;
			if (smallest === finish) {
				// WE ARE DONE
				// BUILD UP PATH TO RETURN AT THE END
				while (previous[smallest]) {
					path.push(smallest);
					smallest = previous[smallest];
				}
				break;
			}

			if (smallest && distances[smallest] !== Infinity) {
				for (let neighbour in this.adjacencyList[smallest]) {
					// Find neighbouring node
					let nextNode = this.adjacencyList[smallest][neighbour];
					// calculate the new distance to neighbour
					let candidate = distances[smallest] + nextNode.weight;
					let nextNeighbour = nextNode.node;
					if (candidate < distances[nextNeighbour]) {
						// Updating new smallest distance to neighbour
						distances[nextNeighbour] = candidate;
						// updating previous - How we got to neighbour
						previous[nextNeighbour] = smallest;
						// enqueue in priority queue with new priority
						nodes.enqueue(nextNeighbour, candidate);
					}
				}
			}
		}
		return path.concat(smallest).reverse();
	}
}

// A simple Priority Queue

class PriorityQueue {
	constructor() {
		this.values = [];
	}

	enqueue(val, priority) {
		this.values.push({ val, priority });
		this.sort();
	}

	dequeue() {
		return this.values.shift();
	}

	sort() {
		this.values.sort((a, b) => a.priority - b.priority);
	}
}

// 🐛 TESTING VALUES

let g = new WeightedGraph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');

g.addEdge('A', 'B', 9);
g.addEdge('A', 'C', 5);
g.addEdge('B', 'C', 7);

// 🐛 TESTING VALUES FOR DJIKSTRAS ALGORITHMS

var graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

graph.Dijkstra('A', 'E'); // ["A", "C", "D", "F", "E"]

//#endregion
