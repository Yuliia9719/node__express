// users
const getUsersHandler = (req, res) => {
  res.end("Response from get users route");
};
const postUsersHandler = (req, res) => {
  res.end("Response from post users route");
};
// users/:userId
const getUserByIdHandler = (req, res) => {
  const userId = req.params["userId"];
  res.end(`Get user by id ${userId}`);
};
const deleteUserByIdHandler = (req, res) => {
  const userId = req.params["userId"];
  res.end(`Delete user by id ${userId}`);
};
const putUserByIdHandler = (req, res) => {
  const userId = req.params["userId"];
  res.end(`Put user by id ${userId}`);
};

export {
  getUsersHandler,
  postUsersHandler,
  getUserByIdHandler,
  deleteUserByIdHandler,
  putUserByIdHandler
};
