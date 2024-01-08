/*
 _______             __        __        __                   ______                        __     
|       \           |  \      |  \      |  \                 /      \                      |  \    
| $$$$$$$\ __    __ | $$____  | $$____  | $$  ______        |  $$$$$$\  ______    ______  _| $$_   
| $$__/ $$|  \  |  \| $$    \ | $$    \ | $$ /      \       | $$___\$$ /      \  /      \|   $$ \  
| $$    $$| $$  | $$| $$$$$$$\| $$$$$$$\| $$|  $$$$$$\       \$$    \ |  $$$$$$\|  $$$$$$\\$$$$$$  
| $$$$$$$\| $$  | $$| $$  | $$| $$  | $$| $$| $$    $$       _\$$$$$$\| $$  | $$| $$   \$$ | $$ __ 
| $$__/ $$| $$__/ $$| $$__/ $$| $$__/ $$| $$| $$$$$$$$      |  \__| $$| $$__/ $$| $$       | $$|  \
| $$    $$ \$$    $$| $$    $$| $$    $$| $$ \$$     \       \$$    $$ \$$    $$| $$        \$$  $$
 \$$$$$$$   \$$$$$$  \$$$$$$$  \$$$$$$$  \$$  \$$$$$$$        \$$$$$$   \$$$$$$  \$$         \$$$$ 
                                                                                                   
                                                                                                   
                                                                                                   
*/
const BubbleSort= (arr) => {
   for (let i = 0; i < arr.length; i++) {
     for (let j = 0; j < arr.length - i - 1; j++) {
       let temp;
       if (arr[j] > arr[j + 1]) {
         temp = arr[j];
         arr[j] = arr[j + 1];
         arr[j + 1] = temp;
       }
     }
   }
   return arr;
}

// console.log(BubbleSort([2, 5, 3, 12, 9, 10]));

/*
 _______   __                                                 ______                                           __       
|       \ |  \                                               /      \                                         |  \      
| $$$$$$$\ \$$ _______    ______    ______   __    __       |  $$$$$$\  ______    ______    ______    _______ | $$____  
| $$__/ $$|  \|       \  |      \  /      \ |  \  |  \      | $$___\$$ /      \  |      \  /      \  /       \| $$    \ 
| $$    $$| $$| $$$$$$$\  \$$$$$$\|  $$$$$$\| $$  | $$       \$$    \ |  $$$$$$\  \$$$$$$\|  $$$$$$\|  $$$$$$$| $$$$$$$\
| $$$$$$$\| $$| $$  | $$ /      $$| $$   \$$| $$  | $$       _\$$$$$$\| $$    $$ /      $$| $$   \$$| $$      | $$  | $$
| $$__/ $$| $$| $$  | $$|  $$$$$$$| $$      | $$__/ $$      |  \__| $$| $$$$$$$$|  $$$$$$$| $$      | $$_____ | $$  | $$
| $$    $$| $$| $$  | $$ \$$    $$| $$       \$$    $$       \$$    $$ \$$     \ \$$    $$| $$       \$$     \| $$  | $$
 \$$$$$$$  \$$ \$$   \$$  \$$$$$$$ \$$       _\$$$$$$$        \$$$$$$   \$$$$$$$  \$$$$$$$ \$$        \$$$$$$$ \$$   \$$
                                            |  \__| $$                                                                  
                                             \$$    $$                                                                  
                                              \$$$$$$                                                                   
*/

const  BS = (arr, k) => {
   let start = 0;
   let end = arr.length - 1;

   while (start <= end) {
       let mid = Math.floor((start + end) / 2);

       if (arr[mid] === k) {
           return mid;
       } else if (arr[mid] < k) {
           start = mid + 1;
       } else {
           end = mid - 1;
       }
   }

   return -1; 
}

// console.log(BS([1, 2, 3, 4, 5], 0));

/*
 __        __            __                        __        __        __              __     
|  \      |  \          |  \                      |  \      |  \      |  \            |  \    
| $$       \$$ _______  | $$   __   ______    ____| $$      | $$       \$$  _______  _| $$_   
| $$      |  \|       \ | $$  /  \ /      \  /      $$      | $$      |  \ /       \|   $$ \  
| $$      | $$| $$$$$$$\| $$_/  $$|  $$$$$$\|  $$$$$$$      | $$      | $$|  $$$$$$$ \$$$$$$  
| $$      | $$| $$  | $$| $$   $$ | $$    $$| $$  | $$      | $$      | $$ \$$    \   | $$ __ 
| $$_____ | $$| $$  | $$| $$$$$$\ | $$$$$$$$| $$__| $$      | $$_____ | $$ _\$$$$$$\  | $$|  \
| $$     \| $$| $$  | $$| $$  \$$\ \$$     \ \$$    $$      | $$     \| $$|       $$   \$$  $$
 \$$$$$$$$ \$$ \$$   \$$ \$$   \$$  \$$$$$$$  \$$$$$$$       \$$$$$$$$ \$$ \$$$$$$$     \$$$$ 
                                                                                              
                                                                                              
                                                                                              
*/
class Node {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}
//createLinkedList
 createLinkedList = () => {
return new LinkedList()
}
class LinkedList{
    constructor(){
        this.head = null
    }

   addNode= (value)=> {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

   printList = () => {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + " ";
      current = current.next;
    }
   return result.trim()
  }
  
}



 const list = createLinkedList()
   list.addNode(5)
   list.addNode(7);
   list.addNode(3);
   console.log(list.printList());

