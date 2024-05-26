import { Inter, Poppins } from "next/font/google";
import "../globals.css";
import StoreProvider from "../StoreProvider";
import ThemeProviderNextJs from "../ThemeProviderNextJs";
import { NextIntlClientProvider, useMessages } from "next-intl";
import MuiThemeProvider from "../MuiThemeProvider";
import { Toaster } from "react-hot-toast";
import Nav from "../components/Nav";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Shayan_gstp",
  description: "shayan golestanipour",
};

const RootLayout = ({ children, params: { locale } }) => {
  const messages = useMessages();
  return (
    <html lang={locale} className="dark" suppressHydrationWarning>
      <StoreProvider>
        <body className={`${poppins.className}`}>
          <Toaster />
          <ThemeProviderNextJs>
            <MuiThemeProvider>
              <NextIntlClientProvider messages={messages}>
                <div className=" bg-white dark:bg-[#161616] flex flex-col items-center justify-center relative">
                  <Nav />
                  {children}
                </div>
              </NextIntlClientProvider>
            </MuiThemeProvider>
          </ThemeProviderNextJs>
        </body>
      </StoreProvider>
    </html>
  );
};

export default RootLayout;
