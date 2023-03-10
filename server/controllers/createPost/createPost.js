import Post from "../../models/Post.js"
import cloudinary from "cloudinary";

const createPost = async (req, res) => {
        const errors = [];
        const files = req.files;
        const { title, description, slug, _id, name} = req.fields;
        // Validation

        if (title === "") {
            errors.push({ msg: "Tittle is required" });
        }
        if (description === "") {
            errors.push({ msg: "Description is required" });
        }
        if (slug === "") {
            errors.push({ msg: "Slug is required" });
        }
        if (files.length == 0) {
            errors.push({ msg: "Image is required" });
        }
        else {
            const { type } = files.image
            const split = type.split("/")
            const ext = split[1].toLowerCase();
            if (ext !== "jpg" && ext !== "jpeg" && ext !== "png")
                errors.push({ msg: ext + " is not valid Extension" })
            if(files.image.size > 5242700)
                errors.push({msg :"Image size should not greater than 5mb"})
        }

        const slugCheck = await Post.findOne({ slug });
        if (slugCheck) {
            errors.push({ msg: "Please choose a unique Slug/URL" })
        }



        if (errors.length != 0) {
            return res.status(400).json({ errors, files })
        }
        else {
            try {
                cloudinary.config({ 
                    cloud_name: process.env.CLOUD_NAME, 
                    api_key: process.env.CLOUD_KEY, 
                    api_secret: process.env.CLOUD_KEY_SECRET 
                });  
                const result = await cloudinary.uploader.upload(files.image.path, {public_id: "myfolder/UsersImages",})
                const response = await Post.create({
                    title,
                    image: {
                        public_id: result.public_id,
                        url: result.secure_url
                    },
                    description,
                    slug,
                    userName: name,
                    userId: _id
                });
                if (response)
                    return res.status(200).json([{ msg: "Your post has been created Succesfully" }]);
            }
            catch (error) {
                return res.status(500).json([{ msg: error }])
            }
        }
}

export default createPost