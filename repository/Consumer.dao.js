const Consumer = require("../models/Consumer.model");

class ConsumerRepository {
  constructor(ConsumerModel) {
    this.consumer = ConsumerModel;
  }

  // Create new Consumer
  create = async (newConsumer) => {
    try {
      const createdConsumer = await this.consumer.create(newConsumer);
      return createdConsumer;
    } catch (e) {
      throw new Error();
    }
  };

  // Edit any Consumer
  edit = async (id, consumer) => {
    try {
      const editConsumer = await this.consumer.findByIdAndUpdate(id, consumer, {new:true});
      return editConsumer;
    } catch (error) {
      throw new Error();
    }
  };
}

module.exports = new ConsumerRepository(Consumer);
