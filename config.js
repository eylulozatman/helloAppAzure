const { SecretClient } = require("@azure/keyvault-secrets");
const { DefaultAzureCredential } = require("@azure/identity");

// Azure Key Vault URL'si
const vaultUrl = process.env.KEYVAULTURL; // KEYVAULTURL ortam değişkeninden alınır

// Kimlik doğrulama sağlayıcı
const credential = new DefaultAzureCredential();

// Key Vault istemci nesnesi oluştur
const client = new SecretClient(vaultUrl, credential);

// Key Vault'tan gizli bilgilere erişim sağlayan fonksiyon
async function getSecret(name) {
    const secret = await client.getSecret(name);
    return secret.value;
}

module.exports = {
    getSecret
};
