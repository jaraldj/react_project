import { createSlice } from '@reduxjs/toolkit'

const menuState = {
    restaurant:  [
    //     {
    //     restaurantName : "Dindigul Thalappakatti",
    //     img : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/gir8quqihxzsita3i7di",
    //     foodList : "Biryani, Barbecue",
            // foodMenu : [
            //     {
            //         id : 1,
            //         foodName : "Thalappakatti Special Mutton Biryani [boneless]",
            //         price : 359,
            //         desc : "Traditional seeraga samba rice cooked with succulent boneless pieces of baby goat meat and hand-grounded spices to create an authentic taste - Served With Raita & Salna.",
            //         category : "Biryani",
            //         imgUrl : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/epu45qctu2xg0rquixoo"
            //     },
            //     {
            //         id : 2,
            //         foodName : "Thalappakatti Chicken 65 Biryani",
            //         price : 309,
            //         desc : "A novel combination of our classic seeraga samba Biryani crowned with succulent chicken 65 chunks - Served With Raita & Salna.",
            //         category : "Biryani"
            //     },{
            //         id : 3,
            //         foodName : "Thalappakatti Veg Biryani",
            //         price : 249,
            //         desc : "Selective vegetable and Traditional seeraga samba Thalappakatti Biryani - Served With Raita and Veg Kurma.",
            //         category : "Biryani"
            //     }
            // ]
    // },{
    //     restaurantName : "Hotel Arya Bhavan",
    //     img : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/apxoeoqyzisb7wl3jkoe",
    //     foodList : "Chinese, North Indian",
    //     foodMenu : [
    //         {
    //             id : 1,
    //             foodName : "Keerai Chapathi",
    //             price : 50,
    //             desc : "",
    //             category : "Breakfast"
    //         },{
    //             id : 2,
    //             foodName : "Idly 2 Pcs",
    //             price : 51,
    //             desc : "",
    //             category : "Breakfast"
    //         },{
    //             id : 3,
    //             foodName : "Idiyappam 2 Pcs",
    //             price : 63,
    //             desc : "",
    //             category : "Breakfast"
    //         },{
    //             id : 4,
    //             foodName : "Veg Briyani",
    //             price : 175,
    //             desc : "",
    //             category : "Biryani"
    //         },{
    //             id : 5,
    //             foodName : "Mushroom Briyani",
    //             price : 200,
    //             desc : "",
    //             category : "Biryani"
    //         },{
    //             id : 6,
    //             foodName : "Arya Special Briyani",
    //             price : 221,
    //             desc : "",
    //             category : "Biryani"
    //         }
    //     ]
    // },{
    //     restaurantName : "Hots Spot - Diners Lounge",
    //     img : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jzyfpnfn7rkajanfionf",
    //     foodList : "Chinese, North Indian, South Indian",
    //     foodMenu : [
    //         {
    //             id : 1,
    //             foodName : "Jeera Rice",
    //             price : 189,
    //             desc : "",
    //             category : "Lunch"
    //         },{
    //             id : 2,
    //             foodName : "South Indian Fish Meals",
    //             price : 279,
    //             desc : "Served With Rice,Sambar,Poriyal,Kootu,Meen Curry,Meen Porippu,Rasam",
    //             category : "Lunch"
    //         },{
    //             id : 3,
    //             foodName : "Curd Rice",
    //             price : 179,
    //             desc : "",
    //             category : "Lunch"
    //         }
    //     ]
    // },{
    //     restaurantName : "Hot Spot - Diners Lounge",
    //     img : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jzyfpnfn7rkajanfionf",
    //     foodList : "Chinese, North Indian, South Indian",
    //     foodMenu : [
    //         {
    //             id : 1,
    //             foodName : "Jeera Rice",
    //             price : 189,
    //             desc : "",
    //             category : "Lunch"
    //         },{
    //             id : 2,
    //             foodName : "South Indian Fish Meals",
    //             price : 279,
    //             desc : "Served With Rice,Sambar,Poriyal,Kootu,Meen Curry,Meen Porippu,Rasam",
    //             category : "Lunch"
    //         },{
    //             id : 3,
    //             foodName : "Curd Rice",
    //             price : 179,
    //             desc : "",
    //             category : "Lunch"
    //         }
    //     ]
    // }
]
}

export const menuSlice = createSlice({
    name : "menu",
    initialState : menuState,
    reducers : {
        view : (state, action) => {
            state.restaurant = action.payload
        }
    }
})

export const { view } =menuSlice.actions

export default menuSlice.reducer