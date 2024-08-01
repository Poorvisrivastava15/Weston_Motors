// document.addEventListener('DOMContentLoaded', () => {
//     const openPopupBtn = document.getElementById('openPopupBtn');
//     const queryPopup = document.getElementById('queryPopup');
//     const closeBtn = document.querySelector('.closeBtn');
//     const queryForm = document.getElementById('queryForm');

//     openPopupBtn.addEventListener('click', () => {
//         queryPopup.style.display ='fixed';
//     });

//     closeBtn.addEventListener('click', () => {
//         queryPopup.style.display = 'none';
//     });

//     window.addEventListener('click', (event) => {
//         if (event.target === queryPopup) {
//             queryPopup.style.display = 'none';
//         }
//     });

//     queryForm.addEventListener('submit', (event) => {
//         event.preventDefault();
//         // Handle form submission logic here
//         alert('Query submitted successfully!');
//         queryPopup.style.display = 'successfull';
//     });
// });
