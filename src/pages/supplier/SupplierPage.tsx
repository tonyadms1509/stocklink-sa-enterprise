import { useUser } from "../../context/UserContext";
import ForemanNotice from "../../components/ForemanNotice";

const SupplierPage: React.FC = () => {
  const { role } = useUser();

  return (
    <div className="user-page">
      <h1>Supplier Dashboard</h1>
      {role === "Foreman" ? (
        <ForemanNotice />
      ) : (
        <p>Full Supplier features visible to Admin/Manager</p>
      )}
    </div>
  );
};

export default SupplierPage;
