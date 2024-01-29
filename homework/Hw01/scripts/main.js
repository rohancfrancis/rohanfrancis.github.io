document.getElementById('unblurText').addEventListener('click', function() {
    document.getElementById('blurryImage').style.filter = 'none';
});

function confirmAction() {
    var confirmed = confirm("Are you sure you want to proceed?");
    if (confirmed) {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
}