// @ts-ignore
async function doSomethingAsync(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}

async function main() {
    try {
      const result = await doSomethingAsync();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  
  main();