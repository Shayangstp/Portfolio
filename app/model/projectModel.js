import mongoose from "mongoose";

// Define the schema
const projectSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId, // Automatically generates a new ObjectId if not provided
  },
  title: {
    type: String,
    required: true, // Add required field if necessary
  },
  content: {
    type: String,
    required: true, // Add required field if necessary
  },
  desc: {
    type: String,
    required: true, // Add required field if necessary
  },
  hashtags: {
    type: [String], // Array of strings
    default: [], // Default to an empty array if not provided
  },
});

// Create the model
const Projects =
  mongoose.models.Projects || mongoose.model("Projects", projectSchema);

export default Projects;
