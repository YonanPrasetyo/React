import { useState } from "react";

const Content = () => {
    const [name, setName] = useState('yonan')
    const [count, setCount] = useState(0)

    const handleNameChange = () => {
        const name = ["yonan", "ego", "yopi"]
        const int = Math.floor(Math.random() * 3)
        setName(name[int])
    }

    const handleClick = () => {
        setCount(count + 1)
        setCount(count + 1)
        console.log(count)
    }

    const handleClick2 = () => {
        console.log(count)
    }

    
	return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {name}!
            </p>
            <button onClick={handleNameChange}>Change Name</button>
            <button onClick={handleClick}>Count</button>
            <button onClick={handleClick2}>Count 2</button>
        </main>
    )
};

export default Content;
