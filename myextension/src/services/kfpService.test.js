// src/services/kfpService.test.ts
import { listPipelines } from './kfpService';
test('listPipelines returns mock pipelines', async () => {
    const pipelines = await listPipelines();
    expect(pipelines.length).toBeGreaterThan(0);
    expect(pipelines[0]).toHaveProperty('id');
    expect(pipelines[0]).toHaveProperty('name');
});
//# sourceMappingURL=kfpService.test.js.map