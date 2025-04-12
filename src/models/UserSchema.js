import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    location: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true } // Adds createdAt & updatedAt timestamps
);

// Fix the model name consistency
const Users = mongoose.models.Users || mongoose.model("Users", userSchema);

export default Users;
