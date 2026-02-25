import { RouterProvider, createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingActionBar from '@/components/FloatingActionBar';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Products from '@/pages/Products';
import HealthTips from '@/pages/HealthTips';
import Contact from '@/pages/Contact';

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
      <FloatingActionBar />
    </div>
  );
}

const rootRoute = createRootRoute({
  component: Layout,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services',
  component: Services,
});

const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/products',
  component: Products,
});

const healthTipsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/health-tips',
  component: HealthTips,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: Contact,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  servicesRoute,
  productsRoute,
  healthTipsRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
