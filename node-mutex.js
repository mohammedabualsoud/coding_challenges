let mutex = Promise.resolve(); // global mutex instance

// Utility function to simulate some delay (e.g. reading from or writing to a database).
// It will take from 0 to 50ms in a random fashion.
const randomDelay = () =>
  new Promise((resolve) => setTimeout(resolve, Math.random() * 3000));

// Our global balance.
// In a more complete implementation, this will live in the persistent data storage.
let balance = 0;

async function loadBalance() {
  // simulates random delay to retrieve data from data storage
  await randomDelay();
  return balance;
}

async function saveBalance(value) {
  // simulates random delay to write the data to the data storage
  await randomDelay();
  balance = value;
}

async function sellGrapes() {
  mutex = mutex
    .then(async () => {
      const balance = await loadBalance();
      console.log(`sellGrapes - balance loaded: ${balance}`);
      const newBalance = balance + 50;
      await saveBalance(newBalance);
      console.log(`sellGrapes - balance updated: ${newBalance}`);
    })
    .catch(() => {});
  console.log("sellGrapes", mutex);

  return mutex;
}

async function sellOlives() {
  mutex = mutex
    .then(async () => {
      const balance = await loadBalance();
      console.log(`sellOlives - balance loaded: ${balance}`);
      const newBalance = balance + 50;
      await saveBalance(newBalance);
      console.log(`sellOlives - balance updated: ${newBalance}`);
    })
    .catch(() => {});
  console.log("sellOlives", mutex);

  return mutex;
}

async function main() {
  await Promise.all([
    sellGrapes(),
    sellOlives(),
    sellGrapes(),
    sellOlives(),
    sellGrapes(),
    sellOlives(),
  ]);
  const balance = await loadBalance();
  console.log(`Final balance: ${balance}`);
}

main();
