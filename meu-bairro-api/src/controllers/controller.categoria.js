import servicesCategoria from "../services/services.categoria.js";

async function Listar(req, res) {
  try {
    const categorias = await servicesCategoria.Listar();

    res.status(200).json(categorias);
  } catch (error) {
    res.status(500).json({error});
  }
};

export default {Listar};