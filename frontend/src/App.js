import React  from "react"
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component"
import ExerciseList from "./components/exercise-list.component"
import EditExercise from "./components/edit-exercise.component"
import CreateExercises from "./components/create-exercise.component"
import CreateUser from "./components/create-user.component"

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <br />
        <Routes>
          <Route index element={<ExerciseList />} />
          <Route path="/edit/:id" element={<EditExercise />} />
          <Route path="/create" element={<CreateExercises />} />
          <Route path="/user" element={<CreateUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
