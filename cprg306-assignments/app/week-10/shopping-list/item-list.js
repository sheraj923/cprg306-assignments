"use client"
import Item from './item';
import React, { useState } from 'react';


export default function ItemList({ items, onItemSelect }) {
	const [sortBy, setSortBy] = useState("name");

	const itemList = [items].sort((a, b) => {
		if (sortBy === 'name') {
			return a.name.localeCompare(b.name);
		} else if (sortBy === 'category') {
			return a.category.localeCompare(b.category);
		}

		return 0;
	});

	return (
		<div>
			<br/>
			<button 
			className="border px-4 py-2 mr-4" 
			style={{ backgroundColor: sortBy === "name" ? "green" : "orange" }} 
			onClick={() => setSortBy('name')}>
				Sort By Name
			</button>
			<button 
			className="border px-4 py-2 mr-4" 
			style={{ backgroundColor: sortBy === "category" ? "green" : "orange",}} 
			onClick={() => setSortBy('category')}>
				Sort By Category
			</button>
			<ul>
				{itemList.map((items) => (
					<li className="bg-purple " >
						<Item items={items} onSelect={() => onItemSelect(item)} ></Item>
					</li>
				))}
			</ul>
		</div>
	)
}