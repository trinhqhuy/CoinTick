class BaseController {
  constructor(model) {
    this.model = model;
  }
  async create(res, object) {
    try {
      await object.save();
      return res.status(200).json("Create palette was success");
    } catch (err) {
      return res.status(500).json(err);
    }
  }
  async read(req, res, _id) {
    try {
      const data = await this.model.find({ _id: req.params.id });
      return res.status(200).json(data);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  // Add more controller methods here as needed
}

module.exports = BaseController;
