import { useEffect, useState } from "react";
import { getUserData } from "./services/users.service";

export const Profile = (props) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // https://reqres.in/api/users

    const getUsers = async () => {
      const res = await fetch("https://reqres.in/api/users");
      const data = await res.json();
      const users = await data.data;
      let mergedArray = [];
      // console.log("rajesh getUsers");
      for (let i = 0; i < users.length; i++) {
        const apiData = await getUserData(users[i].id);
        // console.log("rajesh apiData", apiData);

        if (apiData !== "User ID does not exists") {
          mergedArray[i] = { ...apiData, ...users[i] };
        }
        // console.log("rajesh mergedArray", mergedArray);
        // if (users.length === i) {
        //   await setUserData(mergedArray);
        // }
      }

      setUserData(mergedArray);
    };
    getUsers();
  }, []);
  console.log("rajesh userData--", userData);
  return (
    <>
      <div>
        <h1>Category Name </h1>
        {userData ? (
          userData.map((e) => <UserInfo user={e} />)
        ) : (
          <div>No Data Found </div>
        )}
      </div>
    </>
  );
};

export const UserInfo = (props) => {
  const { user } = props;
  console.log("rajesh user--", user);
  return (
    <>
      <div style>
        {/* <h1>Category Name </h1> */}
        <div style={{ display: "flex" }}>
          <img
            src={user.avatar}
            alt="profileName"
            width="100px"
            style={{ borderRadius: "50%", margin: auto }}
          />
          <div> {}</div>
        </div>
      </div>
    </>
  );
};
