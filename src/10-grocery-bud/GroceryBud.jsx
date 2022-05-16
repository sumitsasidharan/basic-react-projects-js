import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';
import './GroceryBud.css';

const getLocalStorage = () => {
   let list = localStorage.getItem('list')

   if (list) {
      return JSON.parse(localStorage.getItem('list'));
   } else {
      return [];
   }
}

const GroceryBud = () => {
   const [name, setName] = useState('');
   const [list, setList] = useState(getLocalStorage());
   const [isEditing, setIsEditing] = useState(false);
   const [editID, setEditID] = useState(null);
   const [alert, setAlert] = useState({
      show: false,
      type: '',
      msg: '',
   });

   const handleSubmit = (e) => {
      e.preventDefault();
      if (!name) {
         // display alert
         showAlert(true, 'danger', 'please enter value');
         
      } else if (name && isEditing) {
         // deal with edit
         setList(list.map(item => {
            if (item.id === editID) {
               return {
                  ...item, title: name
               }
            }
            // the return above will exit the function.
            return item;
         }))

         setName("");
         setEditID(null);
         setIsEditing(false);
         showAlert(true, 'success', 'value changed');
      } else {
         // show alert
         showAlert(true, 'success', 'item added to the list')
         const newItem = {
            id: new Date().getTime().toString(),
            title: name,
         };

         setList([...list, newItem]);
         setName("");
      }
   };

   function showAlert (show=false, type="", msg="") {
      setAlert({show, type, msg})
   }

   const clearList = () => {
      showAlert(true, 'danger', 'empty list');
      setList([])
   }

   const removeItem = (id) => {
      showAlert(true, 'danger', 'item removed');
      setList(list.filter(item => item.id !== id));
   }

   const editItem = (id) => {
      const specificItem = list.find(item => item.id === id);
      setIsEditing(true);
      setEditID(id);
      setName(specificItem.title);
   }

   // store in LOCALSTORAGE
   useEffect(() => {
      localStorage.setItem('list', JSON.stringify(list));
   }, [list])

   return (
      <section className="section-center">
         <form className="grocery-form">
            {alert.show && (
               <Alert {...alert} removeAlert={showAlert} list={list} />
            )}

            <h3>grocery bud</h3>
            <div className="form-control">
               <input
                  type="text"
                  className="grocery"
                  placeholder="e.g. eggs"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
               />
               <button
                  onClick={handleSubmit}
                  type="submit"
                  className="submit-btn">
                  {isEditing ? 'edit' : 'submit'}
               </button>
            </div>
         </form>

         {list.length > 0 && (
            <div className="grocery-container">
               <List items={list} removeItem={removeItem} editItem={editItem} />
               <button className="clear-btn" onClick={clearList}>
                  clear items
               </button>
            </div>
         )}
      </section>
   );
};

export default GroceryBud;