export async function listPipelines() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 'pipeline-1', name: 'Train Model' },
                { id: 'pipeline-2', name: 'Data Preprocessing' }
            ]);
        }, 500);
    });
}
//# sourceMappingURL=kfpService.js.map
