let songs = [

]

let id = 3

module.exports = {
    getSongs:(req,res) => {
        res.status(200).send(songs)
    },
    createSongs:(req,res)=>{
        const {title} = req.body
        let newsong = {
            title,
            id
        }
        id++
        songs.push(newsong)
        res.status(200).send(songs)
    },
    deleteSongs: (req, res)=>{
        const {id} = req.params
        let index = songs.findIndex(songs=>songs.id === Number(id))
        if(index !== -1){
            songs.splice(index, 1)
        }
        res.status(200).send(songs)
    },
    updateSongs:(req,res)=>{
        const {id} = req.params
        const {title} = req.body
        let i = songs.findIndex(songs=>songs.id=== + id)
        if(i !== -1){
            songs[i].title=title
        }
        res.status(200).send(songs)
    }
}