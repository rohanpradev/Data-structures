/**
 * @fileoverview Graphs
 * @author Colt_Steele Udemy
 **/

//#region DEFINITION

/**
 * @definition
 * A graph data structure consists of finite (and possibly mutable) set of vertices or nodes or points,
 * together with a set of unordered pairs of these vertices for a unidirected graph or a set of ordered pairs
 * for a directed graph.
 *
 * In simple terms:
 *
 *          Nodes
 *          +
 *          Connections 🔂
 *
 * @example
 *
 *                            A
 *                       ↗        ↖
 *                      B           E
 *                      |           |
 *                      C           F
 *                       ↖       ↗
 *                            D
 *
 *
 * Uses for Graphs:
 *  ✳ Social Networks
 *  ✳ Location / Mapping
 *  ✳ Routing Algorithms
 *  ✳ Visual Hierarchy
 *  ✳ File System Optimizations
 *
 */

//#endregion

//#region TERMINOLOGY AND TYPES OF MAPS

/**
 * Essential Graph terms:
 * ✳  Vertex - node
 * ✳  Edge - connection between nodes
 * ✳  Weighted/Unweighted - values assigned to distances between vertices.
 * ✳  Directed/Undirected - directions assigned to distances between vertices.
 *
 *                            A (vertex)
 *                       ↗        ↖ (edge)
 *                      B           E
 *                      |           |
 *                      C           F
 *                       ↖       ↗
 *                            D
 *
 * In an undirected graph there is no direction/polarity between the edges (e.g. A ↔ B can go from A to B or B to A)
 * In a directed graph there is a direction/polarity between the edges (e.g. A ➡  B can go from A to B not from B toA)
 *
 * If there is a value assocated with a edge then it is a weighted graph
 *
 *                      A
 *                  8 ↙   ↘ 10
 *                  ↙      ↘
 *                 B         E
 *
 * 🌐 in maps consider(weighted graph)
 *
 *                  90km
 *          🏢 --------------- 🏢
 *           |                 /  \    13km
 *    65km   |                /   🏢
 *           |              /      |
 *           |    120km   /       |
 *           |          /         |
 *           |        /          |
 *          🏢      /           |   40km
 *    19km    ↘   /             |
 *             🏢              |
 *       3km     ↘             |
 *                🏢 ------- 🏢
 *                     20km
 * */

//#endregion

//#region REPRESENTING A GRAPH

// Add Vertex Info

/**
 * @class Graph
 * makes use of adjacency list to implement a graph
 *
 * @see
 * We are building an undirected graph
 */

