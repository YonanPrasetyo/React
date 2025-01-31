import React from "react";

const Content = () => {
    const handleNameChange = () => {
        const name = ["yonan", "ego", "yopi"]
        const int = Math.floor(Math.random() * 3)
        return name[int]
    }

    const handleClick = () => {
        console.log("you click it")
    }

    const handleClick2 = (name) => {
        console.log(`${name} was clicked`)
    }

    const handleClick3 = (e) => {
        console.log(e.target.innerText)
    }
    
	return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {handleNameChange()}!
            </p>
            <button onClick={handleClick}>Click it</button>
            <button onClick={() => handleClick2('yonan')}>Click it</button>
            <button onClick={(e) => handleClick3(e)}>Click it</button>
        </main>
    )
};

export default Content;
