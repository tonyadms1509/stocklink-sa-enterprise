import { useUser } from "../../context/UserContext";
import ForemanNotice from "../../components/ForemanNotice";

const MotorSparesPage: React.FC = () => {
  const { role } = useUser();

  return (
    <div className="user-page">
      <h1>Motor Spares Dashboard</h1>
      {role === "Foreman" ? (
        <ForemanNotice />
      ) : (
        <p>Full Motor Spares features visible to Admin/Manager</p>
      )}
    </div>
  );
};

export default MotorSparesPage;
