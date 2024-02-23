import { Sidebar } from "./_components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div 
        className="hidden md:flex w-56 h-full flex-col fixed inset-y-0 z-50"
      >
        <Sidebar/>
      </div>
      {children}
    </div>
  );
};
export default DashboardLayout;