import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    data:{
        movies:[
            
        ],
        series:[
            {
                title: "The Crown",
                rating: 5,
                episodes: 6,
                genre:"Drama",
                img: "slide.jpg",
            },
            {
                title: "Loki",
                rating: 4.5,
                episodes: 6,
                genre:"Superhero",
                img: "loki.jpg",
            },
            {
                title: "Chernobyl",
                rating: 5,
                episodes: 6,
                genre:"Mini series",
                img: "chernobyl.jpg",
            },
            {
                title: "Rick and Morty",
                rating: 5,
                episodes: 49,
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