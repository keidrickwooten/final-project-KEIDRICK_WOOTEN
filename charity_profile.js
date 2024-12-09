// Show modal for volunteering
document.getElementById('volunteerBtn').addEventListener('click', function() {
    document.getElementById('volunteerModal').style.display = 'block';
});

// Toggle visibility of the volunteer form
document.getElementById('infoIcon').addEventListener('mouseover', function() {
    document.getElementById('moreInfo').style.display = 'block';
});
document.getElementById('infoIcon').addEventListener('mouseout', function() {
    document.getElementById('moreInfo').style.display = 'none';
});
