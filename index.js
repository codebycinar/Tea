require('dotenv').config();
const express = require('express');
const {Web3} = require('web3')
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Infura endpoint'ini kullanarak Web3'ü yapılandırın
// Doğru bir şekilde HttpProvider başlatma
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.INFURA_ENDPOINT));

app.use(cors()); // CORS politikalarına izin ver

// Cüzdan balance
app.get('/getBalance/:address', async (req, res) => {
    const { address } = req.params;
    try {
        const balanceWei = await web3.eth.getBalance(address);
        const balanceEther = web3.utils.fromWei(balanceWei, 'ether');
        res.json({ address, balanceEther });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/getBlockNumber', async (req, res) => {
    try {
        const blockNumber = await web3.eth.getBlockNumber();
        res.json({ blockNumber: blockNumber.toString() }); // BigInt değerini string'e çevir
    } catch (error) {
        //TODO: hata loglanacak
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Sunucu ${port} portunda çalışıyor.`);
});

