document.addEventListener("DOMContentLoaded", function() {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    
    loadingScreen.style.opacity = '1';
    
    window.addEventListener('load', function() {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            mainContent.style.display = 'block';
        }, 500);

        setTimeout(() => {
            window.location.href = 'https://github.com/luafv/rbxflags';
        }, 10000);
    });
});
