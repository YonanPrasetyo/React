import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
    const [item, setItem] = useState([
        {
            id: 1,
            checked: false,
            item: 'Item 1'
        },
        {
            id: 2,
            checked: true,
            item: 'Item 2'
        },
        {
            id: 3,
            checked: false,
            item: 'Item 3'
        },
    ])

    const handleCheck = (id) => {
        const listItems = item.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
        setItem(listItems);
        localStorage.setItem('shoppingList', JSON.stringify(listItems));
    }

    const handleDelete = (id) => {
        const listItems = item.filter((item) => item.id !== id);
        setItem(listItems);
        localStorage.setItem('shoppingList', JSON.stringify(listItems));
    }

	return (
        <main>
            {item.length ? (
            <ul>
                {item.map((item) => (
                    <li key={item.id} className="item">
                        <input 
                            type="checkbox" 
                            onChange={() => handleCheck(item.id)}
                            checked={item.checked}
                        />
                        <label
                            style={(item.checked) ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}
                            onDoubleClick={() => handleCheck(item.id)}
                        >{item.item}</label>
                        <FaTrashAlt 
                            onClick={() => handleDelete(item.id)}
                            role="button" 
                            tabIndex="0" 
                        />
                    </li>
                ))}
            </ul>
            ) : (
                <p style={{marginTop: '2rem'}}>Your list is empty.</p>
            )}
        </main>
    )
};

export default Content;
