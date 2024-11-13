import React, { useEffect, useState } from 'react';
import { getAllProjects, getProject } from "../db/db";
import { useNavigate } from "react-router-dom";
function ProjectSelector(props) {
  const [projects, setProjects] = useState([]);
  async function getProjescts() {
    const allProjects = await getAllProjects().then(data => setProjects(data.data));
  }
  useEffect(() => {
    getProjescts();
  }, []);
  const navigate = useNavigate();
  function selectHandler(e) {
    navigate(`../${e.target.value}`);
    navigate(0);
  }
  return /*#__PURE__*/React.createElement("select", {
    onChange: selectHandler
  }, projects && projects.map(item => /*#__PURE__*/React.createElement("option", {
    key: item.id,
    value: item.uuid
  }, item.name)));
}
export default ProjectSelector;