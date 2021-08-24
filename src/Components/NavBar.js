import React from 'react';

function NavBar() {
    return (
        <div>
            <label>
                Price
                <select name="category">
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Dessert">Dessert</option>
                </select>
            </label>
            <label>
                Availability
                <select name="category">
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Dessert">Dessert</option>
                </select>
            </label>
            <label>
                Size
                <select name="category">
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Dessert">Dessert</option>
                </select>
            </label>
        </div>
    );
}

export default NavBar