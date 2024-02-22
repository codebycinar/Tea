// script.js
async function getBalance() {
    const address = document.getElementById('addressInput').value;
    const response = await fetch(`http://localhost:3000/getBalance/${address}`);
    const data = await response.json();
    document.getElementById('result').innerText = `Bakiye: ${data.balanceEther} ETH`;
}

async function getBlockNumber() {
    const response = await fetch('http://localhost:3000/getBlockNumber');
    const data = await response.json();
    document.getElementById('result').innerText = `En Son Blok Numarası: ${data.blockNumber}`;
}