var express = require('express')
var router = express.Router();


let animes = [
  {id: 1, name:"Mushoku Tensei", imgName: 'miniaturas/mushoku.jpg', episodios: [
    {number: 1, name: "Episodio 1", url: ["https://streamtape.com/v/MA3d9vaL79h64V/Mushoku_Tensei_-_01.mp4", "https://embedsb.com/riyzuo0ulh6t.html", "https://mega.nz/file/cdoASLwD#x7DAkJr5PiM2S528uKAmKnUXQ-cRF-gI7O_80K5TBlk"] },
    {number: 2, name: "Episodio 2", url: ["https://streamtape.com/v/VYjyqZYRVXIP9P/Mushoku_Tensei_-_02.mp4", "https://embedsb.com/zmdpkj4kw3wb.html", "https://mega.nz/file/NU4W3BRY#TzhvKLPfAB_LGqvofTat4kuKbuCX031jsDr8PujNOho"] },
  ]},
  {id: 2, name: "One Piece", imgName: 'miniaturas/One_Piece.jpg', episodios: [
    { number: 1, name: "Episodio 1", url: ["https://streamtape.com/v/mqMKqGpPk3tb3wJ/One_Piece_-_001.mp4", "https://embedsb.com/vr8wi0unmypg.html", "https://mega.nz/file/hZpkxRpS#gx6p57LWB6zrGn-EWFudKqlmGFVRQP2f9PLzYXk_TKM"]},
    {number: 2, name: "Episodio 2", url: ["https://streamtape.com/v/1DkAjrgWpRtewJ2/One_Piece_-_002.mp4", "https://embedsb.com/3ybvbrg29kwk.html", "https://mega.nz/file/hF5GTDjI#yDtbgsQcajpbUQ0SVxdIBBYvx_sshxnoS8WdPIly8xE"]},
  ]},
  {id: 3, name: "Magi The Labyrinth of Magic", imgName: 'miniaturas/magi.jpg', episodios: [
    {number: 1, name: "Episodio 1", url: ["https://streamtape.com/v/DMQGezDpKmCD4V/Magi_-_The_Labyrinth_of_Magic_-_01.mp4", "https://embedsb.com/am9ugkzc2e78.html", "https://mega.nz/file/kJRQRLiZ#s68VEo7v5uKGrtBOSw6AOG10-t7k_QvqOLjSxqmIQvU"]},
    {number: 2, name: "Episodio 2", url: ["https://streamtape.com/v/ellJbwxa7lhY0y1/Magi_-_The_Labyrinth_of_Magic_-_02.mp4", "https://embedsb.com/o4nrpeywlz87.html", "https://mega.nz/file/xNQGVDIL#V3yvDLsBQacuwqLxVI8gnLCbSbBrocAXW8mqfHLhtx0"]},
  ]},
  {id: 4, name:"Mushoku Tensei", imgName: 'miniaturas/mushoku.jpg', episodios: [
    {number: 1, name: "Episodio 1", url: ["https://streamtape.com/v/MA3d9vaL79h64V/Mushoku_Tensei_-_01.mp4", "https://embedsb.com/riyzuo0ulh6t.html", "https://mega.nz/file/cdoASLwD#x7DAkJr5PiM2S528uKAmKnUXQ-cRF-gI7O_80K5TBlk"] },
    {number: 2, name: "Episodio 2", url: ["https://streamtape.com/v/VYjyqZYRVXIP9P/Mushoku_Tensei_-_02.mp4", "https://embedsb.com/zmdpkj4kw3wb.html", "https://mega.nz/file/NU4W3BRY#TzhvKLPfAB_LGqvofTat4kuKbuCX031jsDr8PujNOho"] },
  ]},
  {id: 5, name: "One Piece", imgName: 'miniaturas/One_Piece.jpg', episodios: [
    { number: 1, name: "Episodio 1", url: ["https://streamtape.com/v/mqMKqGpPk3tb3wJ/One_Piece_-_001.mp4", "https://embedsb.com/vr8wi0unmypg.html", "https://mega.nz/file/hZpkxRpS#gx6p57LWB6zrGn-EWFudKqlmGFVRQP2f9PLzYXk_TKM"]},
    {number: 2, name: "Episodio 2", url: ["https://streamtape.com/v/1DkAjrgWpRtewJ2/One_Piece_-_002.mp4", "https://embedsb.com/3ybvbrg29kwk.html", "https://mega.nz/file/hF5GTDjI#yDtbgsQcajpbUQ0SVxdIBBYvx_sshxnoS8WdPIly8xE"]},
  ]},
  {id: 6, name: "Magi The Labyrinth of Magic", imgName: 'miniaturas/magi.jpg', episodios: [
    {number: 1, name: "Episodio 1", url: ["https://streamtape.com/v/DMQGezDpKmCD4V/Magi_-_The_Labyrinth_of_Magic_-_01.mp4", "https://embedsb.com/am9ugkzc2e78.html", "https://mega.nz/file/kJRQRLiZ#s68VEo7v5uKGrtBOSw6AOG10-t7k_QvqOLjSxqmIQvU"]},
    {number: 2, name: "Episodio 2", url: ["https://streamtape.com/v/ellJbwxa7lhY0y1/Magi_-_The_Labyrinth_of_Magic_-_02.mp4", "https://embedsb.com/o4nrpeywlz87.html", "https://mega.nz/file/xNQGVDIL#V3yvDLsBQacuwqLxVI8gnLCbSbBrocAXW8mqfHLhtx0"]},
  ]},
  {id: 7, name:"Mushoku Tensei", imgName: 'miniaturas/mushoku.jpg', episodios: [
    {number: 1, name: "Episodio 1", url: ["https://streamtape.com/v/MA3d9vaL79h64V/Mushoku_Tensei_-_01.mp4", "https://embedsb.com/riyzuo0ulh6t.html", "https://mega.nz/file/cdoASLwD#x7DAkJr5PiM2S528uKAmKnUXQ-cRF-gI7O_80K5TBlk"] },
    {number: 2, name: "Episodio 2", url: ["https://streamtape.com/v/VYjyqZYRVXIP9P/Mushoku_Tensei_-_02.mp4", "https://embedsb.com/zmdpkj4kw3wb.html", "https://mega.nz/file/NU4W3BRY#TzhvKLPfAB_LGqvofTat4kuKbuCX031jsDr8PujNOho"] },
  ]},
  {id: 8, name: "One Piece", imgName: 'miniaturas/One_Piece.jpg', episodios: [
    { number: 1, name: "Episodio 1", url: ["https://streamtape.com/v/mqMKqGpPk3tb3wJ/One_Piece_-_001.mp4", "https://embedsb.com/vr8wi0unmypg.html", "https://mega.nz/file/hZpkxRpS#gx6p57LWB6zrGn-EWFudKqlmGFVRQP2f9PLzYXk_TKM"]},
    {number: 2, name: "Episodio 2", url: ["https://streamtape.com/v/1DkAjrgWpRtewJ2/One_Piece_-_002.mp4", "https://embedsb.com/3ybvbrg29kwk.html", "https://mega.nz/file/hF5GTDjI#yDtbgsQcajpbUQ0SVxdIBBYvx_sshxnoS8WdPIly8xE"]},
  ]},
  {id: 9, name: "Magi The Labyrinth of Magic", imgName: 'miniaturas/magi.jpg', episodios: [
    {number: 1, name: "Episodio 1", url: ["https://streamtape.com/v/DMQGezDpKmCD4V/Magi_-_The_Labyrinth_of_Magic_-_01.mp4", "https://embedsb.com/am9ugkzc2e78.html", "https://mega.nz/file/kJRQRLiZ#s68VEo7v5uKGrtBOSw6AOG10-t7k_QvqOLjSxqmIQvU"]},
    {number: 2, name: "Episodio 2", url: ["https://streamtape.com/v/ellJbwxa7lhY0y1/Magi_-_The_Labyrinth_of_Magic_-_02.mp4", "https://embedsb.com/o4nrpeywlz87.html", "https://mega.nz/file/xNQGVDIL#V3yvDLsBQacuwqLxVI8gnLCbSbBrocAXW8mqfHLhtx0"]},
  ]},
  {id: 10, name:"Mushoku Tensei", imgName: 'miniaturas/mushoku.jpg', episodios: [
    {number: 1, name: "Episodio 1", url: ["https://streamtape.com/v/MA3d9vaL79h64V/Mushoku_Tensei_-_01.mp4", "https://embedsb.com/riyzuo0ulh6t.html", "https://mega.nz/file/cdoASLwD#x7DAkJr5PiM2S528uKAmKnUXQ-cRF-gI7O_80K5TBlk"] },
    {number: 2, name: "Episodio 2", url: ["https://streamtape.com/v/VYjyqZYRVXIP9P/Mushoku_Tensei_-_02.mp4", "https://embedsb.com/zmdpkj4kw3wb.html", "https://mega.nz/file/NU4W3BRY#TzhvKLPfAB_LGqvofTat4kuKbuCX031jsDr8PujNOho"] },
  ]},
  {id: 11, name: "One Piece", imgName: 'miniaturas/One_Piece.jpg', episodios: [
    { number: 1, name: "Episodio 1", url: ["https://streamtape.com/v/mqMKqGpPk3tb3wJ/One_Piece_-_001.mp4", "https://embedsb.com/vr8wi0unmypg.html", "https://mega.nz/file/hZpkxRpS#gx6p57LWB6zrGn-EWFudKqlmGFVRQP2f9PLzYXk_TKM"]},
    {number: 2, name: "Episodio 2", url: ["https://streamtape.com/v/1DkAjrgWpRtewJ2/One_Piece_-_002.mp4", "https://embedsb.com/3ybvbrg29kwk.html", "https://mega.nz/file/hF5GTDjI#yDtbgsQcajpbUQ0SVxdIBBYvx_sshxnoS8WdPIly8xE"]},
  ]},
  {id: 12, name: "Magi The Labyrinth of Magic", imgName: 'miniaturas/magi.jpg', episodios: [
    {number: 1, name: "Episodio 1", url: ["https://streamtape.com/v/DMQGezDpKmCD4V/Magi_-_The_Labyrinth_of_Magic_-_01.mp4", "https://embedsb.com/am9ugkzc2e78.html", "https://mega.nz/file/kJRQRLiZ#s68VEo7v5uKGrtBOSw6AOG10-t7k_QvqOLjSxqmIQvU"]},
    {number: 2, name: "Episodio 2", url: ["https://streamtape.com/v/ellJbwxa7lhY0y1/Magi_-_The_Labyrinth_of_Magic_-_02.mp4", "https://embedsb.com/o4nrpeywlz87.html", "https://mega.nz/file/xNQGVDIL#V3yvDLsBQacuwqLxVI8gnLCbSbBrocAXW8mqfHLhtx0"]},
  ]},
  {id: 13, name:"Mushoku Tensei", imgName: 'miniaturas/mushoku.jpg', episodios: [
    {number: 1, name: "Episodio 1", url: ["https://streamtape.com/v/MA3d9vaL79h64V/Mushoku_Tensei_-_01.mp4", "https://embedsb.com/riyzuo0ulh6t.html", "https://mega.nz/file/cdoASLwD#x7DAkJr5PiM2S528uKAmKnUXQ-cRF-gI7O_80K5TBlk"] },
    {number: 2, name: "Episodio 2", url: ["https://streamtape.com/v/VYjyqZYRVXIP9P/Mushoku_Tensei_-_02.mp4", "https://embedsb.com/zmdpkj4kw3wb.html", "https://mega.nz/file/NU4W3BRY#TzhvKLPfAB_LGqvofTat4kuKbuCX031jsDr8PujNOho"] },
  ]},
  {id: 14, name: "One Piece", imgName: 'miniaturas/One_Piece.jpg', episodios: [
    { number: 1, name: "Episodio 1", url: ["https://streamtape.com/v/mqMKqGpPk3tb3wJ/One_Piece_-_001.mp4", "https://embedsb.com/vr8wi0unmypg.html", "https://mega.nz/file/hZpkxRpS#gx6p57LWB6zrGn-EWFudKqlmGFVRQP2f9PLzYXk_TKM"]},
    {number: 2, name: "Episodio 2", url: ["https://streamtape.com/v/1DkAjrgWpRtewJ2/One_Piece_-_002.mp4", "https://embedsb.com/3ybvbrg29kwk.html", "https://mega.nz/file/hF5GTDjI#yDtbgsQcajpbUQ0SVxdIBBYvx_sshxnoS8WdPIly8xE"]},
  ]},
  {id: 15, name: "Magi The Labyrinth of Magic", imgName: 'miniaturas/magi.jpg', episodios: [
    {number: 1, name: "Episodio 1", url: ["https://streamtape.com/v/DMQGezDpKmCD4V/Magi_-_The_Labyrinth_of_Magic_-_01.mp4", "https://embedsb.com/am9ugkzc2e78.html", "https://mega.nz/file/kJRQRLiZ#s68VEo7v5uKGrtBOSw6AOG10-t7k_QvqOLjSxqmIQvU"]},
    {number: 2, name: "Episodio 2", url: ["https://streamtape.com/v/ellJbwxa7lhY0y1/Magi_-_The_Labyrinth_of_Magic_-_02.mp4", "https://embedsb.com/o4nrpeywlz87.html", "https://mega.nz/file/xNQGVDIL#V3yvDLsBQacuwqLxVI8gnLCbSbBrocAXW8mqfHLhtx0"]},
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