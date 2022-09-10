import e from "../dbschema/edgeql-js";
import { Client } from "edgedb";

export default class SiteApi {
  constructor(readonly client: Client) {}

  async read(id: string) {
    e.select(e.default.Site, () => ({}));
  }

  async list() {
    e.select(e.default.Site, (site) => ({
      title: true,
      order_by: [
        {
          expression: site.id,
          direction: e.DESC,
        },
      ],
    }));
  }

  async remove(id: string) {
    await e
      .delete(e.default.Site, (site) => ({
        filter: e.op(site.id, "=", e.uuid(id)),
      }))
      .run(this.client);
  }

  async update(id: string, set: any) {
    await e
      .update(e.default.Site, (site) => ({
        set,
        filter: e.op(site.id, "=", e.uuid(id)),
      }))
      .run(this.client);
  }
}
