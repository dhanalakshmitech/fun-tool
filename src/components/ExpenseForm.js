import React, { useState } from 'react';


const ExpenseForm = () => {
  const [items, setItems] = useState([
    { id: 1, title: "burger", amount: 300 },
    { id: 2, title: "fries", amount: 300 }
  ]);
  const [title, setTitle] = useState('');
  const [amountInput, setAmountInput] = useState('');
  const [total, setTotal] = useState(600);
 
  const handleAdd = () => {
    if (!title || !amountInput) return;
    const newItem = {
      id: Date.now(),
      title,
      amount: Number(amountInput)
    };
    setItems([...items, newItem]);
    setTotal(total + newItem.amount);
    setTitle('');
    setAmountInput('');
  };

  const Delete = (id) => {
    const updated = items.filter(item => item.id !== id);
    const deleted = items.find(item => item.id === id);
    setItems(updated);
    if (deleted) {
      setTotal(total - deleted.amount);
    }
  };

  const handleModify = (id) => {
    const Modify = items.find(item => item.id === id);
    if (Modify) {
      setTitle(Modify.title);
      setAmountInput(Modify.amount.toString());
      Delete(id);
    }
  };  

  return (
    <div className='f'>
      <div className="form">
        <input
          type="text"
          placeholder='Title'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder='Amount'
          value={amountInput}
          onChange={e => setAmountInput(e.target.value)}
        />
        <button onClick={handleAdd}>Track</button>
        <div className="total">
          <h2>Total : {total}</h2>
        </div>
      </div>
      <div className="result">
        {items.map(i =>
          <div className="ex" key={i.id}>
            <h3>{i.title}:</h3>
            <h3>{i.amount}</h3>
            <button onClick={() => Delete(i.id)}> delete</button>
            <button onClick={() => handleModify(i.id)}>modify</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpenseForm; 