import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <RegistrationForm />
      <FormikForm />
    </div>
  );
}