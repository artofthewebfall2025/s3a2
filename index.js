const toggle = document.getElementById('xmasToggle');

toggle.addEventListener('change', function () {
    if (this.checked) {
        setTimeout(() => {
            window.location.href = 'https://ifttt.com/applets/d6EGULbv-last-minute-christmas-shopping-reminder';
        }, 400);
    }
});