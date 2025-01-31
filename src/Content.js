import React from "react";

const Content = () => {
    const handleNameChange = () => {
        const name = ["yonan", "ego", "yopi"]
        const int = Math.floor(Math.random() * 3)
        return name[int]
    }
    
	return (
        <main>
            <p>
                Hello {handleNameChange()}!
            </p>
        </main>
    )
};

export default Content;
