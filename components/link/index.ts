import type { App } from "vue";
import Link from "./Link";

Link.install = (app:App) => {
  app.component(Link.name,Link);
  return app;
}

export default Link as typeof Link & Plugin;