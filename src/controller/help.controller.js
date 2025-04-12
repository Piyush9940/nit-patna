import helpModel from "../models/help.model"; 
export const searchResults = async (req, res) => {
    try {
        const searchResults = await helpModel.find();
        res.status(200).json(searchResults);
    } catch (error) {
        console.error("Error fetching search results:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
export const faq = async (req,res) => {
    try {
        const faqResults = await helpModel.find();
        res.status(200).json(faqResults);
    } catch (error) {
        console.error("Error fetching FAQ results:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
export const contact = async (req,res) => {
    try {
        const contactResults = await helpModel.find();
        res.status(200).json(contactResults);
    } catch (error) {
        console.error("Error fetching contact results:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
export const addHelp = async (req, res) => {
    try {
        const { help, helpStatus, email, phone, helpDescription } = req.body;
        const newHelp = new helpModel({
            help,
            helpStatus,
            email,
            phone,
            helpDescription
        });
        await newHelp.save();
        res.status(201).json(newHelp);
    } catch (error) {
        console.error("Error adding help:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
export const updateHelp= async (req,res)=>{
    try {
        const { id } = req.params;
        const { help, helpStatus, email, phone, helpDescription } = req.body;
        const updatedHelp = await helpModel.findByIdAndUpdate(
            id,
            {
                help,
                helpStatus,
                email,
                phone,
                helpDescription
            },
            { new: true }
        );
        res.status(200).json(updatedHelp);
    } catch (error) {
        console.error("Error updating help:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
export const deleteHelp = async (req, res) => {
    try {
        const { id } = req.params;
        await helpModel.findByIdAndDelete(id);
        res.status(200).json({ message: "Help deleted successfully" });
    } catch (error) {
        console.error("Error deleting help:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
export const getHelpById = async (req, res) => {
    try {
        const { id } = req.params;
        const help = await helpModel.findById(id);
        if (!help) {
            return res.status(404).json({ message: "Help not found" });
        }
        res.status(200).json(help);
    } catch (error) {
        console.error("Error fetching help by ID:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

