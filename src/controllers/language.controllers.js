import {getConnection} from "./../database/database";


const getLanguages = async (req, res) => {
    try{
    const connection = await getConnection();
    const result = await connection.query("SELECT id, description, stock FROM Celulares");
    res.json(result);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
};

export const methods =  {
    getLanguages
};