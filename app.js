import { useState } from 'react';

function App() {

  console.log("tttt");

  const [users, setUsers] = useState(["123"]);

  console.log(users);
  
  // axios.get('https://randomuser.me/api/?results=10')
  // .then((res)=>{
  //   setUsers(res.data.results);
  //   console.log(users);
  // })
  // .catch((error)=>{
  //   console.log(error);
  // })

  return (
    <div className="container mx-auto p-4">
      <div className="row">
        {/* {
          userData.map((user,index)=>{
            return (
              <div className="col-md-4" key={index}>
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
            )
          })
        } */}
        <div className="col-md-4">
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
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
