import { useState } from 'react';

function App() {

    const [nav_menu_show, setnav_menu_show] = useState("nav_menu");

    const handleClick = () => {
        if (nav_menu_show === "nav_menu") {
            setnav_menu_show("nav_menu active")
        } else {
            setnav_menu_show("nav_menu")
        }
    };

  return (
    <header className="header">
        <nav className="nav container">
            <a href="/" className="nav_logo">
                <span>Woduh</span>
            </a>
            <div className={nav_menu_show}>
                <ul className="nav_list">
                    <li>
                        <a href="/blog" className="nav_link">Blog</a>
                    </li>
                    <li>
                        <a href="/artwork" className="nav_link">Artwork</a>
                    </li>
                    <li>
                        <a href="/contact" className="nav_link">Contact</a>
                    </li>
                </ul>

                <div className="nav_close" onClick={handleClick}>
                    <i className='bxr  bx-x'></i> 
                </div>
            </div>

            <div className="nav_buttons">
                <div className="nav_toggle" onClick={handleClick}>
                    <i className='bxr  bx-menu-right'></i> 
                </div>
            </div>
        </nav>
    </header>
  );
}

export default App;
