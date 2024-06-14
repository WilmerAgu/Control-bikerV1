function shuffleGallery() {
    const gallery = document.querySelector('.gallary');
    const items = Array.from(gallery.children);
    for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        gallery.appendChild(items[j]); // Move the randomly selected item to the end
        items.splice(j, 1); // Remove the moved item from the array
    }
}

setInterval(shuffleGallery, 3000); // Change images every 3 seconds
