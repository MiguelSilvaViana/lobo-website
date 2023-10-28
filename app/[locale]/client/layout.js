import { Provider } from '../Provider';

export default function SubLayout({ params: { locale }, children }) {
  return (
    <Provider locale={locale}>
      {children}
    </Provider>
  );
}