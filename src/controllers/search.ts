import axios from "axios";
import express from "express";

const dentalsUrl =
  "https://storage.googleapis.com/scratchpay-code-challenge/dental-clinics.json";
const vetsUrl =
  "https://storage.googleapis.com/scratchpay-code-challenge/vet-clinics.json";

export const getClinics = async (
  req: express.Request,
  res: express.Response
) => {
  console.log("req params", req.params);
  const criteria = {
    name: req.query.name,
    state: req.query.state,
    from: req.query.from,
    to: req.query.to,
  };

  console.log("criteria",criteria)

  const dentalClinics = await axios.get(dentalsUrl);
  const vetClinics = await axios.get(vetsUrl);

  if (dentalClinics.data.length && vetClinics.data.length) {
    const allClinics = [...dentalClinics.data, vetClinics.data];

    console.log("all clinics", allClinics);

    res.status(200).send("OK");
  }
};
