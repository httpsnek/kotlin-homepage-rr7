// @ts-ignore
import GlobalFooter from '@jetbrains/kotlin-web-site-ui/dist/footer';
// @ts-ignore
import '@jetbrains/kotlin-web-site-ui/dist/footer.css';
import { ThemeProvider } from '@rescui/ui-contexts';

export function Footer(props: any) {
  return (
    <ThemeProvider theme="dark">
      <GlobalFooter {...props} />
    </ThemeProvider>
  );
}