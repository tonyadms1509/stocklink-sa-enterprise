import { useUser } from "../../context/UserContext";
import ForemanNotice from "../../components/ForemanNotice";

const ContractorPage: React.FC = () => {
  const { role } = useUser();

  return (
    <div className="user-page">
      <h1>Contractor Dashboard</h1>
      {role === "Foreman" ? (
        <ForemanNotice />
      ) : (
        <p>Full Contractor features visible to Admin/Manager</p>
      )}
    </div>
  );
};

export default ContractorPage;
