const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
const DB = require("./databasepg");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(cors());

app.get("/", (req, response) => {
  DB.query(`SELECT * FROM console`, (err, res) => {
    if (!err) {
      console.log(res.rows);
      response.send(res.rows);
    } else {
      console.log(err.message);
    }
    DB.end;
  });
});

app.get("/product/:id", (req, response) => {
  const consoleId = req.params.id;
  DB.query(
    `SELECT * FROM console WHERE id_console = $1`,
    [consoleId],
    (err, result) => {
      if (!err) {
        console.log("Les données ont été affiché avec succès !");
        response.status(200).send("Les données ont été afiché avec succès !");
      } else {
        console.log("Erreur lors de l'affichage des données :", err);
        response.status(500).send("Erreur lors de l'affichage des données.");
      }
    }
  );
});

app.post("/add-console", (req, response) => {
  const { name, image, description, price } = req.body;

  DB.query(
    "INSERT INTO public.console(name, image, description, price) VALUES ($1, $2, $3, $4)",
    [name, image, description, price],
    (err, result) => {
      if (!err) {
        console.log("Les données ont été insérées avec succès !");
        response.status(200).send("Les données ont été insérées avec succès !");
      } else {
        console.log("Erreur lors de l'insertion des données :", err);
        response.status(500).send("Erreur lors de l'insertion des données.");
      }
    }
  );
});

app.put("/update-console/:id", (req, response) => {
  const { name } = req.body;
  const consoleId = req.params.id;

  DB.query(
    "UPDATE public.console SET name = $2  WHERE id_console = $1",
    [consoleId, name],
    (err, result) => {
      if (!err) {
        if (result.rowCount === 1) {
          console.log(
            `La donnée avec l'ID ${consoleId} a été modifié avec succès`
          );
          response
            .status(200)
            .send(
              `La donnée avec l'ID ${consoleId} a été modifié avec succès !`
            );
        } else {
          console.log(`La donnée avec l'ID ${consoleId} n'existe pas`);
          response
            .status(404)
            .send(`La console avec l'ID ${consoleId} n'existe pas.`);
        }
      } else {
        console.log(
          `Il y a un problème lors de la modification de l'id ${consoleId} :`,
          err
        );
        response
          .status(500)
          .send(
            `Erreur lors de la modification des données ayant l'ID ${consoleId}.`
          );
      }
    }
  );
});

app.delete("/delete-console/:id", (req, response) => {
  const consoleId = req.params.id;

  DB.query(
    "DELETE FROM public.console WHERE id_console = $1",
    [consoleId],
    (err, result) => {
      if (!err) {
        if (result.rowCount === 1) {
          console.log(
            `La donnée avec l'ID ${consoleId} a bien été supprimée avec succès`
          );
          response
            .status(200)
            .send(
              `La donnée avec l'ID ${consoleId} bien été supprimé avec succès !`
            );
        } else {
          console.log(
            `La donnée avec l'ID ${consoleId} a bien été supprimée avec succès`
          );
          response
            .status(404)
            .send(`La console avec l'ID ${consoleId} n'existe pas.`);
        }
      } else {
        console.log(
          `Il y a un problème lors de la suppression de l'id ${consoleId} :`,
          err
        );
        response
          .status(500)
          .send(
            `Erreur lors de la suppression des données ayant l'ID ${consoleId}.`
          );
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
