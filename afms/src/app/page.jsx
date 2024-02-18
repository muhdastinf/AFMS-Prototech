import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CardImage from "./components/CardImage";

export default function Home() {
  const data = 1;
  const onSave = 1;
  const onDelete = 1;
  return <CardImage data={data} handleSave={onSave} handleDelete={onDelete} />;
}
