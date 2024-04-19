import { Inter, Poppins } from "next/font/google";
import "../globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import StoreProvider from "../StoreProvider";
import ThemeProviderNextJs from "../ThemeProviderNextJs";
import { NextIntlClientProvider, useMessages } from "next-intl";

config.autoAddCss = false;

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
          <ThemeProviderNextJs>
            <NextIntlClientProvider messages={messages}>
              {children}
            </NextIntlClientProvider>
          </ThemeProviderNextJs>
        </body>
      </StoreProvider>
    </html>
  );
};

export default RootLayout;
