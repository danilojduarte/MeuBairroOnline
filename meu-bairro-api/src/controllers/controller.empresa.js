import servicesEmpresas from "../services/service.empresa.js";

async function Destaques(req, res) {
  try {

    const id_usuario = req.id_usuario;

    const empresas = await servicesEmpresas.Destaques();

    res.status(200).json(empresas);
  } catch (error) {
    res.status(500).json({error});
  }
};

export default {Destaques};