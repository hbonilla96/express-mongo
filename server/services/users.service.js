import users from "../models/users";

const createUser = user => {
  users.create(user);
};

const getAll = cb => {
  users.find({}, cb);
};

const findUserByEmail = (email, cb) => {
  users.findOne({ email }, cb);
};

const deleteByEmail = email => {
  users.deleteOne({ email });
};

export default {
  createUser,
  getAll,
  findUserByEmail
};
