// src/KubeflowPanel.tsx
import * as React from 'react';

export interface Pipeline {
  id: string;
  name: string;
}

export interface KubeflowPanelProps {
  pipelines: Pipeline[];
}

export const KubeflowPanel: React.FC<KubeflowPanelProps> = ({ pipelines }) => {
  return (
    <div style={{ padding: '10px' }}>
      <h3>Kubeflow Pipelines</h3>
      {pipelines.length === 0 ? (
        <p>No pipelines found.</p>
      ) : (
        <ul>
          {pipelines.map((p) => (
            <li key={p.id}>{p.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
