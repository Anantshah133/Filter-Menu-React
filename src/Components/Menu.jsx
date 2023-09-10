import React from 'react'

export default function Menu({items}) {
    return (
        <div className="section-center">
            {items.map((menuItem)=>{
                const [id, title, img, desc] = menuItem;
                return(
                    <h1 key={id}>hello world</h1>
                );
            })}
        </div>
    )
}
