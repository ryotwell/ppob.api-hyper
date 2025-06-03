const DIGIFLAZZ_URL = process?.env?.DIGIFLAZZ_URL as string;
const PORT = Number(process.env.PORT || 8000);

export { PORT, DIGIFLAZZ_URL };