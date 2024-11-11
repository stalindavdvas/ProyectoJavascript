function countWords() {
    const text = document.getElementById("textInput").value;
    const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
    document.getElementById("wordCount").textContent = `the number of words in your input is: ${wordCount}`;
}
