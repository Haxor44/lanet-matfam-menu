// Render menu dynamically
function renderMenu() {
    const menuContent = document.getElementById('menuContent');
    
    for (const [categoryKey, categoryData] of Object.entries(menuData)) {
        // Create category section
        const categorySection = document.createElement('div');
        categorySection.className = 'menu-category';
        
        // Category title
        const categoryTitle = document.createElement('h2');
        categoryTitle.className = 'category-title';
        categoryTitle.textContent = categoryData.title;
        categorySection.appendChild(categoryTitle);
        
        // Menu items container
        const menuItems = document.createElement('div');
        menuItems.className = 'menu-items';
        
        // Add each item
        categoryData.items.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';
            
            // Item info
            const itemInfo = document.createElement('div');
            itemInfo.className = 'item-info';
            
            const itemName = document.createElement('div');
            itemName.className = 'item-name';
            itemName.textContent = item.name;
            itemInfo.appendChild(itemName);
            
            // Add description if exists
            if (item.description) {
                const itemDescription = document.createElement('div');
                itemDescription.className = 'item-description';
                
                if (Array.isArray(item.description)) {
                    const ul = document.createElement('ul');
                    item.description.forEach(desc => {
                        const li = document.createElement('li');
                        li.textContent = desc;
                        ul.appendChild(li);
                    });
                    itemDescription.appendChild(ul);
                } else {
                    itemDescription.textContent = item.description;
                }
                
                itemInfo.appendChild(itemDescription);
            }
            
            menuItem.appendChild(itemInfo);
            
            // Price line with dots
            const priceLine = document.createElement('div');
            priceLine.className = 'price-line';
            
            const dottedLine = document.createElement('div');
            dottedLine.className = 'dotted-line';
            priceLine.appendChild(dottedLine);
            
            const itemPrice = document.createElement('div');
            itemPrice.className = 'item-price';
            itemPrice.textContent = `KSH ${item.price}`;
            priceLine.appendChild(itemPrice);
            
            menuItem.appendChild(priceLine);
            menuItems.appendChild(menuItem);
        });
        
        categorySection.appendChild(menuItems);
        
        // Add special note if exists
        if (categoryData.note) {
            const specialNote = document.createElement('div');
            specialNote.className = 'special-note';
            specialNote.textContent = categoryData.note;
            categorySection.appendChild(specialNote);
        }
        
        menuContent.appendChild(categorySection);
    }
}

// Initialize menu when page loads
document.addEventListener('DOMContentLoaded', renderMenu);
