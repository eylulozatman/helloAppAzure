const { SecretClient } = require("@azure/keyvault-secrets");
const { DefaultAzureCredential } = require("@azure/identity");

const vaultUrl = process.env.KEYVAULTURL; 

const credential = new DefaultAzureCredential();

const client = new SecretClient(vaultUrl, credential);

async function getSecret(name) {
    const secret = await client.getSecret(name);
    return secret.value;
}

module.exports = {
    getSecret
};
