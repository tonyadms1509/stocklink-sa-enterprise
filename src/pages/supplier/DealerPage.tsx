import { useUser } from "../../context/UserContext";
import ForemanNotice from "../../components/ForemanNotice";

const DealerPage: React.FC = () => {
  const { role } = useUser();

  return (
    <div className="user-page">
      <h1>Dealer Dashboard</h1>
      {role === "Foreman" ? (
        <ForemanNotice />
      ) : (
        <p>Full Dealer features visible to Admin/Manager</p>
      )}
    </div>
  );
};

export default DealerPage;