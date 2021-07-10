import "./App.css";
import Menu from "./Components/Menu";
import List from "./Components/List";
import React, { useState } from 'react';

const state = {
  books: [
    { id: 0, rating: 4, title: "Harry Potter y el cáliz de fuego", image: "libro01.jpg"},
    { id: 1, rating: 3, title: "The shining", image: "libro02.jpg" },
    { id: 2, rating: 5, title: "Código Da Vinci", image: "libro03.jpg" },
    { id: 3, rating: 5, title: "El principito", image: "libro04.jpg" },
    { id: 4, rating: 5, title: "Sobrenatural", image: "libro05.jpg" },
  ],
  copyBooks: [
    { id: 0, rating: 4, title: "Harry Potter y el cáliz de fuego", image: "libro01.jpg"},
    { id: 1, rating: 3, title: "The shining", image: "libro02.jpg" },
    { id: 2, rating: 5, title: "Código Da Vinci", image: "libro03.jpg" },
    { id: 3, rating: 5, title: "El principito", image: "libro04.jpg" },
    { id: 4, rating: 5, title: "Sobrenatural", image: "libro05.jpg" },
  ]
};


function App() {

  const [books, setBooks] = useState(state);

  const copying = () => {
    let temp = books.books;
    setBooks({...books, copyBooks: temp})
  }

  const onSearch = (query) => {
    if(query===''){
      copying();
    }else{
      const temp = books.books;
      let res = [];

      temp.forEach( item => {
        if(item.title.toLowerCase().indexOf(query)> -1){
          res.push(item);
        }
      });

      setBooks({...books, copyBooks:[...res]});
    }
  }

  const onAdd = (item)=>{
    //add new item to books
    const id = books.books[books.books.length-1].id++;
    item['id'] = id;
    const newBooks = [...books.books, item];
    setBooks({copyBooks: newBooks, books: newBooks });
  }

  const onRemove = (id) => {
    const aux = books.books;
    //dame todos los items donde el su id sea diferewnte
    const res = aux.filter(item => item.id != id);

    setBooks({books:res, copyBooks:res});
  }

  return (
    <div className="App">
      <Menu onadd={onAdd} onsearch={onSearch}/>
      <List items={books.copyBooks} onremove={onRemove}/>
    </div>
  );
}

export default App;
