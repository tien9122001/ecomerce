interface Case {
    "app" : {
        port : number | string
    },
    "db" : {
        host : string,
        port : number | string,
        name : string
    }
}


const dev : Case = {
    "app" : {
        port : process.env.DEV_APP_PORT || 3000
    },
    "db" : {
        host : process.env.DEV_DB_HOST || "localhost",
        port : process.env.DEV_DB_PORT || 2912,
        name : process.env.DEV_DB_NAME || "shopDev"
    }
}


const pro : Case = {
    "app" : {
        port : process.env.PRO_APP_PORT || 3000
    },
    "db" : {
        host : process.env.PRO_DB_HOST || "localhost",
        port : process.env.PRO_DB_PORT || 2912,
        name : process.env.PRO_DB_NAME || "shopPro"
    }
}



const config =  process.env.NODE_ENV === "pro" ? pro : dev;

export default config;


