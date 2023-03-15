

const data = [
  {
    id: 1,
    name: "张三",
  },
  {
    id: 2,
    name: "李四",
  },
  {
    id: 3,
    name: "王五",
  },
  {
    id: 4,
    name: "赵六",
  },
];

const filtro = data.filter(dato => dato.id === 4)
    let array = [];
    if(filtro){
        array.push(filtro)
        console.log(array)
        }

      console.log(array)  

      data.map(char =>{
        console.log(char.name)
      })