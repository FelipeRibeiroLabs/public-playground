import { Navbar } from "./Navbar";

export const Layout = ({ child }: { child: React.ReactNode }) => {
  return (
    <div className="w-full h-full">
      <Navbar />
      {child}
    </div>
  );
};
