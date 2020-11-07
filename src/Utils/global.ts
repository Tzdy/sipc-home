export default function getGlobal() {
    if (process.env.config) {
        return JSON.parse(process.env.config);
    } else {
        return {}
    }
}