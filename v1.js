var todos = ["item 1", "item 2", "item 3"];
todos.push ('item 5');
console.log(todos)

todos
(5) ["item 1", "item 2", "item 3", "item 4", "item 5"]0: "item 2"1: "item 3"2: "item 4"3: "item 5"length: 4__proto__: Array(0)
todos.splice(0, 1)
["item 1"]
todos
(4) ["item 2", "item 3", "item 4", "item 5"]0: "item 2"1: "item 3"2: "item 4"3: "item 5"length: 4__proto__: Array(0)
todos.splice(3, 1)
["item 5"]
todos
(3) ["item 2", "item 3", "item 4"]
todos.splice(3, 1)
[]
