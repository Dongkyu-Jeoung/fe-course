import React from 'react';
import { useState } from 'react'

export default function Categories({ list }) {
    const [cur, setCur] = useState(null);

    return (
        <ul className="categories">
            {
                list?.map ( (item, idx) =>
                    <li key={idx}>
                        <button onMouseOver={()=> setCur(item.category)} className={item.category === cur ? "category_active" : "category" }>
                            {item.category}
                            <span className="category_count">{item.count}</span>
                        </button>
                    </li>
                )
            }
        </ul>
    );
}

