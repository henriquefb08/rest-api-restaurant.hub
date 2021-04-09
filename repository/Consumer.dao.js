const Consumer = require("../models/Consumer.model");
const bcrypt = require("bcryptjs");

class ConsumerRepository {
  constructor(ConsumerModel) {
    this.consumer = ConsumerModel;
  }

  // (Signup) Create new Consumer
  create = async (consumer) => {
    const { name, email, password, description } = consumer;
    try {
      const consumer = await this.consumer.findOne({ email });
      if (consumer) {
        throw new Error();
      } else {
        const salt = bcrypt.genSaltSync(10);
        const passwordHash = bcrypt.hashSync(password, salt);

        const createdConsumer = await this.consumer.create({
          email,
          passwordHash,
          name,
          description,
        });

        return createdConsumer;
      }
    } catch (e) {
      throw new Error();
    }
  };

  // (Login) consumer

  findConsumer = async (email) => {
    try {
      const consumer = await this.consumer.findOne({ email });
      return consumer;
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


module.exports = new ConsumerRepository(Consumer);
