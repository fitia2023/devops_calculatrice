import express from 'express';

export const app = express();  

console.log("Demarrage du projet"); 

app.listen( 3000, () => {
    console.log("Serveur demarre sur http://localhost:3000");
});
