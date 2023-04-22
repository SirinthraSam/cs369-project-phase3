import { NavLink, Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="container">
      <nav>
        <NavLink to="/">ประวัติส่วนตัว</NavLink>&nbsp;
        <NavLink to="/repair">แจ้งซ่อม</NavLink>&nbsp;
        <NavLink to="/problem">แจ้งปัญหา</NavLink>&nbsp;
        <NavLink to="/telephone">เบอร์ติดต่อฉุกเฉิน</NavLink>&nbsp;
      </nav>
      <div className="container">
        <Outlet /> {/* your content will be shown in the Outlet */}
      </div>
  
    </div>
  );
};

export default MainPage;
