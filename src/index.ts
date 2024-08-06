console.clear();
import express  from "express";
import sequelize from "./config/db";
import errorHandler from "./middlewares/errorHandler";
import router from "./routes/Router";



const app = express();


app.use(express.json())
app.use("/api", router)
app.use(errorHandler)

const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log("Conection")
        await sequelize.sync()//{alter: true})
        app.listen(3000, () => {
            console.log(`Server is running on port http://localhost:3000`);
        });
    } catch (err: any) {
        console.error("There was an error starting the server on port ${PORT")
    }
}

startServer();