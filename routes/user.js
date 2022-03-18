const express = require("express");
const router = express.Router();

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");

// Get blogs router
const blogRouter = require("./blog");

const { protect, authorize } = require("../middlewares/auth");

router.use(protect);

// Re-route
router.use("/:userId/blogs", blogRouter);

router.use(authorize("admin"));

router.route("/").get(getUsers).post(createUser);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
