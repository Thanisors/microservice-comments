const { DB } = require("../firebase/admin");

exports.service = async (req, res) => {
    const commentref = DB.collection("comments");
    try {
        commentref.get().then(snapshot => {
            const data = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) 
            return res.json(data);
        })
    } catch (error) {
        return res.json({ error:error })
    }
} 

exports.adduser = async (req, res) => {
    
    try {
        const data = await DB.collection("comments").add(req.body);
        return res.json(data);
    } catch (error) {
        return res.json({ error:error })
        
    }
}

