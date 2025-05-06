import { PublicRoutes } from '@/routes/public.routes';
import { useSession } from '@/contexts/SessionContext';
import { PrivateRoutes } from '@/routes/private.routes';

export function Routes() {
  const { isAuthenticated } = useSession();

  return isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />;
}