class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	/** @method addVertex
	 * This method accepts a name of the vertex.
	 * It should add a key to the adjacency list with the name of the vertex
	 * and set its value to be an empty array
	 *
	 * @param {any} vertex name of the vertex
	 */

	addVertex(vertex) {
		// Just a check for duplicates not needed actually
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}

	/** @method addEdge
	 * The method addEdge should accept two vertices, we can call them vertex1 and vertex2.
	 * The function should find in the adjacencyList the key of vertex1 and push vertex2 into that array.
	 * The function should find in the adjacencyList the key of vertex2 and push vertex1 into that array.
	 *
	 * @param vertex1
	 * @param vertex2
	 */

	addEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1].push(vertex2);
		this.adjacencyList[vertex2].push(vertex1);
	}

	/** @method removeEdge
	 * Removing an edge
	 * this function should accept two vertices, we'll call them vertex1 and vertex2.
	 * The function should reassign the key of vertex1 to be an array that does not contain vertex2.
	 * The function should reassign the key of vertex2 to be an array that does not contain vertex1.
	 *
	 * @param vertex1
	 * @param vertex2
	 */

	removeEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
			(v) => v !== vertex2
		);
		this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
			(v) => v !== vertex1
		);
	}

	/** @method removeVertex
	 * Removing a vertex
	 * this function should accept a vertex to remove.
	 * The function should loop as long as there are any other vertices in the adjacency List for that vertex.
	 * Inside of our loop call our removedEdge function with the vertex we are removing
	 * and any values in the adjacency list for that vertex
	 * delete the key in the adjacency list for that vertex.
	 *
	 * @param vertex
	 */

	removeVertex(vertex) {
		while (this.adjacencyList[vertex].length) {
			const v = this.adjacencyList[vertex].pop();
			this.removeEdge(vertex, v);
		}
		delete this.adjacencyList[vertex];
	}

	//#region GRAPH TRAVERSAL

	/**
	 * Graph traversal uses:
	 * 	✳ Peer to Peer networking
	 * 	✳ Web crawlers
	 * 	✳ Finding Closest
	 * 		matches / recommendations
	 * 	✳ Shortest path problems
	 * 		🔲 GPS Navigation
	 * 		🔲 Solving mazes
	 * 		🔲 AI (shortest path to win the game)
	 */

	/**
	 * DEPTH FIRST
	 * Explore as far as possible down one branch before "backtracking"
	 */

	/**
	 * RECURSIVE SOLUTION
	 *
	 * @pseudocode
	 * DFS(vertex):
	 * 	if vertex is empty;
	 * 		return (this is base case)
	 * 	add vertex to results list
	 * 	mark verted as visited
	 * 	for each neighbour in vertex's neighbour's:
	 * 		if neighbour is not visited:
	 * 			recursively call DFS on neighbour
	 *
	 *
	 * @explanation
	 * The function should accept a starting vertex
	 * Create a list to store the end result, to be returned at the very end
	 * Create an object to store the visited verticed
	 * Create a helper function which accepts a vertex
	 * 		🔲 The helper function should return early if the vertex is empty
	 * 		🔲 The helper function should place the vertex it accepts into the visited object
	 * 			and push that vertex into the result array.
	 * 		🔲 Loop over all the values in the adjacency list for that vertex
	 * 		🔲 If any of those values have not been visited,
	 * 			recursively invoke helper function with that vertex
	 */

	depthFirstRecursive(vertex) {
		const results = [];
		const visited = {};
		const adjacencyList = this.adjacencyList;

		(function dfs(v) {
			if (!v) return;
			visited[v] = true;
			results.push(v);
			for (let neighbour of adjacencyList[v]) {
				if (!visited[neighbour]) return dfs(neighbour);
			}
		})(vertex);
		return results;
	}

	/**
	 * ITERATIVE SOLUTION
	 *
	 * @pseudocode
	 * DFS-iterative(vertex):
	 * 	let S be a stack
	 * 	S.push(vertex)
	 * 		while S is not empty
	 * 			v = S.pop()
	 *			if v is not labelled as discovered:
	 *				 visit vertex (add to results list)
	 *				 label vertex as discovered
	 *				 for each v's neighbours, N do
	 *				 	S.push(N)
	 *
	 * @explanation
	 * The function should accept a starting vertex
	 * Create a stack to help use keep track of vertices(use list/array)
	 * Create a list to store the end result, to be returned at the very end
	 * Create an object to store the visited vertices.
	 * Add the starting vertex to the stack, mark it as visited
	 * While stack has something in it:
	 * 		🔲 Pop the next vertex from the stack
	 * 		🔲 If that vertex has'nt been visited yet:
	 * 			🔳  Mark it as visited
	 * 			🔳  Add it to the result list
	 * 			🔳  Push all of its neighbours into the stack
	 */

	depthFirstIterative(vertex) {
		const stack = [vertex];
		const result = [];
		const visited = {};

		visited[vertex] = true;

		while (stack.length) {
			let currentVertex = stack.pop();
			result.push(currentVertex);

			for (let neighbour of this.adjacencyList[currentVertex]) {
				if (!visited[neighbour]) {
					visited[neighbour] = true;
					stack.push(neighbour);
				}
			}
		}
		return result;
	}

	/**
	 * BFS
	 * The function should accept a starting vertex
	 * Create a queue(use list/array) and place the starting vertex in it.
	 * Create an array to store the vertices visited.
	 * Create an object to store the visited vertices.
	 * Mark the starting vertex as visited
	 * Loop as long as there is anything in the queue:
	 * Remove the first vertex from the queue and push it into the array that stores visited vertices
	 * Loop over each neighbour in the adjacency list for the vertex you are visiting.
	 * If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex.
	 */

	breadthFirstSearch(vertex) {
		const queue = [vertex];
		const visited = {};
		const result = [];

		visited[vertex] = true;

		while (queue.length) {
			let currentVertex = queue.shift();
			result.push(currentVertex);

			this.adjacencyList[currentVertex].forEach((neighbour) => {
				if (!visited[neighbour]) {
					visited[neighbour] = true;
					queue.push(neighbour);
				}
			});
		}
		return result;
	}

	//#endregion
}

// 🐛 TESTING VALUES

let g = new Graph();
g.addVertex('Dallas');
g.addVertex('Tokyo');
g.addVertex('Aspen');
g.addVertex('Los Angeles');
g.addVertex('Hong Kong');

g.addEdge('Tokyo', 'Dallas');
g.addEdge('Dallas', 'Aspen');
g.addEdge('Hong Kong', 'Tokyo');
g.addEdge('Hong Kong', 'Los Angeles');
g.addEdge('Los Angeles', 'Aspen');

// 🐛 TESTING VALUES DFS RECURSIVE

let g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');
g.depthFirstRecursive('A');  // ["A", "B", "D", "E", "C"]
g.depthFirstIterative('A');  // ["A", "C", "E", "F", "D", "B"]
g.breadthFirstSearch('A');  // ["A", "B", "C", "D", "E", "F"]

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

//#endregion
