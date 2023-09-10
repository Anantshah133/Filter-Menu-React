import "./style.css";
import { useState } from "react";
import items from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

export default function FilterGallery() {
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState([]);
    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>Our Menu</h2>
                    <div className="underline"></div>
                </div>
                <Categories />
                <Menu items={menuItems}/>
            </section>
        </main>
    );
}