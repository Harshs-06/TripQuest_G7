// Function to fetch the JSON data
async function loadNavbarData() {
    const response = await fetch('data.json');
    const data = await response.json();
    return data;
}

// Function to create the navigation bar
function createNavbar(navbarData) {
    const navbar = document.getElementById('navbar');
    
    // Create navbar container
    const navContainer = document.createElement('nav');
    navContainer.style.display = 'flex';
    navContainer.style.justifyContent = 'space-between';
    navContainer.style.alignItems = 'center';
    navContainer.style.backgroundColor = '#f8f8f8';
    navContainer.style.padding = '10px 20px';

    // Create logo
    const logoDiv = document.createElement('div');
    logoDiv.style.display = 'flex';
    logoDiv.style.alignItems = 'center';
    const logoImage = document.createElement('img');
    logoImage.src = navbarData.logo.image;
    logoImage.alt = 'Logo';
    logoImage.style.height = '40px';
    logoImage.style.marginRight = '10px';
    const logoText = document.createElement('span');
    logoText.textContent = navbarData.logo.text;
    logoText.style.fontSize = '32px';
    logoText.style.fontWeight = 'bold';
    logoText.style.color = '#007BFF';
    logoText.style.cssText = "font-family:'MaShanZheng'" ;
    logoDiv.appendChild(logoImage);
    logoDiv.appendChild(logoText);
    navContainer.appendChild(logoDiv);

    // Create navigation links
    const navLinks = document.createElement('ul');
    navLinks.style.listStyle = 'none';
    navLinks.style.display = 'flex';
    navLinks.style.margin = '0';
    navLinks.style.padding = '0';

    navbarData.navLinks.forEach(link => {
        const navItem = document.createElement('li');
        navItem.style.marginLeft = '20px';
        const navLink = document.createElement('a');
        navLink.href = link.url;
        navLink.textContent = link.name;
        navLink.style.textDecoration = 'none';
        navLink.style.fontSize = '16px';
        navLink.style.color = '#333';
        navLink.style.transition = 'color 0.3s ease';
        navLink.onmouseover = () => { navLink.style.color = '#007BFF'; };
        navLink.onmouseout = () => { navLink.style.color = '#333'; };

        // If the link has a submenu
        if (link.submenu) {
            const dropdown = document.createElement('ul');
            dropdown.style.position = 'absolute';
            dropdown.style.display = 'none';
            dropdown.style.backgroundColor = '#f9f9f9';
            dropdown.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
            link.submenu.forEach(subLink => {
                const dropdownItem = document.createElement('li');
                const dropdownLink = document.createElement('a');
                dropdownLink.href = subLink.url;
                dropdownLink.textContent = subLink.name;
                dropdownLink.style.textDecoration = 'none';
                dropdownLink.style.display = 'block';
                dropdownLink.style.padding = '10px 16px';
                dropdownLink.style.color = 'black';
                dropdownLink.onmouseover = () => { dropdownLink.style.backgroundColor = '#007BFF'; dropdownLink.style.color = 'white'; };
                dropdownLink.onmouseout = () => { dropdownLink.style.backgroundColor = ''; dropdownLink.style.color = 'black'; };
                dropdownItem.appendChild(dropdownLink);
                dropdown.appendChild(dropdownItem);
            });

            navItem.onmouseover = () => { dropdown.style.display = 'block'; };
            navItem.onmouseout = () => { dropdown.style.display = 'none'; };
            navItem.appendChild(dropdown);
        }

        navItem.appendChild(navLink);
        navLinks.appendChild(navItem);
    });
    navContainer.appendChild(navLinks);

    // Create action buttons
    const navActions = document.createElement('div');
    navActions.style.display = 'flex';
    navbarData.actions.forEach(action => {
        if (action.type === 'link') {
            const actionLink = document.createElement('a');
            actionLink.href = action.url;
            actionLink.textContent = action.name;
            actionLink.style.marginLeft = '15px';
            actionLink.style.fontSize = '16px';
            actionLink.style.textDecoration = 'none';
            actionLink.style.color = '#333';
            actionLink.onmouseover = () => { actionLink.style.color = '#007BFF'; };
            actionLink.onmouseout = () => { actionLink.style.color = '#333'; };
            navActions.appendChild(actionLink);
        } else if (action.type === 'button') {
            const actionButton = document.createElement('button');
            actionButton.textContent = action.name;
            actionButton.style.marginLeft = '15px';
            actionButton.style.padding = '8px 16px';
            actionButton.style.backgroundColor = '#007BFF';
            actionButton.style.color = 'white';
            actionButton.style.border = 'none';
            actionButton.style.borderRadius = '5px';
            actionButton.style.cursor = 'pointer';
            actionButton.onmouseover = () => { actionButton.style.backgroundColor = '#0056b3'; };
            actionButton.onmouseout = () => { actionButton.style.backgroundColor = '#007BFF'; };
            navActions.appendChild(actionButton);
        }
    });
    navContainer.appendChild(navActions);

    navbar.appendChild(navContainer);
}

// Load the JSON data and create the navbar
loadNavbarData().then(data => {
    createNavbar(data);
});

let style  = document.createElement('style');
style.innerHTML = `
@font-face {
        font-family: 'MaShanZheng';
        src: url('MaShanZheng.ttf');
    }
`;
document.head.appendChild(style);