import { createSlice } from "@reduxjs/toolkit";

let nextUserId = 1;

// Get users from localStorage or use default values
const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
const defaultUser = {
  id: (nextUserId++).toString(),
  name: 'sakshi',
  email: 'sakshi@gmail.com',
  contact: '2287983789',
  weekday:'Mon',
  gender: 'female',
  dob: '2024-02-23',
};

const initialState = storedUsers.length > 0 ? storedUsers : [defaultUser];

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const newUser = {
        ...action.payload,
        id:(nextUserId++).toString(),
      };

      state.push(newUser);

      // Save the updated state in localStorage
      localStorage.setItem("users", JSON.stringify(state));
    },
    editUser:(state, action) =>{
        const {id, name, email, contact,weekday, gender, dob} = action.payload;
        const existingUser = state.find(user => user.id === id);
    
        if(existingUser)
        {
            existingUser.name =name;
            existingUser.email=email;
            existingUser.contact=contact;
            existingUser.weekday=weekday;
            existingUser.gender=gender;
            existingUser.dob=dob;
        }
        localStorage.setItem("users", JSON.stringify(state) );
      },
      deleteUser: (state, action) => {
        const { id } = action.payload;
        const existingUserIndex = state.findIndex((user) => user.id === id);
      
        if (existingUserIndex !== -1) {

          const newState = [...state.slice(0, existingUserIndex), ...state.slice(existingUserIndex + 1)];
      
      
          localStorage.setItem('users', JSON.stringify(newState));
      

          return newState;
        }
      
        return state;
      },
      
      
      
  },
  
});

export const { addUser, editUser, deleteUser} = userSlice.actions;
export default userSlice.reducer;
