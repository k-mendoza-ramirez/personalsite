import { useState, useEffect } from "react";

export default function Navbar() {
    const [isNightMode, setIsNightMode] = useState(true);

    useEffect(() => {
        document.body.classList.add('night-mode');
    }, []);

    const toggleNightMode = () => {
        setIsNightMode(!isNightMode);
        if (!isNightMode) {
            document.body.classList.add('night-mode');
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.remove('night-mode');
            document.body.classList.add('light-mode');
        }
    };

    return (
        <nav className="nav">

            <div className="nav-left">
                <a href="#top" className="site-title">Home</a>
            </div>

            <div className="nav-center">
                <ul>
                    <li>
                        <a href="#about">about</a>
                    </li>
                    <li>
                        <a href="#projects">projects</a>
                    </li>
                    <li>
                        <a href="#contact">contact</a>
                    </li>
                </ul>
            </div>

            <div className="nav-right">
                <button onClick={toggleNightMode} className="theme-toggle">
                    {isNightMode ? "\u263E" : "\u2600"} {/* Crescent moon for night mode, sun for light mode */}
                </button>
            </div>

        </nav>
    );
}