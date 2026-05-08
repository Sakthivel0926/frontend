import React from "react";
import { Home, User, Search, Bell, Heart, Settings } from "lucide-react";

function App() {
  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Lucide React Icons Example</h1>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div>
          <Home size={40} color="blue" />
          <p>Home</p>
        </div>

        <div>
          <User size={40} color="green" />
          <p>User</p>
        </div>

        <div>
          <Search size={40} color="orange" />
          <p>Search</p>
        </div>

        <div>
          <Bell size={40} color="red" />
          <p>Bell</p>
        </div>

        <div>
          <Heart size={40} color="pink" />
          <p>Heart</p>
        </div>

        <div>
          <Settings size={40} color="black" />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
}

export default App;