var express = require('express')
var router = express.Router();


let animes = [
  {id: 1, name:"Mushoku Tensei", imgName: 'miniaturas/mushoku.jpg', episodios: [
    {number: 1, name: "Episodio 1", url: ["https://streamta.pe/e/MA3d9vaL79h64V/", "https://embedsb.com/e/riyzuo0ulh6t.html", "https://mega.nz/embed/cdoASLwD#x7DAkJr5PiM2S528uKAmKnUXQ-cRF-gI7O_80K5TBlk!"] },
    {number: 2, name: "Episodio 2", url: ["https://streamta.pe/e/VYjyqZYRVXIP9P/", "https://embedsb.com/e/zmdpkj4kw3wb.html", "https://mega.nz/file/NU4W3BRY#TzhvKLPfAB_LGqvofTat4kuKbuCX031jsDr8PujNOho"] },
  ]},
  {id: 2, name: "One Piece", imgName: 'miniaturas/One_Piece.jpg', episodios: [
    { number: 1, name: "Episodio 1", url: ["https://streamta.pe/e/mqMKqGpPk3tb3wJ/", "https://embedsb.com/e/vr8wi0unmypg.html", "https://mega.nz/file/hZpkxRpS#gx6p57LWB6zrGn-EWFudKqlmGFVRQP2f9PLzYXk_TKM"]},
    {number: 2, name: "Episodio 2", url: ["https://streamta.pe/e/1DkAjrgWpRtewJ2/", "https://embedsb.com/e/3ybvbrg29kwk.html", "https://mega.nz/file/hF5GTDjI#yDtbgsQcajpbUQ0SVxdIBBYvx_sshxnoS8WdPIly8xE"]},
  ]},
  {id: 3, name: "Magi The Labyrinth of Magic", imgName: 'miniaturas/magi.jpg', episodios: [
    {number: 1, name: "Episodio 1", url: ["https://streamta.pe/e/DMQGezDpKmCD4V/", "https://embedsb.com/e/am9ugkzc2e78.html", "https://mega.nz/file/kJRQRLiZ#s68VEo7v5uKGrtBOSw6AOG10-t7k_QvqOLjSxqmIQvU"]},
    {number: 2, name: "Episodio 2", url: ["https://streamta.pe/e/ellJbwxa7lhY0y1/", "https://embedsb.come/e/o4nrpeywlz87.html", "https://mega.nz/file/xNQGVDIL#V3yvDLsBQacuwqLxVI8gnLCbSbBrocAXW8mqfHLhtx0"]},
  ]},
  {id: 4, name:"Mushoku Tensei", imgName: 'miniaturas/mushoku.jpg', episodios: [
    {number: 1, name: "Episodio 1", url: ["https://streamta.pe/e/MA3d9vaL79h64V/", "https://embedsb.com/e/riyzuo0ulh6t.html", "https://mega.nz/embed/cdoASLwD#x7DAkJr5PiM2S528uKAmKnUXQ-cRF-gI7O_80K5TBlk!"] },
    {number: 2, name: "Episodio 2", url: ["https://streamta.pe/e/VYjyqZYRVXIP9P/", "https://embedsb.com/e/zmdpkj4kw3wb.html", "https://mega.nz/file/NU4W3BRY#TzhvKLPfAB_LGqvofTat4kuKbuCX031jsDr8PujNOho"] },
  ]},
  {id: 5, name: "One Piece", imgName: 'miniaturas/One_Piece.jpg', episodios: [
    { number: 1, name: "Episodio 1", url: ["https://streamta.pe/e/mqMKqGpPk3tb3wJ/", "https://embedsb.com/e/vr8wi0unmypg.html", "https://mega.nz/file/hZpkxRpS#gx6p57LWB6zrGn-EWFudKqlmGFVRQP2f9PLzYXk_TKM"]},
    {number: 2, name: "Episodio 2", url: ["https://streamta.pe/e/1DkAjrgWpRtewJ2/", "https://embedsb.com/e/3ybvbrg29kwk.html", "https://mega.nz/file/hF5GTDjI#yDtbgsQcajpbUQ0SVxdIBBYvx_sshxnoS8WdPIly8xE"]},
  ]},
  {id: 6, name: "Magi The Labyrinth of Magic", imgName: 'miniaturas/magi.jpg', episodios: [
    {number: 1, name: "Episodio 1", url: ["https://streamta.pe/e/DMQGezDpKmCD4V/", "https://embedsb.com/e/am9ugkzc2e78.html", "https://mega.nz/file/kJRQRLiZ#s68VEo7v5uKGrtBOSw6AOG10-t7k_QvqOLjSxqmIQvU"]},
    {number: 2, name: "Episodio 2", url: ["https://streamta.pe/e/ellJbwxa7lhY0y1/", "https://embedsb.come/e/o4nrpeywlz87.html", "https://mega.nz/file/xNQGVDIL#V3yvDLsBQacuwqLxVI8gnLCbSbBrocAXW8mqfHLhtx0"]},
  ]},
  {id: 7, name:"Mushoku Tensei", imgName: 'miniaturas/mushoku.jpg', episodios: [
    {number: 1, name: "Episodio 1", url: ["https://streamta.pe/e/MA3d9vaL79h64V/", "https://embedsb.com/e/riyzuo0ulh6t.html", "https://mega.nz/embed/cdoASLwD#x7DAkJr5PiM2S528uKAmKnUXQ-cRF-gI7O_80K5TBlk!"] },
    {number: 2, name: "Episodio 2", url: ["https://streamta.pe/e/VYjyqZYRVXIP9P/", "https://embedsb.com/e/zmdpkj4kw3wb.html", "https://mega.nz/file/NU4W3BRY#TzhvKLPfAB_LGqvofTat4kuKbuCX031jsDr8PujNOho"] },
  ]},
  {id: 8, name: "One Piece", imgName: 'miniaturas/One_Piece.jpg', episodios: [
    { number: 1, name: "Episodio 1", url: ["https://streamta.pe/e/mqMKqGpPk3tb3wJ/", "https://embedsb.com/e/vr8wi0unmypg.html", "https://mega.nz/file/hZpkxRpS#gx6p57LWB6zrGn-EWFudKqlmGFVRQP2f9PLzYXk_TKM"]},
    {number: 2, name: "Episodio 2", url: ["https://streamta.pe/e/1DkAjrgWpRtewJ2/", "https://embedsb.com/e/3ybvbrg29kwk.html", "https://mega.nz/file/hF5GTDjI#yDtbgsQcajpbUQ0SVxdIBBYvx_sshxnoS8WdPIly8xE"]},
  ]},
  {id: 9, name: "Magi The Labyrinth of Magic", imgName: 'miniaturas/magi.jpg', episodios: [
    {number: 1, name: "Episodio 1", url: ["https://streamta.pe/e/DMQGezDpKmCD4V/", "https://embedsb.com/e/am9ugkzc2e78.html", "https://mega.nz/file/kJRQRLiZ#s68VEo7v5uKGrtBOSw6AOG10-t7k_QvqOLjSxqmIQvU"]},
    {number: 2, name: "Episodio 2", url: ["https://streamta.pe/e/ellJbwxa7lhY0y1/", "https://embedsb.come/e/o4nrpeywlz87.html", "https://mega.nz/file/xNQGVDIL#V3yvDLsBQacuwqLxVI8gnLCbSbBrocAXW8mqfHLhtx0"]},
  ]},
  {id: 10, name:"Mushoku Tensei", imgName: 'miniaturas/mushoku.jpg', episodios: [
    {number: 1, name: "Episodio 1", url: ["https://streamta.pe/e/MA3d9vaL79h64V/", "https://embedsb.com/e/riyzuo0ulh6t.html", "https://mega.nz/embed/cdoASLwD#x7DAkJr5PiM2S528uKAmKnUXQ-cRF-gI7O_80K5TBlk!"] },
    {number: 2, name: "Episodio 2", url: ["https://streamta.pe/e/VYjyqZYRVXIP9P/", "https://embedsb.com/e/zmdpkj4kw3wb.html", "https://mega.nz/file/NU4W3BRY#TzhvKLPfAB_LGqvofTat4kuKbuCX031jsDr8PujNOho"] },
  ]},
  {id: 11, name: "One Piece", imgName: 'miniaturas/One_Piece.jpg', episodios: [
    { number: 1, name: "Episodio 1", url: ["https://streamta.pe/e/mqMKqGpPk3tb3wJ/", "https://embedsb.com/e/vr8wi0unmypg.html", "https://mega.nz/file/hZpkxRpS#gx6p57LWB6zrGn-EWFudKqlmGFVRQP2f9PLzYXk_TKM"]},
    {number: 2, name: "Episodio 2", url: ["https://streamta.pe/e/1DkAjrgWpRtewJ2/", "https://embedsb.com/e/3ybvbrg29kwk.html", "https://mega.nz/file/hF5GTDjI#yDtbgsQcajpbUQ0SVxdIBBYvx_sshxnoS8WdPIly8xE"]},
  ]},
  {id: 12, name: "Magi The Labyrinth of Magic", imgName: 'miniaturas/magi.jpg', episodios: [
    {number: 1, name: "Episodio 1", url: ["https://streamta.pe/e/DMQGezDpKmCD4V/", "https://embedsb.com/e/am9ugkzc2e78.html", "https://mega.nz/file/kJRQRLiZ#s68VEo7v5uKGrtBOSw6AOG10-t7k_QvqOLjSxqmIQvU"]},
    {number: 2, name: "Episodio 2", url: ["https://streamta.pe/e/ellJbwxa7lhY0y1/", "https://embedsb.come/e/o4nrpeywlz87.html", "https://mega.nz/file/xNQGVDIL#V3yvDLsBQacuwqLxVI8gnLCbSbBrocAXW8mqfHLhtx0"]},
  ]},
  {id: 13, name:"Mushoku Tensei", imgName: 'miniaturas/mushoku.jpg', episodios: [
    {number: 1, name: "Episodio 1", url: ["https://streamta.pe/e/MA3d9vaL79h64V/", "https://embedsb.com/e/riyzuo0ulh6t.html", "https://mega.nz/embed/cdoASLwD#x7DAkJr5PiM2S528uKAmKnUXQ-cRF-gI7O_80K5TBlk!"] },
    {number: 2, name: "Episodio 2", url: ["https://streamta.pe/e/VYjyqZYRVXIP9P/", "https://embedsb.com/e/zmdpkj4kw3wb.html", "https://mega.nz/file/NU4W3BRY#TzhvKLPfAB_LGqvofTat4kuKbuCX031jsDr8PujNOho"] },
  ]},
  {id: 14, name: "One Piece", imgName: 'miniaturas/One_Piece.jpg', episodios: [
    { number: 1, name: "Episodio 1", url: ["https://streamta.pe/e/mqMKqGpPk3tb3wJ/", "https://embedsb.com/e/vr8wi0unmypg.html", "https://mega.nz/file/hZpkxRpS#gx6p57LWB6zrGn-EWFudKqlmGFVRQP2f9PLzYXk_TKM"]},
    {number: 2, name: "Episodio 2", url: ["https://streamta.pe/e/1DkAjrgWpRtewJ2/", "https://embedsb.com/e/3ybvbrg29kwk.html", "https://mega.nz/file/hF5GTDjI#yDtbgsQcajpbUQ0SVxdIBBYvx_sshxnoS8WdPIly8xE"]},
  ]},
  {id: 15, name: "Magi The Labyrinth of Magic", imgName: 'miniaturas/magi.jpg', episodios: [
    {number: 1, name: "Episodio 1", url: ["https://streamta.pe/e/DMQGezDpKmCD4V/", "https://embedsb.com/e/am9ugkzc2e78.html", "https://mega.nz/file/kJRQRLiZ#s68VEo7v5uKGrtBOSw6AOG10-t7k_QvqOLjSxqmIQvU"]},
    {number: 2, name: "Episodio 2", url: ["https://streamta.pe/e/ellJbwxa7lhY0y1/", "https://embedsb.come/e/o4nrpeywlz87.html", "https://mega.nz/file/xNQGVDIL#V3yvDLsBQacuwqLxVI8gnLCbSbBrocAXW8mqfHLhtx0"]},
  ]},
  {id: 16, name:"Mushoku Tensei", imgName: 'miniaturas/mushoku.jpg', episodios: [
    {number: 1, name: "Episodio 1", url: ["https://streamta.pe/e/MA3d9vaL79h64V/", "https://embedsb.com/e/riyzuo0ulh6t.html", "https://mega.nz/embed/cdoASLwD#x7DAkJr5PiM2S528uKAmKnUXQ-cRF-gI7O_80K5TBlk!"] },
    {number: 2, name: "Episodio 2", url: ["https://streamta.pe/e/VYjyqZYRVXIP9P/", "https://embedsb.com/e/zmdpkj4kw3wb.html", "https://mega.nz/file/NU4W3BRY#TzhvKLPfAB_LGqvofTat4kuKbuCX031jsDr8PujNOho"] },
  ]},
  {id: 17, name: "One Piece", imgName: 'miniaturas/One_Piece.jpg', episodios: [
    { number: 1, name: "Episodio 1", url: ["https://streamta.pe/e/mqMKqGpPk3tb3wJ/", "https://embedsb.com/e/vr8wi0unmypg.html", "https://mega.nz/file/hZpkxRpS#gx6p57LWB6zrGn-EWFudKqlmGFVRQP2f9PLzYXk_TKM"]},
    {number: 2, name: "Episodio 2", url: ["https://streamta.pe/e/1DkAjrgWpRtewJ2/", "https://embedsb.com/e/3ybvbrg29kwk.html", "https://mega.nz/file/hF5GTDjI#yDtbgsQcajpbUQ0SVxdIBBYvx_sshxnoS8WdPIly8xE"]},
  ]},
  {id: 18, name: "Magi The Labyrinth of Magic", imgName: 'miniaturas/magi.jpg', episodios: [
    {number: 1, name: "Episodio 1", url: ["https://streamta.pe/e/DMQGezDpKmCD4V/", "https://embedsb.com/e/am9ugkzc2e78.html", "https://mega.nz/file/kJRQRLiZ#s68VEo7v5uKGrtBOSw6AOG10-t7k_QvqOLjSxqmIQvU"]},
    {number: 2, name: "Episodio 2", url: ["https://streamta.pe/e/ellJbwxa7lhY0y1/", "https://embedsb.come/e/o4nrpeywlz87.html", "https://mega.nz/file/xNQGVDIL#V3yvDLsBQacuwqLxVI8gnLCbSbBrocAXW8mqfHLhtx0"]},
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