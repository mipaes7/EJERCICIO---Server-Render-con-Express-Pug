require('dotenv').config();
const apiKey = process.env.APIKEY;


const getHome = async (req, res) => {
    try {
        res.status(200).render("home.pug");
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
};

// const getFilm = async (req, res) => {
//     const title = req.body;
//     console.log(title);
//     if (!title) {
//         return res.redirect('/');
//     }
//     try {
//         const resp = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${title}`);
//         const data = await resp.json();
//         console.log(data);
//         res.render('film.pug', { film: data });
//     } catch (error) {
//         console.log(error);
//     }
// };

const createFilm = async (req, res) => {
    const { title } = req.body;
    if (title) {
        res.redirect(`/film/${title}`);
    } else {
        res.redirect('/');
    }
};
// const createFilm = async (req, res) => {
//     const { title } = req.body;
//     try {
//         const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`);
//         const data = await response.json();
//         if (data.Response === "True") {
//             res.status(200).render("film.pug", { film: data });
//         } else {
//             res.status(404).render("film.pug", { film: null, error: "Película no encontrada" });
//         }
//     } catch (error) {
//         console.log(`ERROR: ${error.stack}`);
//         res.status(500).json({ msj: `ERROR: ${error.stack}` });
//     }
// };

const getFilm = async (req, res) => {
    const title = req.params.title;
    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`);
        const data = await response.json();
        if (data.Response === "True") {
            res.status(200).render("film.pug", { film: data });
        } else {
            // res.status(404).render("film.pug", { film: null, error: "Película no encontrada" });
            res.redirect('/');
        }
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(500).json({ msj: `ERROR: ${error.stack}` });
    }
};

module.exports = {
    getHome,
    getFilm,
    createFilm
}