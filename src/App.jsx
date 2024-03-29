import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Main from "./components/Main";
import { ThemeProvider } from "./components/contexts/ThemeProvider";
import { ArticlesProvider } from "./components/contexts/ArticlesProvider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <ArticlesProvider>
            <Main />
          </ArticlesProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
    // <div className="bg-red-100 h-screen flex justify-center items-center">
    //       <h1 className="text-4xl font-bold text-gray-800">Hello, world!</h1>
    //     </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
