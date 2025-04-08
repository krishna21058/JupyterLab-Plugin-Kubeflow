// src/KubeflowPanel.tsx
import * as React from 'react';
export const KubeflowPanel = ({ pipelines }) => {
    return (React.createElement("div", { style: { padding: '10px' } },
        React.createElement("h3", null, "Kubeflow Pipelines"),
        pipelines.length === 0 ? (React.createElement("p", null, "No pipelines found.")) : (React.createElement("ul", null, pipelines.map((p) => (React.createElement("li", { key: p.id }, p.name)))))));
};
//# sourceMappingURL=KubeflowPanel.js.map