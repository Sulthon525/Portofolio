window.addEventListener("DOMContentLoaded", function () {

    // get the form elements defined in your form HTML above

    var form = document.getElementById("my-form");
    //  var button = document.getElementById("submit");
    var status = document.getElementById("status");

    // Success and Error functions for after the form is submitted

    function success() {
        form.reset();
        //  status.classList.add("alert alert-succes alert-dismissible fade show");
        status.innerHTML = "Your message has been sent! Thanks for contacting me.";
    }

    function error() {
        //  status.classList.add("alert alert-warning alert-dismissible fade show");
        status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}


//komentar disimpan di indexDB
// Membuka atau membuat database IndexedDB
// const openDB = indexedDB.open('CommentsDB', 1);

// // Callback ini akan dipanggil pertama kali kita membuat atau membuka database
// openDB.onupgradeneeded = function (event) {
//     const db = event.target.result;

//     // Membuat objek store untuk menyimpan komentar
//     const commentStore = db.createObjectStore('comments', { autoIncrement: true });
// };

// openDB.onsuccess = function (event) {
//     const db = event.target.result;

//     // Menangani form submission
//     document.getElementById('my-form').addEventListener('submit', function (ev) {
//         ev.preventDefault();

//         const data = new FormData(this);

//         // Menyimpan data komentar ke IndexedDB
//         saveCommentToIndexedDB(db, data);
//     });
// };

// function saveCommentToIndexedDB(db, commentData) {
//     // Membuka transaksi untuk menyimpan data
//     const transaction = db.transaction(['comments'], 'readwrite');
//     const commentStore = transaction.objectStore('comments');

//     // Menyimpan data komentar
//     const request = commentStore.add({
//         name: commentData.get('InputName'),
//         email: commentData.get('InputEmail'),
//         subject: commentData.get('InputSubject'),
//         message: commentData.get('InputMessage')
//     });

//     request.onsuccess = function () {
//         console.log('Comment saved to IndexedDB');
//         success();
//     };

//     request.onerror = function (event) {
//         console.error('Error saving comment to IndexedDB', event.target.error);
//         error();
//     };
// }

// function success() {
//     // Tambahkan logika lain yang diperlukan setelah sukses
//     document.getElementById('status').innerHTML = "Your message has been saved locally. It will be submitted when online.";
// }

// function error() {
//     // Tambahkan logika lain yang diperlukan jika terjadi kesalahan
//     document.getElementById('status').innerHTML = "Oops! There was an error.";
// }
