import { useState } from "react";
import { useAuthContext2 } from "../hooks/useAuthContext2"

// import { createannouncement } from "../../../Backend/controllers/notificationController";
//import { create } from "../../../Backend/models/workoutModel";

const Adminann = () => {
  const [announcement, setAnnouncement] = useState('');
  const {admin} = useAuthContext2()


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hii")
    // await createannouncement(announcement);
    const ann = { announcement };

    fetch('https://miracleachievers.shreeraj.me/backend/api/admin/ann', {
      method: 'POST',
      headers: {        'Content-Type': 'application/json',
      'Authorization': `Bearer ${admin.token}`},

      body: JSON.stringify({
        announcement: ann.announcement
      })
    }).then((res) => {
        alert("announcement made")
        setAnnouncement('')
        return res.json()
     })
  }

  return (
    <div className="announcement-box">
      <h2>Make an announcement</h2>
      <form >
      
        <textarea
          required
          rows="5" cols="80"
          value={announcement}
          onChange={(e) => setAnnouncement(e.target.value)}
        ></textarea>
        <button onClick={handleSubmit}>Done</button>
      </form>
    </div>
  );
}
 
export default Adminann;