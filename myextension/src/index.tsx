// src/index.ts
import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import { ICommandPalette, MainAreaWidget, ReactWidget } from '@jupyterlab/apputils';
import React from 'react';
import { KubeflowPanel, Pipeline } from './KubeflowPanel';
import { listPipelines } from './services/kfpService';

/**
 * A ReactWidget to wrap the KubeflowPanel component.
 */
class KubeflowReactWidget extends ReactWidget {
  private pipelines: Pipeline[];

  constructor(pipelines: Pipeline[]) {
    super();
    this.pipelines = pipelines;
    this.addClass('myextension-KubeflowWidget');
  }

  render(): JSX.Element {
    return <KubeflowPanel pipelines={this.pipelines} />;
  }
}

/**
 * Initialization data for the myextension extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'myextension:plugin',
  description: 'A JupyterLab extension for Kubeflow integration.',
  autoStart: true,
  requires: [ICommandPalette],
  activate: async (app: JupyterFrontEnd, palette: ICommandPalette) => {
    console.log('Kubeflow Plugin activated');

    const command = 'kubeflow:open-panel';
    app.commands.addCommand(command, {
      label: 'Open Kubeflow Pipelines Panel',
      execute: async () => {
        const pipelines = await listPipelines();
        const content = new KubeflowReactWidget(pipelines);
        const widget = new MainAreaWidget({ content });
        widget.title.label = 'Kubeflow Pipelines';
        app.shell.add(widget, 'main');
      }
    });

    palette.addItem({ command, category: 'Kubeflow' });
  }
};

export default plugin;
