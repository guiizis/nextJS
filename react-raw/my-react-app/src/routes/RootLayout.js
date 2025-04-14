import MainHeader from "../components/HeaderComponents/Header";
import { Outlet } from 'react-router-dom'

export function RootLayout() {
  return (
    <>
      <MainHeader />
      <Outlet /> {/* works as 'children' prop */}
    </>
  );
}