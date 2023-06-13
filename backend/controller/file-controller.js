import File from '../models/file.js';

export const uploadFile = async (req,res) => {
    const fileObj = {
        path: req.file.path,
        name: req.file.originalname,
    }
    console.log(fileObj);
    try {
        const file = await File.create(fileObj);
        res.status(200).json({path: `http://127.0.0.1:8000/file/${file._id}`});
    } catch (error) {
        console.error(error.message);
        res.status(500).json({error: error.message});
    }
}

export const downloadFile = async (req,res) => {
    try {
        const file = await File.findById(req.params.fileId);
        file.downloadCount++;
        await file.save();
        res.download(file.path,file.name);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({error: error.message});
    }
}