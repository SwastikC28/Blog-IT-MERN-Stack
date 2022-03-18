import classes from "./Profile.module.css";
import Layout from "../../Layout/Layout";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import { useEffect, useState } from "react";
import { getLoggedInProfile } from "../../api/apicalls";
import { useDispatch } from "react-redux";
import { userActions } from "../../../src/store/user";
import { authActions } from "../../store/auth";
import { useSelector } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const getMyProfile = async () => {
      const profile = await getLoggedInProfile();
      console.log(profile);
      if (profile.success) {
        dispatch(
          userActions.updateProfile({
            userid: profile.data._id,
            firstName: "Swastik",
            lastName: "Chaudhary",
            email: "swast@gmail.com",
          })
        );
        dispatch(authActions.login());
      } else {
        console.log("Fail");
      }
    };
    getMyProfile();
  }, []);

  return (
    <Layout>
      <div className={classes["profile-parent-container"]}>
        <div className={classes["profile-picture"]}>
          <h1>
            {user.firstName[0]}
            {user.lastName[0]}
          </h1>
        </div>
        <div className={classes["edit-profile"]}>
          <p>Edit Profile</p>
        </div>
        <div className={classes["blog-info"]}>
          <div>
            <h1>100</h1>
            <p>Blogs</p>
          </div>
          <div>
            <h1>10</h1>
            <p>Favourite Blogs</p>
          </div>
        </div>

        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList onChange={handleChange} centered>
                <Tab label="Timeline" value={"1"} />
                <Tab label="Favourite" value={"2"} />
              </TabList>
            </Box>
            <TabPanel value={"1"}>
              <div className={classes["timeline"]}>
                <h1>Your Timeline :</h1>

                <div className={classes.blog}>
                  <div className={classes.avatar}>
                    <h1>S</h1>
                  </div>
                  <div className={classes.content}>
                    <h1>Title</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Dolore tenetur explicabo esse cumque? Quia, iure odio
                      nulla sit exercitationem ullam facilis praesentium
                      assumenda repudiandae placeat neque ab sunt repellat
                      dignissimos. Lorem ipsum dolor sit amet, consectetur.
                    </p>

                    <div className={classes["content-footer"]}>
                      <button>Read More</button>
                      <button>Favourite</button>
                    </div>
                  </div>

                  <div className={classes.calender}>
                    <p>8:30 PM</p>
                    <h1>12th</h1>
                    <p>September</p>
                    <p>2020</p>
                  </div>
                </div>
                <div className={classes.blog}>
                  <div className={classes.avatar}>
                    <h1>S</h1>
                  </div>
                  <div className={classes.content}>
                    <h1>Title</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Dolore tenetur explicabo esse cumque? Quia, iure odio
                      nulla sit exercitationem ullam facilis praesentium
                      assumenda repudiandae placeat neque ab sunt repellat
                      dignissimos. Lorem ipsum dolor sit amet, consectetur.
                    </p>

                    <div className={classes["content-footer"]}>
                      <button>Read More</button>
                      <button>Favourite</button>
                    </div>
                  </div>

                  <div className={classes.calender}>
                    <p>8:30 PM</p>
                    <h1>12th</h1>
                    <p>September</p>
                    <p>2020</p>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={"2"}>No Favourite Blogs Yet</TabPanel>
          </TabContext>
        </Box>
      </div>
    </Layout>
  );
};

export default Profile;
