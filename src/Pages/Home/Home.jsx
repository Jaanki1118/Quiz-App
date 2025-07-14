import "./Home.css";
import { TextField, MenuItem, Button } from "@mui/material";
import categories from "../../Data/categories";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../component/ErrorMessage/ErrorMessage";

const Home = ({ name, setName, fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    }
    setError(false);
    await fetchQuestions(category, difficulty); // wait for questions to load
    navigate("/quiz");
  };

  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Quiz Settings</span>

        <div className="settings_select">
          {error && <ErrorMessage>Please fill all the fields</ErrorMessage>}

          <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <TextField
            select
            label="Select Category"
            variant="outlined"
            style={{ marginBottom: 30 }}
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {categories.map((cat) => (
              <MenuItem key={cat.value} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Select Difficulty"
            variant="outlined"
            style={{ marginBottom: 30 }}
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
          >
            <MenuItem value="easy">Easy</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="hard">Hard</MenuItem>
          </TextField>

          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>
      <img src="/Quiz-App/quiz-2.png" className="banner" alt="quiz" />
    </div>
  );
};

export default Home;
