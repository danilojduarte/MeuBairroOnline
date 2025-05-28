import servicesBanner from "../services/service.banner.js";

async function Listar(req, res) {
  try {
    const banners = await servicesBanner.Listar();

    res.status(200).json(banners);
  } catch (error) {
    res.status(500).json({error});
  }
};

export default {Listar};