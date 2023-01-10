import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    data:{
        profileData: [
            {
                img: "profile.jpg",
                name: "Samantha",
            }
        ],
        top:[
            {
                title: "Supernatural",
                rating: 4.5,
                duration: '320 Ep',
                genre:"Horror, Fantasy",
                img: "supernatural.jpg",
            },
            {
                title: "Rick and Morty",
                rating: 5,
                duration: '49 Ep',
                genre:"Mini series",
                img: "rick.jpg",
            },
            {
                title: "Code Geass",
                rating: 4.5,
                duration: '10 Ep',
                genre:"Action",
                img: "codegeass.jpg",
            },
        ],
        continue:[
            {
                title: "WandaVision",
                rating: 4.5,
                duration: '320 Ep',
                genre:"Horror, Fantasy",
                img: "wanda.jpg",
            },
            {
                title: "Harley Quinn",
                rating: 5,
                duration: '49 Ep',
                genre:"Mini series",
                img: "harley.jpg",
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

const profile = createSlice({
    name: 'movies',
    initialState,
    reducers: {
    }
})

export default profile.reducer