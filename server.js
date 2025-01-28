const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 2000;




app.use(cors());


app.get("/api/nfts/:wallet", async (req, res) => {
  const walletAddress = req.params.wallet;
  const apiUrl = `https://api-mainnet.magiceden.dev/v2/wallets/${walletAddress}/tokens`;

  try {
    const response = await axios.get(apiUrl);
    res.json(response.data); // Restituisce i dati ricevuti
  } catch (error) {
    console.error("Errore durante il recupero dei dati NFT:", error.message);
    res.status(500).json({ error: "Errore nel recupero degli NFT" });
  }
});

app.listen(port, () => {
  console.log(`Server proxy in esecuzione su http://localhost:${port}`);
});
