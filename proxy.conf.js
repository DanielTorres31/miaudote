const PROXY_CONFIG = [
    {
        context: "/api",
        target: "http://localhost/miaudote-api",
        secure: false,
        logLevel: "debug",
    }
]
 
module.exports = PROXY_CONFIG;