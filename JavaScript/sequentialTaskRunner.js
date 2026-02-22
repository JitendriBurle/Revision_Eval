function sequentialTaskRunner(tasks, delay) {
  const results = [];

  return new Promise((resolve, reject) => {
    try {
      tasks.forEach(async (task) => {
        const result = await task();
        results.push(result);

        await new Promise(res => setTimeout(res, delay));
      });

      resolve(results);
    } catch (err) {
      reject(err);
    }
  })
}