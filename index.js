const toggle = document.getElementById('xmasToggle');

toggle.addEventListener('change', function () {
    if (this.checked) {
        document.getElementById("sock").style.opacity = 0;
        document.getElementById("stocking").style.opacity = 1;
        setTimeout(() => {
            window.location.href = 'https://ifttt.com/applets/d6EGULbv-last-minute-christmas-shopping-reminder';
        }, 400);
    }
});