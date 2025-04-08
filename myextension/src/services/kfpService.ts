// src/services/kfpService.ts
export interface Pipeline {
  id: string;
  name: string;
}

export async function listPipelines(): Promise<Pipeline[]> {
  // Simulate a delay and return mock data.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 'pipeline-1', name: 'Train Model' },
        { id: 'pipeline-2', name: 'Data Preprocessing' }
      ]);
    }, 500);
  });
}
