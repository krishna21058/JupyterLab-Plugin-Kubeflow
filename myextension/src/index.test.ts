import plugin from './index';
import { JupyterFrontEnd } from '@jupyterlab/application';

describe('Kubeflow Plugin', () => {
  test('should be a valid plugin object', () => {
    expect(plugin.id).toBe('myextension:plugin');
    expect(typeof plugin.activate).toBe('function');
  });

  test('should activate without error', () => {
    const fakeApp = {
      commands: {
        addCommand: jest.fn()
      }
    } as unknown as JupyterFrontEnd;

    const fakePalette = {
      addItem: jest.fn()
    };

    expect(() => plugin.activate(fakeApp, fakePalette)).not.toThrow();
    expect(fakeApp.commands.addCommand).toHaveBeenCalled();
    expect(fakePalette.addItem).toHaveBeenCalled();
  });
});

