import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    data:{
        movies:[
            {
                title: "Avatar: The Way of Water",
                rating: 5,
                duration: '192 Min',
                genre:"Fantasy",
                img: "avatar.jpg",
            },
            {
                title: "Men",
                rating: 3.5,
                duration: '100 Min',
                genre:"Horror",
                img: "men.jpg",
            },
            {
                title: "The Batman",
                rating: 4.5,
                duration: '176 Min',
                genre:"Action",
                img: "batman.jpeg",
            },
            {
                title: "Black Panther: Wakanda Forever",
                rating: 4.5,
                duration: '161 Min',
                genre:"Action",
                img: "black-panther.jpg",
            },
        ],
        series:[
            {
                title: "The Crown",
                rating: 5,
                duration: '6 Ep',
                genre:"Drama",
                img: "slide.jpg",
            },
            {
                title: "Loki",
                rating: 4.5,
                duration: '6 Ep',
                genre:"Superhero",
                img: "loki.jpg",
            },
            {
                title: "Chernobyl",
                rating: 5,
                duration: '6 Ep',
                genre:"Mini series",
                img: "chernobyl.jpg",
            },
            {
                title: "Rick and Morty",
                rating: 5,
                duration: '49 Ep',
                genre:"Mini series",
                img: "rick.jpg",
            },

        ],
        anime:[
            {
                title: "Attack on Titan",
                rating: 4.5,
                duration: '139 Ep',
                genre:"Action",
                img: "titan-attack.jpg",
            },
            {
                title: "Devilman",
                rating: 5,
                duration: '10 Ep',
                genre:"Fantasy",
                img: "devilman.jpg",
            },
            {
                title: "Shaman King",
                rating: 4,
                duration: '64 Ep',
                genre:"Action",
                img: "shaman-king.jpg",
            },
            {
                title: "Code Geass",
                rating: 4.5,
                duration: '10 Ep',
                genre:"Action",
                img: "codegeass.jpg",
            },

        ],
        genres: [
            {
                title: 'Drama',
                img: "drama.jpg",
            },
            {
                title: 'Thriller',
                img: "thriller.jpg",
            },
            {
                title: 'Sitcom',
                img: "sitcom.jpg",
            },
            {
                title: 'Superhero',
                img: "superhero.jpg",
            },
        ],
    }
}

const movies = createSlice({
    name: 'movies',
    initialState,
    reducers: {
    }
})

export default movies.reducer