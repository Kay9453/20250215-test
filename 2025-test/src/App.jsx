import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import axios from 'axios';


function App() {

  const [users, setUsers] = useState([]);

  useEffect(()=>{
    (async()=>{
      try {
        const res = await axios.get('https://randomuser.me/api/?results=10');
        setUsers(res.data.results);
        // console.log(res.data.results);
        console.log(users);
      } catch (error) {
        console.log(error);
      }
    })();  
  },[]);

  return (
    <>
      <div className="container mx-auto p-4">
      <div className="row g-3">
        {
          users.map((user,index)=>{
            return (
              <div className="col-md-4" key={index}>
                <div className="bg-light p-3 text-center">
                  <img
                    src={user.picture.large}
                    alt="頭像"
                    className="img-fluid rounded-circle"
                  />
                  <h2 className="mb-0">{user.name.last} {user.name.first}</h2>
                  <p className="mb-0">{user.email}</p>
                </div>
              </div>
            )
          })
        }
        {/* <div className="col-md-4">
          <div className="bg-light p-3">
            <img
              src="https://randomuser.me/api/portraits/women/61.jpg"
              alt="頭像"
              className="img-fluid rounded-circle"
            />
            <h2 className="mb-0">Mona Heen</h2>
            <p className="mb-0">mona.heen@example.com</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="bg-light p-3">
            <img
              src="https://randomuser.me/api/portraits/women/10.jpg"
              alt="頭像"
              className="img-fluid rounded-circle"
            />
            <h2 className="mb-0">Susan Craig</h2>
            <p className="mb-0">susan.craig@example.com</p>
          </div>
        </div> */}
      </div>
    </div>
    </>
  )
}

export default App
