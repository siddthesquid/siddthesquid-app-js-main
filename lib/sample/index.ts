console.log("hello")

function sleep(time: any) {
  const stop = new Date().getTime()
  while (new Date().getTime() < stop + time) {}
}

// const doSomething = async () => {
//   const p = new Promise(() => {
//     setTimeout(() => console.log("A"), 1000)
//   })
//   const q = new Promise(() => {
//     sleep(5000)
//     console.log("B")
//   })
//   await q
//   await p
// }

// doSomething()

Promise.race([
  new Promise((resolve) => {
    sleep(1000)
  resolve("A")
 }),
  new Promise(() => {
    sleep(100)
    return "B"
  }),
  new Promise(() => {
    sleep(10)
    return "C"
  }),
]).then(console.log)
