const Consumer = require("../models/Consumer.model");
const bcrypt = require("bcryptjs");

class ConsumerRepository {
  constructor(ConsumerModel) {
    this.consumer = ConsumerModel;
  }

  // Create new Consumer
  create = async (consumer) => {
    const { email, passaword } = consumer;
    try {
      const consumer = await this.consumer.findOne({ email });
      if (consumer) {
        throw new Error();
      } else {
        const salt = bcrypt.genSaltSync(10);
        const passwordHash = bcrypt.hashSync(passaword, salt);
        const createdConsumer = await this.consumer.create({
          email,
          passwordHash
        });
        return createdConsumer;
      }
    } catch (e) {
      throw new Error();
    }
  };

  // Edit any Consumer
  edit = async (id, consumer) => {
    try {
      const editConsumer = await this.consumer.findByIdAndUpdate(id, consumer, {
        new: true,
      });
      return editConsumer;
    } catch (error) {
      throw new Error();
    }
  };
}

//Create route to login to Consumer;

//Create route to logout to Consumer;

module.exports = new ConsumerRepository(Consumer);
