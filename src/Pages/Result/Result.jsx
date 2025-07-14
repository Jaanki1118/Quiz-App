import { useEffect } from "react";
// Change import to useNavigate from react-router-dom
import { useNavigate } from "react-router-dom";
import "./Result.css";
import { Button } from "@mui/material";

const Result = ({ name, score }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate("/"); // use navigate instead of history.push
    }
  }, [name, navigate]);

  return (
    <div className="result">
      <span className="title">Final Score : {score}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        onClick={() => navigate("/")} // use onClick to navigate instead of href
      >
        Go to homepage
      </Button>
    </div>
  );
};

export default Result;
