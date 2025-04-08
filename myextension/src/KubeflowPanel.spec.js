// src/KubeflowPanel.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { KubeflowPanel } from './KubeflowPanel';
test('renders pipeline list correctly', () => {
    const pipelines = [
        { id: '1', name: 'Pipeline 1' },
        { id: '2', name: 'Pipeline 2' },
    ];
    render(React.createElement(KubeflowPanel, { pipelines: pipelines }));
    expect(screen.getByText('Kubeflow Pipelines')).toBeInTheDocument();
    expect(screen.getByText('Pipeline 1')).toBeInTheDocument();
    expect(screen.getByText('Pipeline 2')).toBeInTheDocument();
});
//# sourceMappingURL=KubeflowPanel.spec.js.map
