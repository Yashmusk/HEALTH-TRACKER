import express from "express";
import { client } from "./dbconfig.js";
import cors from "cors";
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log("Request received:", req.originalUrl);
  console.log("Method:", req.method);
  next();
});

app.post("/login", async (req, res) => {
  try {
    let user = await client.query(
      `SELECT * FROM Users WHERE email='${req.body.email}'`
    );
    console.log("user=", user);
    if (user.rows.length > 0) {
      user = user.rows[0];
      if (user.password == req.body.password) {
        res.send({ data: user.name });
      }
    }
    res.status(401).send({ data: "unauthorized" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Error fetching products" });
  }
});

app.get("/check", (req, res) => {
  res.send("Server is running...");
});

app.post("/ngos", async (req, res) => {
  try {
    const {
      name,
      email,
      contact_number,
      address,
      registration_number,
      website,
      description,
    } = req.body;

    const query = `
      INSERT INTO NGO(name, email, contact_number, address, registration_number, website, description)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;
    `;
    const values = [
      name,
      email,
      contact_number,
      address,
      registration_number,
      website,
      description,
    ];

    const result = await client.query(query, values);

    res
      .status(201)
      .send({ message: "NGO registered successfully", data: result.rows[0] });
  } catch (error) {
    console.error("Error registering NGO:", error);
    res.status(500).send({ error: "Error registering NGO" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
