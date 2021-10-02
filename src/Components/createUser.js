import "./components.css";
// import axios from "axios";
import { useState, useContext } from "react";
import { Context } from "../Context";
import EditAndCreateUser from "./subComponents/EditAndCreateUser";

function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const context = useContext(Context);
  const [addeduser, setAddeduser] = useState(true);

  //creating
  const postUser = async () => {
    // let { data } = await axios.post(
    //   "https://61238a96124d8800175682cd.mockapi.io/users",
    //   {
    //     name: name,
    //     email: email,
    //     country: country,
    //   }
    // );
    const user=await fetch("https://61238a96124d8800175682cd.mockapi.io/users",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
            name:name,
            email:email,
            country:country
        })
    })
    const data=user.json();
    console.log(data);
    let tempost = [...context.users];
    tempost.push(data);
    console.log(tempost);
    context.setUsers(tempost);
    setAddeduser(false);

    //props.history.push("/") on submitting the form it will redirect to user page
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    postUser();
  };

  return (
    <>
      <div className="Container">
        {addeduser ? (
          <>
            <h1 className="text-center text-info">CreateUser</h1>
            <EditAndCreateUser
              name={name}
              email={email}
              country={country}
              setName={setName}
              setEmail={setEmail}
              setCountry={setCountry}
              handleSubmit={handleSubmit}
            />
          </>
        ) : (
          <>
            <div className="confirmtext">
              <h1>User added Successfully !</h1>
              <i className="fas fa-check-circle"></i>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default CreateUser;
