export interface GraphNode {
  sha: string;
  lane: number;
  parents: string[];
}

export function layout(nodes: GraphNode[]): GraphNode[] {
  return nodes.map((node, index) => ({ ...node, lane: index % 2 }));
}
