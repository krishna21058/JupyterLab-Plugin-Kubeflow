import { listPipelines } from './kfpService';

describe('listPipelines', () => {
  it('should return a list of pipelines', async () => {
    const result = await listPipelines();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toHaveProperty('id');
    expect(result[0]).toHaveProperty('name');
  });
});
