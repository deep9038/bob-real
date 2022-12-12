
import Calculator from "./Calculator/Calculator";
import Welcome from "./Welcome/Welcome";
const Dashboard = () => {
  return (
  <div className="title">
    <div style={{margin:'10px'}}>
    <Welcome/>
    <Calculator/>
    </div>
  </div>
  );
};

export default Dashboard;
