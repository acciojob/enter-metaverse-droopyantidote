//your JS code here. If required.
// Get references to the elements
const statusParagraph = document.getElementById('status');
const enterButton = document.getElementById('enterBtn');

// Add event listener to the button
enterButton.addEventListener('click', () => {
    // Change the text content of the paragraph
    statusParagraph.innerHTML = '<h1>Entered Metaverse</h1>';
});
