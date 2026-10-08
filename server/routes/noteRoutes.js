import express from "express";

const noteRouter = express.Router();


// notes -> {id, title, content, createdAt, updatedAt, createdBy, userId} 

noteRouter.post("/", (req, res) => {
    const { title, content } = req.body;


    // Add your note creation logic here
    res.status(201).json({ message: "Note created successfully" });
});

noteRouter.get("/", (req, res) => {
    // Add your note retrieval logic here
    res.status(200).json({ message: "Notes retrieved successfully" });
});

noteRouter.get("/:id", (req, res) => {
    const { id } = req.params;

    // Add your note retrieval logic here
    res.status(200).json({ message: `Note with ID ${id} retrieved successfully` });
});

noteRouter.patch("/:id", (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    // Add your note update logic here
    res.status(200).json({ message: `Note with ID ${id} updated successfully` });
});

noteRouter.delete("/:id", (req, res) => {
    const { id } = req.params;
    // Add your note deletion logic here
    res.status(200).json({ message: `Note with ID ${id} deleted successfully` });
});

noteRouter.put("/:id/share", (req, res) => {
    const { id } = req.params;
    // Add your note sharing logic here
    res.status(200).json({ message: `Note with ID ${id} shared successfully` });
});


export default noteRouter;
