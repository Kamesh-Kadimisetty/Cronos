'use client';
import AnimatedEdge from './AnimatedEdge';
import React from 'react';
import ReactFlow, {
  Handle,
  Position,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { Binoculars, ScanEye, MapPin, Bot } from 'lucide-react';

const edgeTypes = {
  animated: AnimatedEdge,
};

// Custom node component with no visible handles
const CustomNode = ({ data }) => {
  return (
    <div style={data.nodeStyle}>
      {data.label}
      <Handle
        type="source"
        position={Position.Right}
        style={{
          opacity: 0,
          pointerEvents: 'none',
        }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="right-top"
        style={{
          opacity: 0,
          pointerEvents: 'none',
          top: '30%',
        }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="right-bottom"
        style={{
          opacity: 0,
          pointerEvents: 'none',
          top: '70%',
        }}
      />
      <Handle
        type="source"
        position={Position.Top}
        id="top"
        style={{
          opacity: 0,
          pointerEvents: 'none',
        }}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="bottom"
        style={{
          opacity: 0,
          pointerEvents: 'none',
        }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="left"
        style={{
          opacity: 0,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};

const nodeTypes = {
  custom: CustomNode,
};

const initialNodes = [
  {
    id: 'Cameras & Sensors',
    type: 'custom',
    position: { x: 2, y: 225 },
    draggable: false,
    data: { 
      label: (
        <div className="px-8 py-4 text-white font-semibold text-xl">
          Cameras & Sensors
        </div>
      ),
      nodeStyle: {
        background: '#1a1a1a',
        border: '1px solid #333',
        borderRadius: '12px',
        padding: 0,
        width: 180,
      }
    },
  },
  {
    id: 'CRONOS',
    type: 'custom',
    position: { x: 300, y: 239 },
    draggable: false,
    data: { 
      label: (
        <div className="px-8 py-4 text-white font-semibold text-xl">
          CRONOS
        </div>
      ),
      nodeStyle: {
        background: '#1a1a1a',
        border: '1px solid #333',
        borderRadius: '12px',
        padding: 0,
        width: 180,
      }
    },
  },
  {
    id: 'live-surveillance',
    type: 'custom',
    position: { x: 500, y: 50 },
    draggable: false,
    data: { 
      label: (
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <Binoculars className="w-4 h-4" />
          <span>Live Surveillance</span>
          <span className="w-2 h-2 rounded-full bg-green-500 blink-dot"></span>
        </div>
      ),
      nodeStyle: {
        background: '#1a1a1a',
        border: '1px solid #333',
        borderRadius: '8px',
        padding: '8px 16px',
      }
    },
  },
  {
    id: 'ai-monitoring',
    type: 'custom',
    position: { x: 560, y: 150 },
    draggable: false,
    data: { 
      label: (
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <ScanEye className="w-4 h-4" />
          <span>AI Monitoring</span>
          <span className="w-2 h-2 rounded-full bg-blue-500 blink-dot"></span>
        </div>
      ),
      nodeStyle: {
        background: '#1a1a1a',
        border: '1px solid #333',
        borderRadius: '8px',
        padding: '8px 16px',
      }
    },
  },
  {
    id: 'site-management',
    type: 'custom',
    position: { x: 560, y: 350 },
    draggable: false,
    data: { 
      label: (
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <MapPin className="w-4 h-4" />
          <span>Site Management</span>
          <span className="w-2 h-2 rounded-full bg-yellow-500 blink-dot"></span>
        </div>
      ),
      nodeStyle: {
        background: '#1a1a1a',
        border: '1px solid #333',
        borderRadius: '8px',
        padding: '8px 16px',
      }
    },
  },
  {
    id: 'ai-agents',
    type: 'custom',
    position: { x: 500, y: 450 },
    draggable: false,
    data: { 
      label: (
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <Bot className="w-4 h-4" />
          <span>AI Agents</span>
          <span className="w-2 h-2 rounded-full bg-purple-500 blink-dot"></span>
        </div>
      ),
      nodeStyle: {
        background: '#1a1a1a',
        border: '1px solid #333',
        borderRadius: '8px',
        padding: '8px 16px',
      }
    },
  },
  {
    id: 'application',
    type: 'custom',
    position: { x: 850, y: 220 },
    draggable: false,
    data: { 
      label: (
        <div className="flex flex-col items-center justify-center gap-2 text-white">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="3" y="3" width="7" height="7" strokeWidth="2"/>
            <rect x="14" y="3" width="7" height="7" strokeWidth="2"/>
            <rect x="3" y="14" width="7" height="7" strokeWidth="2"/>
            <rect x="14" y="14" width="7" height="7" strokeWidth="2"/>
          </svg>
          <span className="font-semibold">Application</span>
        </div>
      ),
      nodeStyle: {
        background: '#1a1a1a',
        border: '1px solid #333',
        borderRadius: '12px',
        padding: 20,
        width: 180,
        height: 100,
      }
    },
  },
];

const initialEdges = [
  {
    id: 'e1-2',
    source: 'Cameras & Sensors',
    target: 'CRONOS',
    type: 'animated',
    style: { stroke: '#666', strokeWidth: 2 },
    data: { delay: 0, duration: 1.0, repeatDelay: 2.5 }, // Phase 1: Total cycle = 3.5s
  },
  {
    id: 'e2-3',
    source: 'CRONOS',
    target: 'live-surveillance',
    type: 'animated',
    sourceHandle: 'top',
    targetHandle: 'left',
    style: { stroke: '#666', strokeWidth: 2 },
    data: { delay: 1.0, duration: 0.8, repeatDelay: 2.7 }, // Phase 2: Start when first spark reaches CRONOS, Total cycle = 3.5s
  },
  {
    id: 'e2-4',
    source: 'CRONOS',
    target: 'ai-monitoring',
    type: 'animated',
    sourceHandle: 'right-top',
    targetHandle: 'left',
    style: { stroke: '#666', strokeWidth: 2 },
    data: { delay: 1.0, duration: 0.8, repeatDelay: 2.7 }, // Phase 2: Simultaneous with other 4 sparks, Total cycle = 3.5s
  },
  {
    id: 'e2-5',
    source: 'CRONOS',
    target: 'site-management',
    type: 'animated',
    sourceHandle: 'right-bottom',
    targetHandle: 'left',
    style: { stroke: '#666', strokeWidth: 2 },
    data: { delay: 1.0, duration: 0.8, repeatDelay: 2.7 }, // Phase 2: Simultaneous with other 4 sparks, Total cycle = 3.5s
  },
  {
    id: 'e2-6',
    source: 'CRONOS',
    target: 'ai-agents',
    type: 'animated',
    sourceHandle: 'bottom',
    targetHandle: 'left',
    style: { stroke: '#666', strokeWidth: 2 },
    data: { delay: 1.0, duration: 0.8, repeatDelay: 2.7 }, // Phase 2: Simultaneous with other 4 sparks, Total cycle = 3.5s
  },
  {
    id: 'e2-7',
    source: 'CRONOS',
    target: 'application',
    type: 'animated',
    style: { stroke: '#666', strokeWidth: 2 },
    data: { delay: 1.0, duration: 0.8, repeatDelay: 2.7 }, // Phase 2: Simultaneous with other 4 sparks, Total cycle = 3.5s
  },
];

export function Flow() {
  return (
    <div className="w-full py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-foreground mb-6">How it works</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            CRONOS seamlessly integrates your cameras and sensors with powerful AI processing 
            to deliver real-time insights and intelligent monitoring across your sites
          </p>
        </div>
        
        <div style={{ width: '100%', height: '600px', position: 'relative' }}>
          <ReactFlow
            nodes={initialNodes}
            edges={initialEdges}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            nodesDraggable={false}
            nodesConnectable={false}
            nodesFocusable={false}
            edgesFocusable={false}
            elementsSelectable={false}
            panOnDrag={false}
            zoomOnScroll={false}
            zoomOnPinch={false}
            zoomOnDoubleClick={false}
            preventScrolling={false}
            fitView
            fitViewOptions={{
              padding: 0.2,
              includeHiddenNodes: false,
            }}
            style={{
              background: 'transparent',
            }}
          />
        </div>
      </div>
    </div>
  );
}