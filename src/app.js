import express from "express";
import morgan from "morgan";
//Routes
import languageRoutes from "./routes/language.routes";

const app= express();

//settings
app.set("port", 4000);

//middleewares
app.use(morgan("dev"));

//Routes
app.use("/celulares", languageRoutes);

export default app;
