(() =>{
    const openNav = document.querySelector(".open-menu"),
        closeNav = document.querySelector(".close-menu"),
        navMenu = document.querySelector(".nav-links-container"),
        background = document.querySelector('.background'),
        mediaSize = 992;

    openNav.addEventListener("click", toggleMenu);
    closeNav.addEventListener("click", toggleMenu);
    background.addEventListener("click", toggleMenu);

    function toggleMenu() {
        navMenu.classList.toggle("open");
        background.classList.toggle("active");
    }

    navMenu.addEventListener("click", (event) => {
        // Fix: Ensure code only triggers when a element with [data-toggle] is clicked on mobile
        if (
            event.target.hasAttribute("data-toggle") && 
            window.innerWidth <= mediaSize
        ){
            event.preventDefault();
            
            // Fix: Moved inside the scope block so the variable can safely pass data down
            const dropdownMenuBranch = event.target.parentElement;
            
            if (dropdownMenuBranch.classList.contains("active")){
                collapseDropdownMenu();
            }
            else {
                // If another branch is open elsewhere, collapse it first
                if (navMenu.querySelector(".dropdown-menu-branch.active")){
                    collapseDropdownMenu();
                }
                
                // Open the newly selected branch
                dropdownMenuBranch.classList.add("active");
                const dropdownMenu = dropdownMenuBranch.querySelector(".dropdown-menu");
                dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + "px";
            }
        }
    }); // Fix: Corrected matching trailing parenthesis syntax here

    function collapseDropdownMenu () {
        navMenu
            .querySelector(".dropdown-menu-branch.active .dropdown-menu")
            .removeAttribute("style");
        navMenu
            .querySelector(".dropdown-menu-branch.active")
            .classList.remove("active");
    }
})();
