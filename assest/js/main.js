// Creating a queue class
class Queue {
    constructor() {
      this.items = [];
    }
  
    // Enqueue element to the queue
    enqueue(element) {
      this.items.push(element);
    }
  
    // Dequeue element from the queue
    dequeue() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.shift();
    }
  
    // Peek at the front element of the queue
    front() {
      if (this.isEmpty()) {
        return "No elements in Queue";
      }
      return this.items[0];
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Print the queue elements
    printQueue() {
      let str = "";
      for (let i = 0; i < this.items.length; i++) {
        str += this.items[i] + " ";
      }
      return str;
    }
  }
  
  // Example usage of the queue class
//   const queue = new Queue();
//   console.log(queue.isEmpty()); // true
//   queue.enqueue(10);
//   queue.enqueue(20);
//   queue.enqueue(30);
//   console.log(queue.printQueue()); // 10 20 30
//   console.log(queue.front()); // 10
//   console.log(queue.dequeue()); // 10
//   console.log(queue.printQueue()); // 20 30
  
const requestApiQueue = new Queue();
let isproccesad = false;

const generateRequestData = ()=>{
    let userId =Math.ceil(Math.random()*10) ;
    // console.log((userId))
    requestApiQueue.enqueue(userId);
    // console.log(requestApiQueue)
    sendApiRequest()
}

  const sendApiRequest= async()=>{
    if(!requestApiQueue.isEmpty() && !isproccesad){
        // console.log('ooo')
        isproccesad=true
        const requestData = requestApiQueue.dequeue();
        const response =await fetch(` https://dummyjson.com/users/${requestData} `)
        const data = await response.json();
        // console.log(data)
        isproccesad = false
        sendApiRequest()
        displayData(data)
    } 
  }

  const displayData= (data)=>{
    document.querySelector('.data').innerHTML = `
    <h2>${data.id}</h2>
    <img src=${data.image} alt="">
    <h2>${data.firstName}</h2>
    `
  }

  