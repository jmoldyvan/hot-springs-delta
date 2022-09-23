const HotSpring = require('../models/HotSpringInfo')



module.exports = {
    getHSDBInfo: async (req,res)=>{
                try{
                    const allHotSpringsInfo = await HotSpring.find({})
                    console.log(allHotSpringsInfo)  
                    return res.json(allHotSpringsInfo)          
                }catch(err){
                    console.log(err)
                }
    },
    findNearest: async (req,res)=>{
        try{
            console.log('POST GOT');
            const {  lng, lat } = req.body
            console.log('POST GOT');
            results = await HotSpring.find({
                loc: {
                    $near:{
                    $geometry: {type: "Point", coordinates: [ lng, lat ],},
                    // 500mi = 804672meter  150mi = 241402meter 50mi = 80467.2 10mi=1609.34 5=8046.72
                    $maxDistance: 804672}
                }
                })
                res.json(results)          
    }
    catch(err){
        console.log(err)
    }
}
}