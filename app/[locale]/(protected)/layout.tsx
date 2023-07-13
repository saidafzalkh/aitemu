import { ReactNode } from "react";

import UserMenu from "@/components/user-menu";

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <div className="container mt-20">
      <div>
        <aside>
          <nav>
            <ul>
              <li>Dashboard</li>
            </ul>
          </nav>
        </aside>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
