var express = require('express')
var router = express.Router();


let animes = [
  {id: 1, name:"Mushoku Tensei", imgName: 'miniaturas/mushoku.jpg', episodios: [
    {number: 1, name: "Episodio 1", url: ["www.as.com",] },
    {number: 2, name: "Episodio 2", url: ["www.as.com",] },
  ]},
  {id: 2, name: "One Piece", imgName: 'miniaturas/One_Piece.jpg', episodios: [
    { number: 1, name: "Episodio 1", url: ["www.as.com",]},
    {number: 2, name: "Episodio 2", url: ["www.as.com",]},
  ]},
  {id: 3, name: "Magi The Labyrinth of Magic", imgName: 'miniaturas/magi.jpg', episodios: [
    {number: 1, name: "Episodio 1", url: ["https://embedsb.com/e/zem989w6glqw.html", "https://mega.nz/embed/YJwGDbJD#E9cVCSbgUcmNRvAO4xKMwZqw_bv_aOJ5Q5Pb27QoAf4"]},
    {number: 2, name: "Episodio 2", url: ["www.as.com",]},
  ]},
  {id: 4, name: "Mushoku Tensei", imgName: 'miniaturas/mushoku.jpg', episodios: [
    {number: 1, name: "Episodio 1", url: ["www.as.com",] },
    {number: 2, name: "Episodio 2", url: ["www.as.com",] },
  ]},
  {id: 5, name: "One Piece", imgName: 'miniaturas/One_Piece.jpg', episodios: [
    { number: 1, name: "Episodio 1", url: ["www.as.com",]},
    {number: 2, name: "Episodio 2", url: ["www.as.com",]},
  ]},
  {id: 6, name: "Magi The Labyrinth of Magic", imgName: 'miniaturas/magi.jpg', episodios: [
    {number: 1, name: "Episodio 1", url: ["https://embedsb.com/e/zem989w6glqw.html", "https://mega.nz/embed/YJwGDbJD#E9cVCSbgUcmNRvAO4xKMwZqw_bv_aOJ5Q5Pb27QoAf4"]},
    {number: 2, name: "Episodio 2", url: ["www.as.com",]},
  ]},

];



router.get('/', (req, res) => {
  var query = (req.query['q'] || '').toLowerCase();
  if (query) {
    const foundAnimes = animes.filter(
      (anime) => anime.name.toLowerCase().indexOf(query) != -1);
    return res.status(200).json(foundAnimes);
  }
  return res.status(200).json(animes);
});

router.get('/:id', (req, res) => {
  let id = req.params.id;
  const foundAnimes = animes.find(u => u.id === +id);
  if (foundAnimes) {
    return res.status(200).json(foundAnimes);
  }
  return res.status(404);
});

router.post('/', (req, res) => {
  let anime = req.body;
  anime.id = animes.length + 1;
  let foundAnime = animes.find(each => each.id === anime.id);
  if (foundAnime) {
    return res.status(400)
      .json({ msg: 'Anime with id ' + anime.id + ' already exists' });
  }
  products.push(anime);
  return res.status(200).json({ msg: 'Anime with id ' + anime.id + ' successfully created' });
});

router.patch('/:id', (req, res) => {
  let animeId = req.params.id;
  let foundAnime = animes.find(fp => fp.id === +animeId);
  if (foundAnime) {

    foundAnime.id = req.body.id;
    foundAnime.imgBase64 = req.body.imgBase64;
    foundAnime.name = req.body.name;
    foundAnime.imgName = req.body.imgName;
    foundAnime.episodios = req.body.episodios;


    let msg = 'Product with id ' + animeId + ' is now edited';
    return res.status(200).json({ msg: msg });
  }
  return res.status(400).json({ msg: 'Anime with id ' + animeId + ' not found!' });
});


router.delete('/:id', (req, res) => {
  let id = req.params.id;
  animes = animes.filter(p => p.id != id);
  return res.status(200).json({ msg: 'Anime with id ' + id + ' successfully deleted' });
})

module.exports = router;