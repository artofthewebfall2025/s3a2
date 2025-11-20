// // taken from https://stackoverflow.com/questions/24639103/changing-vertical-scroll-to-horizontal

// function transformScroll(event) {
//     if (!event.deltaY) {
//         return;
//     }

//     event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
//     event.preventDefault();
// }

// var element = document.scrollingElement || document.documentElement;
// element.addEventListener('wheel', transformScroll);