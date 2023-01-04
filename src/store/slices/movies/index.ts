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
    }
}

const movies = createSlice({
    name: 'movies',
    initialState,
    reducers: {
    }
})

export default movies.reducer