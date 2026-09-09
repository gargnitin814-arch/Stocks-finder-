function searchStock() {
    const stock = document.getElementById("stockInput").value;
    const result = document.getElementById("result");

    if (stock === "") {
        result.innerHTML = "Please enter a stock symbol.";
        return;
    }

    result.innerHTML = `
        <h2>${stock.toUpperCase()}</h2>
        <p>Stock information will appear here.</p>
    `;
}
