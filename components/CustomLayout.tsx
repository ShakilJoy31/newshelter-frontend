import Navbar from "./Navbar";

interface CustomLayoutProps {
  children: React.ReactNode;
}

export default function CustomLayout({ children }: CustomLayoutProps) {
  return (
    <div>
      <div><Navbar></Navbar></div>
      <div className="px-48">{children}</div>
    </div>
  );
}


// Default classs className="flex min-h-screen flex-col items-center justify-between p-24"