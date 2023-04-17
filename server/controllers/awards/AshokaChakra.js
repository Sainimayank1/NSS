import Chakra from "../../models/gallantryModel/ashokaChakra.js"

export const AshokaVir = async (req , res) => {
  try {
    const response = Chakra.find();
    if(response)
        return res.status(200).json({msg:"All Posts" , data:response});

  } catch (error) {
    return res.status(500).json({error});
  }
}



export const AshokaSingleVir = async (req , res) => {
  try {
    const response = Chakra.find();
    if(response)
    return res.status(200).json({msg:"All Posts" , data:response});
    
  } catch (error) {
    return res.status(500).json({error});
  }
}
