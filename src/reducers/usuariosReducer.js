

const intialState = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
    }
];
  
//Reducer
export default (state = intialState, action) => {
    switch (action.type)
    {
      case "listo": 
        return { cargando: false, usuarios:intialState }

      default:
        console.log(`La accion es ${action.type}`);
        return { cargando: true, usuarios: []};
    }
}
  