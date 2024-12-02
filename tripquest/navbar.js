let jsObject = JSON.parse(data.json);

let navigationBar = document.querySelector("#navItems");

// Create Website Name
let webName = document.createElement('h1');
webName.textContent = jsObject.name;
navigationBar.appendChild(webName);

// Create Navigation Links with Submenu (if applicable)
jsObject.navItems.forEach(item => {
    let navItem = document.createElement('span');
    let navLink = document.createElement('a');
    navLink.setAttribute('href', item.url);
    navLink.textContent = item.label;
    
    if (item.icon) {
        let navIcon = document.createElement('img');
        navIcon.setAttribute('src', item.icon);
        navIcon.setAttribute('width', '31');
        navIcon.setAttribute('height', '30');
        navItem.appendChild(navIcon);
    }
    
    navItem.appendChild(navLink);

    if (item.submenu) {
        let submenu = document.createElement('ul');
        submenu.style.display = 'none';
        submenu.style.position = 'absolute';
        submenu.style.backgroundColor = '#f9f9f9';
        item.submenu.forEach(sub => {
            let subItem = document.createElement('li');
            let subLink = document.createElement('a');
            subLink.setAttribute('href', sub.url);
            subLink.textContent = sub.label;
            subItem.appendChild(subLink);
            submenu.appendChild(subItem);
        });

        navItem.addEventListener('mouseover', () => submenu.style.display = 'block');
        navItem.addEventListener('mouseout', () => submenu.style.display = 'none');
        navItem.appendChild(submenu);
    }

    navigationBar.appendChild(navItem);
});

// Create Action Buttons/Links
let actionsDiv = document.createElement('div');
jsObject.actions.forEach(action => {
    if (action.button) {
        let actionButton = document.createElement('button');
        actionButton.textContent = action.button;
        actionsDiv.appendChild(actionButton);
    } else {
        let actionLink = document.createElement('a');
        actionLink.setAttribute('href', action.url);
        actionLink.textContent = action.label;
        actionsDiv.appendChild(actionLink);
    }
});
navigationBar.appendChild(actionsDiv);

// Style for Navigation Bar
let style = document.createElement('style');
style.innerHTML = `
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f5f5f5;
    }
    #navItems {
        display: flex;
        justify-content: space-between;
        background-color: #fff;
        padding: 20px;
    }
    #navItems h1 {
        font-size: 24px;
        color: #007BFF;
        margin: 0;
    }
    #navItems span {
        margin-left: 20px;
        font-size: 18px;
        font-weight: bold;
        position: relative;
    }
    #navItems a {
        text-decoration: none;
        color: #333;
    }
    #navItems a:hover {
        color: #007BFF;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    li {
        padding: 10px;
    }
    button {
        background-color: #007BFF;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        margin-left: 20px;
    }
    button:hover {
        background-color: #0056b3;
    }
    .submenu {
        display: none;
    }
`;
document.head.appendChild(style);
