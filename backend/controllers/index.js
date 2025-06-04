const crypto = require('crypto');

const publicKey = `-----BEGIN PRIVATE KEY-----
MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDIprFk7YZNhuAe
WzkPs7uTlCD2baMJcUHWORS1WUOlZnWqn4Kpj3fSoT3qjlcvSncnLZUCcmCdstn7
R1EtLLnvgYk+XKM3EW9aYsHlwi9StdBTOpwdwo5fVYcGbxc82jDG1UNErN93Adsd
f9soh/04b3406F7AnKkcUlOHj69iz6DwUpJLdo2RqDQuOO2KX1P79jECnwz0rwuB
S+ybgnPiyZItlvXXp74Ji8IuduHgexV1EvG7U5vXvYl5VMkJGFbnbTyWNAzPoHt1
AvbPtdS3ySJXmvvyM+Of84rHEkxNjHMeEtypnh9tRUoob7c70O+kF0EJc5fmtgmz
tE5MJVi9AgMBAAECggEAJX4wa6GOlPH88u8szGhTRpJJToLSEjOdj7/+xJw3bbKl
jgpcSf7K7wq+HRQX6nhJp4J284wXzZ/b534+BujynXRhBswcm2+glQ0bGimc2iGr
GcI75buzCtFad7NObkp/DshO14hOAVjRbsOzWfF/OYpr1MsO2YLsfqRLg2sv5JB+
uZqAx+L6PSIt9T+zDZzhLeHFCG6waeHUDYxTFq8gN4u7JmCguIRJ8vACmeLwaaBB
8QzHfOcUc31+p6jasSROcuY/KBNaMHhOsGlxISmrXpU+4mu7TIv9t3NEKQWK9x03
XbAHPSgKRgNIi++u+A+FNrirMP9VNoAVI7S+FlgbQQKBgQDvJVOGgHNAKbkl44ol
1xCsBStHOnIXTwnlfJ05/+RjuiRfFFjZBeYoyt/nuVt/b1aq803oHGquAXWitq6G
nmMusuCxNllYuC5IE36AP4Qjb2W08Ds+Wq9hzQFyDUhmYmUdEb+Hm7/4eGqTI6DS
Vi/zAosdgVchx8lRod7n3iV3+QKBgQDWythdOtvKKdZ9pH8xySIcw5kOnKhdHSG+
DQlT2KepFYoXq1R1Lk0s53/Ls2mwB1mbWt8oRhgv98V+i/kI+HaI7WqYCTbYowmx
wZfUn0VKQjrB/dVwvXQncYJDnchPQ9P1MsLcXfK8AahH577naTF+8ki+XAhuI38k
x2o/GyD/5QKBgFXl3l6NfNgrJGnLlS+KVF61bJolEB33MeLQI9lVZL+9eJr+P/uT
9tvoIwyks4zOfR7iTbV1n4vo0kwjugR4l7+KWNLOZsFLRrR07Bc8uUXRGYMoVt9K
y3whmsdQphTAevk6CsW21/lzpzQ6s+VZN9fdrgJnFtj3XgSIU/yM+oBhAoGAARMy
0gShZPmgoTBZkp43FX3FHlWaYhzrNlBKY6kJ7ca10jiBS7TXngnqkdJsDP18bVKf
G0x+gn7y9hctP+Y+caD+j5Q8OglW2xTk9aN2bVC3ipECqHXKRwhCZqQ7hGoKfYer
gf7WYCqB9Ror0mysWr5Lrug3ApYa5Mw6s+Ym3CECgYB5B9FTh9sY2V0GSAPi08ch
vrJAw6ArLCXR0B4tEhfPwV5K1+tc2mv7C92EpEc01sjk6KUjfNj0PKCDcVvu5wl+
JbuqYkCr/cp0jUH3zu7IznF1qCxau1VlXJowTwBR52Yi9O7Y64hMRMSLTTnKcOLN
gnh4RaEa6bDKpxduaZJGaA==
-----END PRIVATE KEY-----`

const getHome = (req, res, next) => {
	console.log("Home");

	res.json({ success: true, message: "Service is Running! 🙂" });
};

const encriptText = (req, res, next) => {
	try {
		const { text } = req.body;
		if (!text) return res.status(400).json({ error: 'Falta "text"' });

		const buffer = Buffer.from(text, "utf8");
		const encrypted = crypto.publicEncrypt(
			{
				key: publicKey,
				padding: crypto.constants.RSA_PKCS1_PADDING,
			},
			buffer
		);

		res.json({ encrypted: encrypted.toString("base64") });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = { getHome, encriptText };
