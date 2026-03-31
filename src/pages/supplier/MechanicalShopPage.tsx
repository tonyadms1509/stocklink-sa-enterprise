import { useUser } from "../../context/UserContext";
import ForemanNotice from "../../components/ForemanNotice";

const MechanicalShopPage: React.FC = () => {
  const { role } = useUser();

  return (
    <div className="user-page">
      <h1>Mechanical Shop Dashboard</h1>
      {role === "Foreman" ? (
        <ForemanNotice />
      ) : (
        <p>Full Mechanical Shop features visible to Admin/Manager</p>
      )}
    </div>
  );
};

export default MechanicalShopPage;
