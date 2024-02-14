
import styled from "styled-components";
import { GlobalStyle } from "../Styles/GlobalStyle";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas/signUpSchema";
import {nanoid} from 'nanoid';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../features/userSlice";

const initialValues = {
  id:"",
  name: "",
  email: "",
  contact: "",
  weekday:[],
  gender:"",
  dob:"",
};

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        dispatch(addUser({id:values.id, ...values}))
        navigate('/UserList')
      },
    });
  console.log(
    errors
  );

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <div className="container">
          <div className="modal">
            <div className="modal-container">
              <div className="modal-left">
                <h1 className="modal-title">Welcome!</h1>
                <p className="modal-desc">
                 Front End Project using React.js
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="input-block">
                    <label htmlFor="name" className="input-label">
                      Name
                    </label>
                    <input
                      type="name"
                      autoComplete="off"
                      name="name"
                      id="name"
                      placeholder="Name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.name && touched.name ? (
                      <p className="form-error">{errors.name}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="email" className="input-label">
                      Email
                    </label>
                    <input
                      type="email"
                      autoComplete="off"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="contact" className="input-label">
                      Contact
                    </label>
                    <input
                      type="number"
                      autoComplete="off"
                      name="contact"
                      id="contact"
                      placeholder="XXXXXXXXX"
                      value={values.contact}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.contact && touched.contact ? (
                      <p className="form-error">{errors.contact}</p>
                    ) : null}
                  </div>
        
                    <label htmlFor="weekday" className="input-label">
                      WeekDay
                    </label>
                    <div className="input-weekday">
                    <label className="input-label1">
                      <input type="checkbox"
                      autoComplete="off"
                      name="weekday"
                      id="weekday"
                      value="Mon"
                      checked={values.weekday.includes('Mon')}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      /> Mon
                    </label>

                    <label className="input-label1">
                      <input type="checkbox"
                      autoComplete="off"
                      name="weekday"
                      id="weekday"
                      value="Tue"
                      checked={values.weekday.includes('Tue')}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      /> Tue
                    </label>

                    <label className="input-label1">
                      <input type="checkbox"
                      autoComplete="off"
                      name="weekday"
                      id="weekday"
                      value="Wed"
                      checked={values.weekday.includes('Wed')}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      /> Wed
                    </label>

                    <label className="input-label1">
                      <input type="checkbox"
                      autoComplete="off"
                      name="weekday"
                      id="weekday"
                      value="Thu"
                      checked={values.weekday.includes('Thu')}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      /> Thu
                    </label>
                    <label className="input-label1">
                      <input type="checkbox"
                      autoComplete="off"
                      name="weekday"
                      id="weekday"
                      value="Fri"
                      checked={values.weekday.includes('Fri')}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      /> Fri
                    </label>
                    <label className="input-label1">
                      <input type="checkbox"
                      autoComplete="off"
                      name="weekday"
                      id="weekday"
                      value="Sat"
                      checked={values.weekday.includes('Sat')}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      /> Sat
                    </label>
                    <label className="input-label1">
                      <input type="checkbox"
                      autoComplete="off"
                      name="weekday"
                      id="weekday"
                      value="Sun"
                      checked={values.weekday.includes('Sun')}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      /> Sun
                    </label>


                    
                  </div>
                
                    <label htmlFor="gender" className="input-label">
                        Gender
                    </label>
                    <div className="input-design">
                    <label htmlFor="male" className="input-label1">
                        <input type="radio" 
                        autoComplete="off"
                        name='gender'
                        id="male"
                        value="male"
                        checked={values.gender === "male"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        /> Male</label>

                  <label htmlFor="male" className="input-label1">
                        <input type="radio" 
                        autoComplete="off"
                        name='gender'
                        id="female"
                        value="female"
                        checked={values.gender === 'female'}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        /> Female</label>
                    {errors.gender && touched.gender ?(
                        <p className="form-error">{errors.gender}</p>
                    ): null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="dob" className="input-label">
                      Date Of Birth
                    </label>
                    <input
                      type="date"
                      autoComplete="off"
                      name="dob"
                      id="dob"
                      value={values.dob}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.dob && touched.dob ? (
                      <p className="form-error">{errors.dob}</p>
                    ) : null}
                  </div>
                  <div className="modal-buttons">
                  
                   <button className="input-button" type="submit">
                      Registration
                    </button>
            
                  </div>
                </form>
              </div>
              <div className="modal-right">
                <img
                  src="https://img.freepik.com/free-photo/top-view-unrecognizable-hacker-performing-cyberattack-night_1098-18706.jpg?w=740&t=st=1706938879~exp=1706939479~hmac=6396f50fd2cd2f0b90f5577c1c5a5fa78c7b01a2743867242bd653fd128a27f2"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #efedee;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    width: 100%;
    /* height: 60px; */
    background: hsl(350, 100%, 98%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
  }
  .modal-container {
    display: flex;
    max-width: 60vw;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    position: absolute;

    transition-duration: 0.3s;
    background: #fff;
  }
  .modal-title {
    margin: 0;
    font-weight: 400;
    color: #55311c;
  }
  .form-error {
    font-size: 1.4rem;
    color: #b22b27;
  }
  .modal-desc {
    margin: 6px 0 30px 0;
  }
  .modal-left {
    padding: 60px 40px 20px;
    background: #fff;
    flex: 1.5;
    transition-duration: 0.5s;
    opacity: 1;
  }

  .modal-right {
    flex: 2;
    font-size: 0;
    transition: 0.3s;
    overflow: hidden;
  }
  .modal-right img {
    width: 100%;
    height: 100%;
    transform: scale(1);
    -o-object-fit: cover;
    object-fit: cover;
    transition-duration: 1.2s;
  }

  .modal.is-open .modal-left {
    transform: translateY(0);
    opacity: 1;
    transition-delay: 0.1s;
  }
  .modal-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .modal-buttons a {
    color: rgba(51, 51, 51, 0.6);
    font-size: 16px;
  }

  .sign-up {
    margin: 60px 0 0;
    font-size: 14px;
    text-align: center;
  }
  .sign-up a {
    color: #8c7569;
  }

  .input-button {
    padding: 1.2rem 3.2rem;
    outline: none;
    text-transform: uppercase;
    border: 0;
    color: #fff;
    border-radius: 4px;
    background: #8c7569;
    transition: 0.3s;
    cursor: pointer;
    font-family: "Nunito", sans-serif;
  }
  .input-button:hover {
    background: #55311c;
  }

  .input-label {
    font-size: 13px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.7px;
    color:hsl(14, 45%, 36%);;
    transition: 0.3s;
  }

  .input-block {
    display: flex;
    flex-direction: column;
    padding: 10px 10px 8px;
    border: 2px solid #ddd;
    border-radius: 4px;
    margin-bottom: 20px;
    transition: 0.3s;
  }
  .input-block input {
    outline: 0;
    border: 0;
    padding: 4px 0 0;
    font-size: 14px;
  }

  .input-block input::-moz-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input:-ms-input-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input::placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block:focus-within {
    border-color: #8c7569;
  }
  .input-block:focus-within .input-label {
    color: rgba(140, 117, 105, 0.8);
  }

  @media (max-width: 750px) {
    .modal-container {
      max-width: 90vw;
    }

    .modal-right {
      display: none;
    }
  }


.input-weekday input:checked{
  background-color:#8c7569;
  border-color:#8c7569
}

.input-weekday input{
  margin-right:5px;
}
`;

export default Registration;