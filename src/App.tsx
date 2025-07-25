import { BrowserRouter, Routes, Route } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/CommonComponets/ErrorFallback";
import React, { Suspense } from "react";
const Layout = React.lazy(() => import("./components/CommonComponets/Layout"));
const Shop = React.lazy(() => import("./pages/Shop"));
const Home = React.lazy(() => import("./pages/Home"));

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Suspense fallback={<h1>Loading...</h1>}>
                  <Layout />
                </Suspense>
              </ErrorBoundary>
            }
          >
            <Route
              index
              element={
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                  <Suspense fallback={<h1>Loading...</h1>}>
                    <Home />
                  </Suspense>
                </ErrorBoundary>
              }
            />
            <Route
              path="/shop"
              element={
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                  <Suspense fallback={<h1>Loading...</h1>}>
                    <Shop />
                  </Suspense>
                </ErrorBoundary>
              }
            />
            <Route path=" *" element={<h1>404</h1>} key="404"></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
