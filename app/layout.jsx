import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import StoreProvider from "./StoreProvider";
import ThemeProviderNextJs from "./ThemeProviderNextJs";

config.autoAddCss = false;

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Shayan_gstp",
  description: "shayan golestanipour",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <StoreProvider>
        <body className={`${poppins.className}`}>
          <ThemeProviderNextJs>{children}</ThemeProviderNextJs>
        </body>
      </StoreProvider>
    </html>
  );
};

export default RootLayout;
